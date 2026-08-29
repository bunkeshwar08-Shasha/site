import React from "react";
import { Link } from "react-router-dom";
import { SectionHead, Card, Kicker } from "../components/Bits";
import { useTheme } from "../components/ThemeToggle";
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
            Retreats for people who'd rather feel alive than be well — designed to be
            played, not attended. Four days in {BRAND.location} with twelve hand-picked
            solo strangers, a currency, two secret Moles and a camera that never blinks.
          </p>
          <div style={{ marginTop: 30 }}>
            <span className="pill">Solo travellers only</span>
            <span className="pill">Screened &amp; cast by hand</span>
            <span className="pill">Every batch filmed</span>
          </div>
          <div style={{ marginTop: 30, display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Link className="btn" to="/apply">Apply to a batch</Link>
            <a className="btn ghost" href="#the-game">See how it works</a>
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
              <div className="amt">{BRAND.price}</div>
              <div className="sub">Per person · all-inclusive</div>
            </div>
            <div className="meta">
              4 Days / 3 Nights<br />
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
            <span className="pill">Applications open now · dates dropping soon</span>
          </div>
        </div>
      </section>
    </>
  );
}
