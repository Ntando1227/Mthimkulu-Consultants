export const motionProfiles = {
  about: {
    page: { duration: 1.15, ease: [0.16, 1, 0.3, 1] },
    item: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
    hover: { y: -4, scale: 1.005 },
  },

  services: {
    page: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    item: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    hover: { y: -10, scale: 1.02 },
  },

  thinking: {
    page: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
    item: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    hover: { x: 10, scale: 1.005 },
  },

  contact: {
    page: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    item: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
    hover: { y: -6, scale: 1.01 },
  },
};
