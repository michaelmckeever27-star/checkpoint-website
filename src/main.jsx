import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const includes = [
  "Morning and night check-ins",
  "Wellbeing insights",
  "Support Pact",
  "Prepared support messages",
  "Personal support plan",
  "Tools for heavy moments",
  "Urgent help resources",
];

const privacySections = [
  {
    title: "Overview",
    body: [
      "Checkpoint is operated by Michael McKeever.",
      "Checkpoint is a wellbeing and support tool that helps users check in, notice patterns, and prepare messages to trusted people when asking for help feels hard.",
      "Checkpoint is not therapy, a diagnosis tool, a medical device, or an emergency service.",
    ],
  },
  {
    title: "Information We Collect",
    items: [
      "Account information such as name and email address",
      "Check-in answers and wellbeing scores",
      "Notes the user chooses to enter",
      "Context data such as sleep, caffeine, alcohol, exercise, social contact and work stress",
      "Support people added by the user, including names, relationship labels and phone numbers",
      "Support message templates",
      "Personal support plan entries",
      "OCD loop entries",
      "Parent pressure entries",
      "Connection steps",
      "Reminder preferences",
      "Consent and safety acknowledgement records",
    ],
  },
  {
    title: "How We Use Information",
    items: [
      "To create and manage Checkpoint accounts",
      "To provide check-ins and wellbeing insights",
      "To help users prepare support messages",
      "To save support people and message templates",
      "To provide reminders if enabled",
      "To improve app reliability, safety and user experience",
      "To comply with legal, security and App Store requirements",
    ],
  },
  {
    title: "Data Storage",
    body: [
      "Checkpoint uses Supabase to provide authentication, account management and database storage. Checkpoint data is linked to the user's Checkpoint account and stored using Supabase services. Some device settings, such as notification preferences or local app state, may also be stored on the user's device.",
    ],
  },
  {
    title: "Support Messages",
    body: [
      "Checkpoint can help prepare messages to trusted people when reaching out feels hard. Checkpoint does not automatically send messages. The user chooses who to contact, what the message says and whether to send it through their phone's messaging app.",
    ],
  },
  {
    title: "Notifications",
    body: [
      "If users enable reminders, Checkpoint may send local notifications to remind them to complete morning or night check-ins. Users can change or disable notifications in the app or through device settings.",
    ],
  },
  {
    title: "Third-Party Services",
    items: [
      "Supabase for authentication and database storage",
      "Apple services for iOS app distribution, TestFlight, notifications and device functionality",
      "Expo/EAS for app build and deployment infrastructure",
    ],
  },
  {
    title: "Legal Basis",
    body: [
      "Where UK GDPR applies, Checkpoint processes personal data on appropriate legal bases including consent, performance of a contract, legitimate interests and legal obligations.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "Checkpoint keeps user information for as long as the user's Checkpoint account is active or as needed to provide the app. Users can request deletion of their account and associated data.",
    ],
  },
  {
    title: "User Rights",
    body: [
      "Depending on where the user lives, they may have rights to access, correct, delete, restrict or request a copy of their personal data. Users can contact michael.mckeever27@gmail.com to exercise these rights.",
    ],
  },
  {
    title: "Account and Data Deletion",
    body: [
      "Users can request account and data deletion from inside the app through Profile or Settings. Users can also contact michael.mckeever27@gmail.com.",
    ],
  },
  {
    title: "Children",
    body: ["Checkpoint is not intended for children under 13."],
  },
  {
    title: "Emergency and Crisis Support",
    body: [
      "Checkpoint is not an emergency service. If a user feels in immediate danger or unable to stay safe, they should call emergency services now.",
    ],
    items: [
      "Emergency services: 999",
      "NHS 111",
      "Samaritans: 116 123",
      "Shout: text SHOUT to 85258",
    ],
  },
  {
    title: "Changes",
    body: [
      "This Privacy Policy may be updated from time to time. If significant changes are made, users may be notified in the app or by other appropriate means.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For questions about this Privacy Policy or how Checkpoint handles data, contact michael.mckeever27@gmail.com.",
    ],
  },
];

