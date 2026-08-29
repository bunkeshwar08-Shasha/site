import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Icon from "./Icon";
import { Tape } from "./Bits";
import ThemeToggle, { useTheme } from "./ThemeToggle";
import { BRAND } from "../config";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/apply", label: "Apply" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/sponsors", label: "Sponsors" },
];

export default function Layout({ children }) {
  const { pathname } = useLocation();
  const { logo } = useTheme();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Tape />
      <header className="nav">
        <div className="nav-inner">
          <Link to="/" aria-label="Bunkeshwar Retreats — home">
            <img src={logo} alt="Bunkeshwar Retreats" />
          </Link>
          <div className="nav-right">
            <nav className="nav-links">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  {l.label}
                </NavLink>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="wrap">
          <div className="kicker">Talk to us</div>
          <div className="contact">
            <a href={BRAND.instagram} target="_blank" rel="noreferrer">
              <Icon name="instagram" /> {BRAND.instagramHandle}
            </a>
            <a href={BRAND.youtube} target="_blank" rel="noreferrer">
              <Icon name="youtube" /> {BRAND.youtubeHandle}
            </a>
            <a
              href={`https://wa.me/${BRAND.phoneRaw}`}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="whatsapp" /> {BRAND.phone}
            </a>
            <a href={`mailto:${BRAND.email}`}>
              <Icon name="gmail" /> {BRAND.email}
            </a>
          </div>
          <p className="fine">
            Applications are taken on this website only. Instagram, WhatsApp and email
            are for questions, partnerships and press — not for booking a spot.
          </p>

          <div className="footer-bottom">
            <div>
              <div className="kicker">{BRAND.tagline}</div>
              <p className="fine" style={{ marginTop: 8 }}>
                {BRAND.location} · Solo travellers only · 12 per batch
              </p>
            </div>
            <img src={logo} alt="" />
          </div>
        </div>
      </footer>
      <Tape thin />
    </>
  );
}
