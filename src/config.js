// ---------------------------------------------------------------------------
// FORM DELIVERY
//
// Default: FormSubmit (https://formsubmit.co) — completely free, no signup,
// no dashboard and NO API KEY. Submissions are emailed straight to the address
// below.
//
// The only setup step: submit any form on the site once. FormSubmit sends a
// one-time confirmation email to bunkeshwar08@gmail.com — click the link in it,
// and every submission from then on lands in that inbox. You only do this once.
//
// Optional hardening: after activating, FormSubmit gives you a random string
// you can use instead of the raw email address, so your address isn't visible
// in the page source. Paste it into FORM_ENDPOINT_ID below if you want that.
// ---------------------------------------------------------------------------
export const FORM_PROVIDER = "formsubmit"; // "formsubmit" | "web3forms"

// Leave empty to post to the email address directly, or paste the random
// string FormSubmit gives you after activation (e.g. "a1b2c3d4e5f6...").
export const FORM_ENDPOINT_ID = "";

// Only used if you switch FORM_PROVIDER to "web3forms".
// Free key (250 submissions/month) from https://web3forms.com
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