function App() {
  const path = window.location.pathname;

  if (path === "/privacy") {
    return <PrivacyPage />;
  }

  return <LandingPage />;
}

function LandingPage() {
  return (
    <div className="site">
      <Header />
      <main>
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow">Wellbeing support app</p>
            <h1>Checkpoint</h1>
            <p className="subtitle">Support before crisis.</p>
            <p className="hero-text">
              Checkpoint helps you check in morning and night, spot wellbeing
              patterns, and prepare messages to trusted people when asking for
              help feels hard.
            </p>
            <div className="actions">
              <a className="button primary" href="mailto:michael.mckeever27@gmail.com?subject=Checkpoint%20beta">
                Join the beta
              </a>
              <a className="button secondary" href="/privacy">
                View Privacy Policy
              </a>
            </div>
          </div>
          <div className="hero-panel" aria-label="Checkpoint check-in preview">
            <div className="phone-card">
              <div className="phone-top">
                <span>Tonight</span>
                <strong>Check-in</strong>
              </div>
              <div className="score-ring">
                <span>7</span>
                <small>steady</small>
              </div>
              <div className="mini-list">
                <span>Sleep felt lighter</span>
                <span>Work stress easing</span>
                <span>Message ready if needed</span>
              </div>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">How it works</p>
              <h2>Small check-ins, earlier support.</h2>
            </div>
            <div className="steps">
              <FeatureCard number="01" title="Check in morning and night" />
              <FeatureCard number="02" title="Spot patterns in your wellbeing" />
              <FeatureCard number="03" title="Prepare messages when reaching out feels hard" />
            </div>
          </div>
        </section>

        <section className="section-wrap includes-section">
          <div className="section-heading">
            <p className="eyebrow">What Checkpoint includes</p>
            <h2>Built for reflection, planning, and real support.</h2>
          </div>
          <div className="include-grid">
            {includes.map((item) => (
              <div className="include-item" key={item}>
                <span aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="section-wrap split-section">
          <InfoPanel
            label="You stay in control"
            title="Nothing is sent automatically."
            body="Checkpoint does not send messages automatically. You choose who to contact, what the message says, and whether to send it."
          />
          <InfoPanel
            label="Important note"
            title="A wellbeing tool, not emergency care."
            body="Checkpoint is not therapy, a diagnosis tool, a medical device, or an emergency service. It is a wellbeing and support tool designed to help you reflect, notice patterns, and reach trusted support earlier."
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header section-wrap">
      <a className="brand" href="/" aria-label="Checkpoint home">
        <span className="brand-mark">C</span>
        <span>Checkpoint</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="/privacy">Privacy</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer section-wrap">
      <div>
        <strong>Checkpoint</strong>
        <span>usecheckpoint.io</span>
      </div>
      <a href="/privacy">Privacy Policy</a>
    </footer>
  );
}

function FeatureCard({ number, title }) {
  return (
    <article className="card feature-card">
      <span>{number}</span>
      <h3>{title}</h3>
    </article>
  );
}

function InfoPanel({ label, title, body }) {
  return (
    <article className="card info-panel">
      <p className="eyebrow">{label}</p>
      <h2>{title}</h2>
      <p>{body}</p>
    </article>
  );
}

function PrivacyPage() {
  return (
    <div className="site privacy-site">
      <Header />
      <main className="privacy-main section-wrap">
        <a className="back-link" href="/">
          Back to home
        </a>
        <div className="privacy-header">
          <p className="eyebrow">usecheckpoint.io</p>
          <h1>Privacy Policy</h1>
          <p>Last updated: 6 June 2026</p>
        </div>

        <section className="privacy-card">
          <div className="contact-grid">
            <div>
              <span>Operator</span>
              <strong>Michael McKeever</strong>
            </div>
            <div>
              <span>Contact email</span>
              <a href="mailto:michael.mckeever27@gmail.com">michael.mckeever27@gmail.com</a>
            </div>
            <div>
              <span>Website</span>
              <a href="https://usecheckpoint.io">https://usecheckpoint.io</a>
            </div>
          </div>

          {privacySections.map((section) => (
            <section className="policy-section" key={section.title}>
              <h2>{section.title}</h2>
              {section.body?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.items && (
                <ul>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
