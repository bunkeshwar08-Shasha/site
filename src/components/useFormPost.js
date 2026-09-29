import { useState } from "react";
import {
  FORM_PROVIDER,
  FORM_ENDPOINT_ID,
  WEB3FORMS_KEY,
  BRAND,
} from "../config";

/**
 * Submits a form and emails it to BRAND.email.
 *
 * Default provider is FormSubmit — no account, no API key. The first
 * submission triggers a one-time confirmation email; click it once and
 * everything after that arrives normally.
 *
 * Checkbox groups are joined into one readable line so the email doesn't
 * arrive with the same key repeated.
 */
export default function useFormPost({ subject }) {
  const [state, setState] = useState("idle"); // idle | sending | done | error
  const [message, setMessage] = useState("");

  async function submit(event) {
    event.preventDefault();
    const form = event.target;

    setState("sending");
    setMessage("");

    const data = new FormData(form);
    const merged = {};
    for (const [key, value] of data.entries()) {
      if (value === "") continue;
      merged[key] = merged[key] ? `${merged[key]}, ${value}` : value;
    }

    let url;
    let payload;

    if (FORM_PROVIDER === "web3forms") {
      if (!WEB3FORMS_KEY) {
        setState("error");
        setMessage(
          "Add your Web3Forms access key to .env as VITE_WEB3FORMS_KEY before publishing."
        );
        return;
      }
      url = "https://api.web3forms.com/submit";
      payload = {
        ...merged,
        access_key: WEB3FORMS_KEY,
        subject,
        from_name: BRAND.name,
      };
    } else {
      url = `https://formsubmit.co/ajax/${FORM_ENDPOINT_ID || BRAND.email}`;
      payload = {
        ...merged,
        _subject: subject,
        _template: "table", // arrives as a tidy table, not a wall of text
        _captcha: "false",
      };
    }

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      const ok = json.success === true || json.success === "true";

      if (ok) {
        setState("done");
        form.reset();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setState("error");
        setMessage(
          json.message === "Server Error"
            ? "FormSubmit is currently returning a server error. Switch to Web3Forms or try again later."
            : json.message ||
              "Something went wrong. Please try again, or email us directly."
        );
      }
    } catch (err) {
      setState("error");
      setMessage(
        `Network error — check your connection and try again, or email us at ${BRAND.email}.`
      );
    }
  }

  return { state, message, submit };
}
