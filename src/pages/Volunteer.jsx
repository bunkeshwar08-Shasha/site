import React from "react";
import { Kicker, Field, Fieldset, Honeypot, Status, CheckGroup, Card } from "../components/Bits";
import useFormPost from "../components/useFormPost";

const ROLES = [
  "Camera / videography",
  "Video editing",
  "Photography",
  "Drone operation",
  "Sound / audio",
  "Game hosting & anchoring",
  "Logistics & ground ops",
  "Cooking / kitchen",
  "First aid / rescue certified",
  "Social media & content",
  "Graphic design",
  "Guest care & hospitality",
];

export default function Volunteer() {
  const { state, message, submit } = useFormPost({
    subject: "New volunteer application — Bunkeshwar",
  });

  return (
    <section>
      <div className="wrap">
        <Kicker>Join the crew</Kicker>
        <h1 style={{ fontSize: "clamp(38px,7vw,72px)", color: "var(--heading)", marginTop: 14 }}>
          Run the game<br />from the inside.
        </h1>
        <p style={{ fontSize: 18, maxWidth: 720, marginTop: 16 }}>
          Every batch needs people behind the camera and behind the scenes — the ones who
          rig the tasks, film the confessions, feed twelve people at midnight and keep the
          whole thing safe. If that sounds better to you than playing, this is your form.
        </p>

        <div className="grid3" style={{ margin: "30px 0" }}>
          <Card title="What you get">
            Stay, all meals and travel support for the batch you work, a credit on the
            films, and footage for your own reel.
          </Card>
          <Card title="What we need">
            Someone who can commit to the full four days on the ground, keep a secret,
            and stay calm when a game goes sideways.
          </Card>
          <Card title="What it isn't">
            Not a free holiday and not a guest slot — crew work while the batch plays.
            You'll be tired and you'll love it.
          </Card>
        </div>

        <Status
          state={state}
          message={message}
          okText="Got it. We keep a running crew list and reach out batch by batch — expect a message from bunkeshwar08@gmail.com or on WhatsApp."
        />

        {state !== "done" && (
          <form className="form" onSubmit={submit} style={{ marginTop: 20 }}>
            <Honeypot />

            <Fieldset title="About you">
              <div className="row">
                <Field label="Full name" required>
                  <input name="Full name" required />
                </Field>
                <Field label="Age" required>
                  <input name="Age" type="number" min="18" max="99" required />
                </Field>
              </div>
              <div className="row">
                <Field label="Email" required>
                  <input name="Email" type="email" required />
                </Field>
                <Field label="WhatsApp number" required>
                  <input name="WhatsApp" required placeholder="+91 ..." />
                </Field>
              </div>
              <div className="row">
                <Field label="Where are you based?" required>
                  <input name="Based in" required />
                </Field>
                <Field label="Instagram / portfolio handle">
                  <input name="Instagram" placeholder="@" />
                </Field>
              </div>
            </Fieldset>

            <Fieldset title="What you'd bring" note="Tick everything you can genuinely do.">
              <Field label="Skills &amp; roles" hint="Tick all that apply">
                <CheckGroup name="Skills" options={ROLES} />
              </Field>
              <Field label="Link to your work" hint="Showreel, Drive folder, Instagram, portfolio site — whatever you have">
                <input name="Portfolio link" type="url" placeholder="https://" />
              </Field>
              <Field label="Tell us about relevant experience" required>
                <textarea name="Experience" required />
              </Field>
              <Field label="Do you own gear you'd bring?" hint="Camera bodies, lenses, drone, mics, lights — or none, that's fine too">
                <textarea name="Own gear" style={{ minHeight: 80 }} />
              </Field>
            </Fieldset>

            <Fieldset title="Availability">
              <div className="row">
                <Field label="Which months could you work?" required>
                  <input name="Available months" required placeholder="e.g. March–June, weekends only" />
                </Field>
                <Field label="Can you commit to all four days on site?" required>
                  <select name="Full commitment" required defaultValue="">
                    <option value="" disabled>Pick one</option>
                    <option>Yes — Friday to Monday, on site</option>
                    <option>Mostly — with one flexible day</option>
                    <option>No — I can only do part of it</option>
                  </select>
                </Field>
              </div>
              <Field label="Have you done anything like this before?" required>
                <select name="Prior experience level" required defaultValue="">
                  <option value="" disabled>Pick one</option>
                  <option>Yes — production or event crew</option>
                  <option>Yes — hostel, trek or travel ops</option>
                  <option>No, but I learn fast</option>
                </select>
              </Field>
              <Field label="Why do you want to be on the crew?" required>
                <textarea name="Why crew" required />
              </Field>
              <div className="checks" style={{ flexDirection: "column", gap: 12, marginTop: 6 }}>
                <label className="check">
                  <input type="checkbox" name="Confidentiality" value="Yes — will keep the format confidential" required />
                  <span>I understand crew see the tasks, twists and Mole assignments in advance, and I'll keep them confidential. <span className="req">*</span></span>
                </label>
              </div>
            </Fieldset>

            <div>
              <button className="btn" type="submit" disabled={state === "sending"}>
                {state === "sending" ? "Sending…" : "Apply to join the crew"}
              </button>
              <Status state={state} message={message} okText="" />
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
