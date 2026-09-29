// ---------------------------------------------------------------------------
// FORM DELIVERY
//
// Web3Forms is the default provider for this site because FormSubmit has been
// intermittently returning 500 errors for this address. Create a free account at
// https://web3forms.com and paste your access key into the .env file below.
//
// Copy .env.example to .env and set VITE_WEB3FORMS_KEY to your real key.
// ---------------------------------------------------------------------------
export const FORM_PROVIDER = "web3forms"; // "formsubmit" | "web3forms"

// Optional: if you choose to keep FormSubmit instead, leave this empty to post to
// the raw email address directly, or paste the random string FormSubmit gives you
// after activation (e.g. "a1b2c3d4e5f6...").
export const FORM_ENDPOINT_ID = "";

// Free key (250 submissions/month) from https://web3forms.com.
export const WEB3FORMS_KEY =
  import.meta.env.VITE_WEB3FORMS_KEY || "";

export const BRAND = {
  name: "Bunkeshwar Retreats",
  tagline: "Bunking on life, feeling alive",
  email: "bunkeshwar08@gmail.com",
  phone: "+91 89********",
  phoneRaw: "9189********",
  instagram: "https://www.instagram.com/bunkeshwar08/",
  instagramHandle: "@bunkeshwar08",
  youtube: "https://www.youtube.com/@Bunkeshwar",
  youtubeHandle: "@Bunkeshwar",
  location: "Rishikesh, Uttarakhand",
  price: "₹14,999",
};
