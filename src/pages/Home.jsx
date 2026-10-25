import React from "react";
import { Link } from "react-router-dom";
import { SectionHead, Card, Kicker } from "../components/Bits";
import { useTheme } from "../components/ThemeToggle";
import useFormPost from "../components/useFormPost";
import { BRAND } from "../config";

const THREADS = [
  ["01", "Bunkeshwar Rupees", "An in-camp currency earned through every task, from Friday afternoon onward. It's the only scoreboard that matters — and the only thing that decides who wins."],
  ["02", "Secret Moles", "Two players in every batch are secretly briefed to sabotage tasks from the inside — without getting caught, and without knowing who the other Mole is."],
  ["03", "The Confessional Tent", "An always-open camera booth running the entire four days. Strategy, suspicion, a rant, a reveal. It's where the honest, unscripted lines live."],
  ["04", "Nightly Banishing Circles", "Every evening the group gathers at the fire, names their suspects and casts a vote. Nobody finds out who was right until the very last morning — the drama and the cliffhanger reset every single night."],
  ["05", "The Bunkeshwar Passport", "A physical, stamped booklet every guest carries all weekend. Each milestone earns a stamp. It goes home with you — half souvenir, half proof you were there."],
];

const DAYS = [
  ["0", "ONLINE", "The Screen", "The questionnaire and your video intro. We read every one and cast the batch by hand. The only step you complete alone.", true],
  ["1", "FRI", "The Cold Open", "Strangers arrive for the first briefing, teams get drafted, and the first tasks run before the first bonfire and the first circle."],
  ["2", "SAT", "Raising the Stakes", "Tasks raise the Rupee stakes, alliances start to shift, and a second circle closes out the night."],
  ["3", "SUN", "The Squeeze", "Team sizes shrink day over day toward a solo finale — suspicion peaks before the final bonfire and the final circle."],
  ["4", "MON", "The Reveal", "Every secret Mole is unmasked, the hidden score is added live, passports get their final stamp, and the circle closes one last time."],
];

