import { contacts } from "../data";
import { ArrowIcon, MaskedLines, Reveal } from "./primitives";

export function Closing() {
  return (
    <section className="closing-section" id="contact">
      <Reveal as="p" variant="fade" className="section-kicker">
        What’s next
      </Reveal>

      <h2 className="closing-title" data-reveal="mask-group">
        <MaskedLines lines={["Still learning.", "Still shipping."]} />
      </h2>

      <Reveal as="p" variant="up" delay={1} className="closing-lede">
        I’m especially interested in ambitious frontend systems, AI-native
        products and the craft of turning complex tools into interfaces people
        actually enjoy using. If you’re working on something along those lines,
        I’d like to hear about it.
      </Reveal>

      <Reveal variant="up" delay={2}>
        <ul className="contact-list">
          {contacts.map((contact) => (
            <li key={contact.label}>
              <a
                href={contact.href}
                {...(contact.href.startsWith("http")
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                <span className="contact-label">{contact.label}</span>
                <span className="contact-value">
                  {contact.value}
                  <ArrowIcon />
                </span>
                <span className="contact-rule" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer>
      <span>© {new Date().getFullYear()} Haotian Luo</span>
      <span>Designed &amp; built with intention.</span>
      <a className="to-top" href="#top">
        Back to top
        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M8 13V3" />
          <path d="M3.5 7.5 8 3l4.5 4.5" />
        </svg>
      </a>
    </footer>
  );
}
