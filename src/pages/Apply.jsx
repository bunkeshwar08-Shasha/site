import React from "react";
import { Kicker, Field, Fieldset, Honeypot, Status, ScaleGroup } from "../components/Bits";
import useFormPost from "../components/useFormPost";

export default function Apply() {
  const { state, message, submit } = useFormPost({
    subject: "New guest application — Bunkeshwar",
  });

  return (
    <section>
      <div className="wrap">
        <Kicker>Case File 001 · Who's the Mole?</Kicker>
        <h1 style={{ fontSize: "clamp(38px,7vw,72px)", color: "var(--heading)", marginTop: 14 }}>
          Apply.<br />Don't just book.
        </h1>
        <p style={{ fontSize: 18, maxWidth: 720, marginTop: 16 }}>
          Twelve strangers in a house for four days is intimate, so every batch runs through a
          short application first. It takes about ten minutes. There are no right answers —
          we're balancing a room, not ranking people.
        </p>

        <div className="note" style={{ margin: "24px 0 30px" }}>
          Everything here is read by a human, kept private to the casting team, and deleted
          if you aren't placed.
        </div>

        <Status
          state={state}
          message={message}
          okText="Application received. We read every one — expect to hear from us within a few days, from bunkeshwar08@gmail.com or on WhatsApp."
        />

        {state !== "done" && (
          <form className="form" onSubmit={submit} style={{ marginTop: 20 }}>
            <Honeypot />

            {/* -------------------------------------------------- the basics */}
            <Fieldset title="The basics">
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
                <Field label="WhatsApp number" hint="With country code" required>
                  <input name="WhatsApp" required placeholder="+91 ..." />
                </Field>
              </div>
              <div className="row">
                <Field label="City &amp; country" required>
                  <input name="City and country" required />
                </Field>
                <Field label="Instagram handle" hint="Optional — helps us picture you">
                  <input name="Instagram" placeholder="@" />
                </Field>
              </div>
              <Field label="Which dates are you after?" hint="Rough is fine — 'any weekend in March', a month, or a specific batch" required>
                <input name="Preferred dates" required />
              </Field>
            </Fieldset>

            {/* ------------------------------------------------ the questionnaire */}
            <Fieldset
              title="The questionnaire"
              note="This is the part that actually decides the batch. Be honest rather than impressive."
            >
              <Field label="In a room of strangers, which one are you?" required>
                <select name="Group role" required defaultValue="">
                  <option value="" disabled>Pick the closest</option>
                  <option>The organiser — I'll end up running the plan</option>
                  <option>The instigator — I start things and see what happens</option>
                  <option>The observer — I read the room before I move</option>
                  <option>The peacemaker — I keep everyone together</option>
                  <option>The joker — I'd rather make it funny than win</option>
                </select>
              </Field>

              <Field label="Would you rather win by outplaying people, or by being trusted?" required>
                <select name="Win style" required defaultValue="">
                  <option value="" disabled>Pick one</option>
                  <option>Outplaying — I want the better move</option>
                  <option>Being trusted — I want the room on my side</option>
                  <option>Honestly, I just want to be in the middle of it</option>
                </select>
              </Field>

              <Field
                label="How comfortable are you lying to someone's face — for a game?"
                required
              >
                <ScaleGroup name="Lying comfort" low="I'd fold instantly" high="I'd enjoy it far too much" />
              </Field>

              <Field label="How do you feel about being on camera all weekend?" required>
                <select name="Camera comfort" required defaultValue="">
                  <option value="" disabled>Pick one</option>
                  <option>Forget it's there within an hour</option>
                  <option>Fine, as long as nobody points it at me on purpose</option>
                  <option>Nervous, but I want to get over it</option>
                  <option>I'd want limits — let's talk</option>
                </select>
              </Field>

              <Field label="Tell us about a time you were genuinely out of your comfort zone." required>
                <textarea name="Out of comfort zone" required />
              </Field>

              <Field
                label="What makes you insufferable to travel with?"
                hint="Everyone has something. The people who can name it are the ones we want."
                required
              >
                <textarea name="Insufferable trait" required />
              </Field>

              <Field label="Something you could talk about for twenty minutes without stopping." required>
                <textarea name="Twenty minute topic" required style={{ minHeight: 80 }} />
              </Field>

              <Field label="Why this, and why now?" required>
                <textarea name="Why now" required />
              </Field>

              <div className="row">
                <Field label="Comfort with physical activity" hint="River, forest trails, a mountain pass" required>
                  <select name="Physical activity" required defaultValue="">
                    <option value="" disabled>Pick one</option>
                    <option>Very comfortable — the more the better</option>
                    <option>Comfortable with most things</option>
                    <option>Cautious, but willing</option>
                    <option>I have a limitation — noted below</option>
                  </select>
                </Field>
                <Field label="Any dietary, medical or access needs?" hint="Anything we should plan around">
                  <textarea name="Dietary or medical needs" style={{ minHeight: 80 }} />
                </Field>
              </div>
            </Fieldset>

            {/* ------------------------------------------------ the video */}
            <Fieldset
              title="The video intro"
              note="Sixty seconds. Phone camera. No editing, no script — we just want to hear you talk."
            >
              <div className="note" style={{ marginBottom: 18 }}>
                Record on your phone, upload it to Google Drive (set sharing to
                <b> anyone with the link</b>), an unlisted YouTube video, or Dropbox — then paste
                the link below. Say your name, where you're from, and answer one thing:
                <b> the last time you surprised yourself.</b>
              </div>
              <Field label="Link to your video" hint="Google Drive, unlisted YouTube, Dropbox — anything we can open" required>
                <input name="Video intro link" type="url" required placeholder="https://" />
              </Field>
              <Field label="Anything we should know before we watch it?">
                <input name="Video note" />
              </Field>
            </Fieldset>

            {/* ------------------------------------------------ consent */}
            <Fieldset title="Last bit">
              <Field label="Content tier preference" hint="Story = you may appear in the public cut. Private = your footage stays in your batch's film only." required>
                <select name="Content tier" required defaultValue="">
                  <option value="" disabled>Pick one</option>
                  <option>Story — happy to be in the public cut</option>
                  <option>Private — keep me out of public content</option>
                  <option>Not sure yet — let's discuss</option>
                </select>
              </Field>
              <Field label="How did you hear about us?">
                <input name="How did you hear" />
              </Field>
              <div className="checks" style={{ flexDirection: "column", gap: 12, marginTop: 6 }}>
                <label className="check">
                  <input type="checkbox" name="Solo confirmation" value="Yes — applying solo" required />
                  <span>I'm applying on my own. I understand this is solo travellers only — no couples or friend groups. <span className="req">*</span></span>
                </label>
                <label className="check">
                  <input type="checkbox" name="Filming consent" value="Yes — understands filming" required />
                  <span>I understand the weekend is filmed, and that I can flag the crew at any time to have my footage pulled from the public cut. <span className="req">*</span></span>
                </label>
                <label className="check">
                  <input type="checkbox" name="Age confirmation" value="Yes — 18 or over" required />
                  <span>I'm 18 or over. <span className="req">*</span></span>
                </label>
              </div>
            </Fieldset>

            <div>
              <button className="btn" type="submit" disabled={state === "sending"}>
                {state === "sending" ? "Sending…" : "Submit application"}
              </button>
              <Status state={state} message={message} okText="" />
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