export default function Home() {
  const { logo } = useTheme();
  const guestForm = useFormPost({
    subject: "Game Night Pass Request — Bunkeshwar",
  });

  return (
    <>
      {/* ------------------------------------------------------------ hero */}
      <section className="hero">
        <div className="wrap">
          <img className="mark" src={logo} alt="Bunkeshwar Retreats" />
          <h1>
            Bunking on life,
            <span className="outline">Feeling alive.</span>
          </h1>
          <p className="lede">
            The next batch is now open for everyday guests and corporate groups who want to
            experience the game in person. Creator Season 1 episodes are coming soon to YouTube
            and Instagram, and the creator version remains exclusive to the original experience.
          </p>
          <div style={{ marginTop: 30 }}>
            <span className="pill">Next batch now open</span>
            <span className="pill">Corporate groups welcome</span>
            <span className="pill">Creator version exclusive</span>
          </div>
          <div style={{ marginTop: 30, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn" to="/apply">Apply now</Link>
            <a className="btn ghost" href="#game-night">Book game night</a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- game night */}
      <section className="alt" id="game-night">
        <div className="wrap">
          <SectionHead
            kicker="Separate from the retreat"
            title={<>Bunkeshwar Game Night<br />Tapovan, Rishikesh</>}
            lede="This is a daily social game night, not part of the 4-day retreat application or batch process. Every evening, 7:00 PM–10:00 PM. Three games, cash prizes, new people every night. Payment is collected at the venue only — no online checkout needed."
          />

          <div className="game-pass-grid">
            <div className="game-pass-copy">
              <div className="pass-card highlights">
                <div className="pass-price">Daily game night</div>
                <div className="pass-price small">Tapovan · 7:00 PM</div>
                <ul className="xlist">
                  <li><span>✦</span>Pictionary</li>
                  <li><span>✦</span>Memory Test</li>
                  <li><span>✦</span>Mafia</li>
                  <li><span>✦</span>Cash prizes every round</li>
                </ul>
              </div>

              <div className="pass-card">
                <h3>What to expect</h3>
                <p>
                  Bored in Tapovan? Come play. Every evening at RR Stay &amp; Café we run
                  three games, two rounds each. Solo travellers are welcome, and teams are
                  made on the spot. New games and experiences keep getting added, so no two
                  nights are the same.
                </p>
                <div className="mini-meta">
                  <span>Venue: RR Stay &amp; Café, Tapovan</span>
                  <span>Call: +91 89201 01994</span>
                  <span>Instagram: @bunkeshwarretreats</span>
                </div>
              </div>
            </div>

            <div className="pass-card booking-box">
              <div className="booking-header">
                <span className="kicker">Guest details</span>
                <h3>Book your game night pass</h3>
              </div>

              <form className="form" onSubmit={guestForm.submit}>
                <div className="row">
                  <div className="field">
                    <label htmlFor="full-name">Full name</label>
                    <input id="full-name" name="Full name" required />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">WhatsApp / phone</label>
                    <input id="phone" name="Phone" required placeholder="+91 ..." />
                  </div>
                </div>

                <div className="row">
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="Email" type="email" required />
                  </div>
                  <div className="field">
                    <label htmlFor="pass-type">Pass type</label>
                    <select id="pass-type" name="Pass type" required defaultValue="">
                      <option value="" disabled>Select</option>
                      <option value="1 round — ₹100">1 Round — ₹100</option>
                      <option value="Daily Game Pass — ₹500">Daily Game Pass — ₹500</option>
                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className="field">
                    <label htmlFor="date">Date</label>
                    <input id="date" name="Date" type="date" required />
                  </div>
                  <div className="field">
                    <label htmlFor="guests">Number of guests</label>
                    <input id="guests" name="Guests" type="number" min="1" max="20" defaultValue="1" required />
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="group">Group details</label>
                  <textarea id="group" name="Group details" placeholder="Add names of friends/teammates if you're booking together" rows="3" />
                </div>

                <div className="field">
                  <label htmlFor="notes">Notes</label>
                  <textarea id="notes" name="Notes" placeholder="Any timing preference or special request" rows="3" />
                </div>

                <div className="venue-note">
                  This is separate from the 4-day retreat. Before you head out, confirm the location once: RR Stay &amp; Café, Tapovan, Rishikesh.
                </div>

                <button className="btn" type="submit" disabled={guestForm.state === "sending"}>
                  {guestForm.state === "sending" ? "Sending..." : "Book my daily pass"}
                </button>

                {guestForm.state !== "idle" && guestForm.message && (
                  <div className={guestForm.state === "done" ? "form-status success" : "form-status error"}>
                    {guestForm.message}
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* -------------------------------------------------------- next batch */}
      <section>
        <div className="wrap">
          <SectionHead
            kicker="Now accepting bookings"
            title={<>Next batch is open<br />for guests &amp; groups.</>}
            lede="We are now opening the next round for everyday guests and corporate groups who want to experience the full 3-day Who's the Mole experience. Creator Season 1 episodes are being prepared for release soon on YouTube and Instagram, and the creator edition remains distinct from the paid guest experience."
          />
          <div className="grid3">
            <Card n="01" title="For travellers">
              New guest batches are now open for people who want to experience the full retreat as a player, not just as an audience member.
            </Card>
            <Card n="02" title="For teams">
              Corporate groups and private teams can now apply for the same experience with the right group fit and final agreement in place.
            </Card>
            <Card n="03" title="Content &amp; release">
              Final films for paid guests and corporate groups will not be released on YouTube or Instagram without prior confirmation from the group. The creator version stays exclusive.
            </Card>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- why we do it */}
      <section className="alt">
        <div className="wrap">
          <SectionHead
            kicker="Why we do it"
            title={<>A night for strangers<br />to become a table.</>}
            lede="We run the game because people are more alive when they stop scrolling, start playing and let a room decide who they are. It is a low-pressure way to meet people, laugh at the right moment, and leave with a story instead of a screen full of unread messages."
          />
          <div className="grid3">
            <Card n="01" title="Low pressure">
              Come alone, meet fast and make friends without needing a plan. The room does half the work.
            </Card>
            <Card n="02" title="Real energy">
              Play, laugh, accuse, guess and lose track of time. That is the whole point.
            </Card>
            <Card n="03" title="A good night out">
              No forced networking, no awkward speeches. Just games, cash prizes, and a night people remember.
            </Card>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- the game */}
      <section className="alt" id="the-game">
        <div className="wrap">
          <SectionHead
            kicker="01 · The Briefing"
            title={<>This is not a retreat.<br />It's a game.</>}
            lede="Twelve strangers check in Friday. Four days later, a smaller, tighter tribe checks out — having earned a currency, run a gauntlet, and voted people out of a circle around a bonfire. Built the way a reality show is built: real stakes, real strangers."
          />
          <div className="grid2">
            <div>
              <h3 className="sub-head">Who it's for</h3>
              <p style={{ marginTop: 10, fontSize: 17 }}>
                Solo travellers only. No couples, no pre-existing friend groups — strangers
                walking in is the entire mechanic. Every batch is deliberately mixed by age,
                background and personality, capped at twelve guests — including two secret
                Moles, unknown even to each other — so nobody disappears into the crowd.
              </p>
            </div>
            <div>
              <h3 className="sub-head">What it's not</h3>
              <ul className="xlist" style={{ marginTop: 10 }}>
                <li><span>✗</span>No yoga mats or 5am bells</li>
                <li><span>✗</span>No silent mornings</li>
                <li><span>✗</span>No itinerary handed out on day one</li>
                <li><span>✗</span>No spectating — everyone plays</li>
                <li><span>✗</span>No open booking — every guest is screened</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- threads */}
      <section>
        <div className="wrap">
          <SectionHead
            kicker="02 · Rules of the Game"
            title={<>Five threads,<br />every batch.</>}
            lede="These run underneath every weekend regardless of which tasks get picked. They're what turns twelve strangers into a cast."
          />
          <div className="grid3">
            {THREADS.map(([n, t, d]) => (
              <Card key={n} n={n} title={t}>{d}</Card>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ days */}
      <section className="alt">
        <div className="wrap">
          <SectionHead
            kicker="03 · The Four Days"
            title={<>The arc,<br />not the script.</>}
            lede="The shape of the weekend — not the task list. Exact games, prompts and Mole assignments stay sealed until fifteen minutes before they happen."
          />
          <div className="daywrap">
            {DAYS.map(([n, w, t, d, zero]) => (
              <div className={zero ? "day zero" : "day"} key={n}>
                <div className="day-when">
                  <div className="d">DAY {n}</div>
                  <div className="n">{w}</div>
                </div>
                <div className="day-body">
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
                <div className="day-stripe" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- price */}
      <section>
        <div className="wrap">
          <SectionHead kicker="04 · The Fine Print" title="What you're signing up for." />
          <div className="price">
            <div>
              <div className="amt">Now open</div>
              <div className="sub">Next retreat batch accepting applications</div>
            </div>
            <div className="meta">
              3 Day experience<br />
              {BRAND.location}
            </div>
          </div>

          <div className="grid3" style={{ marginTop: 18 }}>
            <Card title="What's included">
              Three nights co-living, all meals from Friday lunch to Monday breakfast, every
              task and evening circle, your Passport and starter kit, and a full on-site
              camera, drone and audio crew.
            </Card>
            <Card title="The films">
              Every batch is filmed and cut into one trailer and one full retreat film,
              released after checkout. Flag the crew at any point and your footage —
              confessional tent included — is pulled from the cut.
            </Card>
            <Card title="Good to know">
              Certified operators, waivers and first aid cover every physical activity.
              Applications close once a batch is cast — we don't top up empty beds. Monsoon
              dates run an indoor-friendly alternate format.
            </Card>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- cta */}
      <section className="alt">
        <div className="wrap" style={{ textAlign: "center" }}>
          <Kicker>05 · How to get in</Kicker>
          <h2 style={{ fontSize: "clamp(40px,8vw,86px)", color: "var(--heading)", marginTop: 14 }}>
            Apply.<br />Don't just book.
          </h2>
          <p style={{ fontSize: 19, maxWidth: 700, margin: "22px auto 0" }}>
            There is no book-now button. Sign-up runs through this website only — a
            personality questionnaire and a short video intro — and every batch is cast by
            hand from the answers.
          </p>
          <div className="grid3" style={{ marginTop: 34, textAlign: "left" }}>
            <Card n="01" title="Fill the form">
              A personality questionnaire. Ten minutes, no CV, no interview prep.
            </Card>
            <Card n="02" title="Record 60 seconds">
              A short video intro — just you, talking, on a phone camera. It never goes public.
            </Card>
            <Card n="03" title="Get cast">
              We build the batch by hand, then send your slot and next steps.
            </Card>
          </div>
          <div style={{ marginTop: 34 }}>
            <Link className="btn" to="/apply">Start your application</Link>
          </div>
          <div style={{ marginTop: 18 }}>
            <span className="pill">Normal guests · corporate groups · applications open now</span>
          </div>
        </div>
      </section>
    </>
  );
}
