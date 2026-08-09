import React from "react";
import { Kicker, Field, Fieldset, Honeypot, Status, CheckGroup, Card } from "../components/Bits";
import useFormPost from "../components/useFormPost";

const INTERESTS = [
  "On-screen branding in the films",
  "Product placement during tasks",
  "Prize / reward sponsorship",
  "Gear or kit supply",
  "Food & beverage supply",
  "Venue or stay partnership",
  "Travel & transport partnership",
  "Cash sponsorship",
  "Co-branded content / reels",
  "Long-term season partnership",
];

export default function Sponsors() {
  const { state, message, submit } = useFormPost({
    subject: "New sponsor enquiry — Bunkeshwar",
  });

  return (
    <section>
      <div className="wrap">
        <Kicker>Partnerships</Kicker>
        <h1 style={{ fontSize: "clamp(38px,7vw,72px)", color: "var(--heading)", marginTop: 14 }}>
          Put your brand<br />inside the game.
        </h1>
        <p style={{ fontSize: 18, maxWidth: 760, marginTop: 16 }}>
          Bunkeshwar isn't a trip with a logo on the banner. Every batch is a filmed format
          with tasks, prizes, gear and a currency built into it — which means a partner can
          be part of the story rather than an ad before it.
        </p>

        <div className="grid3" style={{ margin: "30px 0" }}>
          <Card title="Who's in the room">
            10–12 solo travellers per batch, screened and cast by hand — mixed on age,
            background and nationality. High-intent, high-energy, and there by choice.
          </Card>
          <Card title="What gets made">
            Every batch produces one trailer and one full retreat film, plus stills and
            reaction footage across the four days — all of it usable in a partnership.
          </Card>
          <Card title="How it can work">
            Sponsor a task. Fund a prize. Supply the gear the game runs on. Or take a
            season, across every batch and every film.
          </Card>
        </div>

        <Status
          state={state}
          message={message}
          okText="Thanks — enquiry received. We'll come back to you at the email you gave us, usually within two working days."
        />

        {state !== "done" && (
          <form className="form" onSubmit={submit} style={{ marginTop: 20 }}>
            <Honeypot />

            <Fieldset title="Your company">
              <div className="row">
                <Field label="Company / brand name" required>
                  <input name="Company" required />
                </Field>
                <Field label="Website">
                  <input name="Website" type="url" placeholder="https://" />
                </Field>
              </div>
              <div className="row">
                <Field label="Your name" required>
                  <input name="Contact name" required />
                </Field>
                <Field label="Your role" required>
                  <input name="Role" required />
                </Field>
              </div>
              <div className="row">
                <Field label="Email" required>
                  <input name="Email" type="email" required />
                </Field>
                <Field label="Phone / WhatsApp" required>
                  <input name="Phone" required placeholder="+91 ..." />
                </Field>
              </div>
              <Field label="Category" required>
                <select name="Category" required defaultValue="">
                  <option value="" disabled>Pick the closest</option>
                  <option>Outdoor / adventure gear</option>
                  <option>Apparel &amp; footwear</option>
                  <option>Food &amp; beverage</option>
                  <option>Travel, stays &amp; hostels</option>
                  <option>Consumer tech &amp; cameras</option>
                  <option>Health, fitness &amp; nutrition</option>
                  <option>Fintech / apps</option>
                  <option>Media &amp; production</option>
                  <option>Tourism board / government</option>
                  <option>Other</option>
                </select>
              </Field>
            </Fieldset>

            <Fieldset title="What you're after" note="Tick anything that sounds right — we'll shape the rest on a call.">
              <Field label="Areas of interest" hint="Tick all that apply">
                <CheckGroup name="Interests" options={INTERESTS} />
              </Field>
              <div className="row">
                <Field label="Indicative budget" hint="Ballpark is fine — it helps us come back with something real">
                  <select name="Budget" defaultValue="">
                    <option value="" disabled>Pick a range</option>
                    <option>Under ₹50,000</option>
                    <option>₹50,000 – ₹2,00,000</option>
                    <option>₹2,00,000 – ₹5,00,000</option>
                    <option>₹5,00,000+</option>
                    <option>In-kind / product only</option>
                    <option>Prefer to discuss</option>
                  </select>
                </Field>
                <Field label="Timeline" required>
                  <select name="Timeline" required defaultValue="">
                    <option value="" disabled>Pick one</option>
                    <option>Next batch — as soon as possible</option>
                    <option>This quarter</option>
                    <option>This year</option>
                    <option>Exploring for later</option>
                  </select>
                </Field>
              </div>
              <Field label="What would a great partnership look like for you?" required>
                <textarea name="Partnership goals" required />
              </Field>
              <Field label="Anything else we should know?">
                <textarea name="Notes" style={{ minHeight: 80 }} />
              </Field>
            </Fieldset>

            <div>
              <button className="btn" type="submit" disabled={state === "sending"}>
                {state === "sending" ? "Sending…" : "Send enquiry"}
              </button>
              <Status state={state} message={message} okText="" />
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
