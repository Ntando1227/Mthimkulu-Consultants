import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import bcrypt from "bcryptjs";

const adminUser = {
  id: "1",
  name: "Ntando",
  email: "Ntandostb@gmail.com",
  passwordHash: bcrypt.hashSync("Mtimkulu", 10),
};

export const authOptions: NextAuthOptions = {
  secret: "mthimkulu-secret-key",

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const isValidEmail =
          credentials.email === adminUser.email;

        const isValidPassword = bcrypt.compareSync(
          credentials.password,
          adminUser.passwordHash
        );

        if (isValidEmail && isValidPassword) {
          return {
            id: adminUser.id,
            name: adminUser.name,
            email: adminUser.email,
          };
        }

        return null;
      },
    }),
  ],

  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
  },
};


