import { promises as fs } from "fs";
import path from "path";

async function getEnquiries() {
  const filePath = path.join(process.cwd(), "data", "enquiries.json");

  try {
    const file = await fs.readFile(filePath, "utf8");
    return JSON.parse(file);
  } catch {
    return [];
  }
}

export default async function EnquiriesAdminPage() {
  const enquiries = await getEnquiries();

  return (
    <main className="min-h-screen bg-[#120c07] px-6 py-32 text-white md:px-12">
      <p className="section-label mb-8">Admin</p>

      <h1 className="editorial-heading max-w-7xl text-[3.3rem] md:text-[6.8rem]">
        Enquiries
      </h1>

      <div className="mt-16 grid gap-6">
        {enquiries.length === 0 && (
          <div className="glass p-8">
            <p className="large-body">No enquiries yet.</p>
          </div>
        )}

        {enquiries.map((enquiry: any) => (
          <article key={enquiry.id} className="glass p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[#f2d18b]">
              {enquiry.service || "General enquiry"}
            </p>

            <h2 className="mt-5 text-3xl font-black uppercase">
              {enquiry.name}
            </h2>

            <p className="mt-3 text-white/70">{enquiry.email}</p>
            <p className="mt-3 text-white/50">
              {enquiry.organisation || "No organisation provided"}
            </p>

            <p className="mt-8 text-lg leading-relaxed text-white/80">
              {enquiry.message}
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.3em] text-white/40">
              {new Date(enquiry.receivedAt).toLocaleString()}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
