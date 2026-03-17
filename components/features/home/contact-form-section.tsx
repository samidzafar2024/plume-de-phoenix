"use client";

import { useState } from "react";
import { PhoneIcon, MailIcon, OfficeIcon, VideoIcon } from "@/components/ui/icons";
import type { Locale } from "@/lib/constants/locale";

interface ContactFormSectionProps {
  locale: Locale;
}

export function ContactFormSection({ locale }: ContactFormSectionProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const copy =
    locale === "fr"
      ? {
          eyebrow: "Prenons contact",
          title: "Parlons de votre situation",
          desc: "Le premier pas est souvent le plus difficile. Notre \u00e9quipe est l\u00e0 pour vous \u00e9couter, analyser votre dossier et vous orienter \u2014 en toute confidentialit\u00e9 et sans engagement.",
          office1Label: "Cabinet principal \u2014 Val d\u2019Oise",
          office1Addr: "3 rue Blanche \u2013 Rez-de-chauss\u00e9e\n95880 Enghien-les-Bains",
          office1Note: "Accessible aux personnes \u00e0 mobilit\u00e9 r\u00e9duite",
          office2Label: "Adresse Paris",
          office2Addr: "11 Avenue de l\u2019Op\u00e9ra\n75001 Paris",
          office2Note: "Sur rendez-vous uniquement",
          phoneLabel: "T\u00e9l\u00e9phone",
          phone: "01 77 02 04 55",
          emailLabel: "E-mail",
          email: "contact@plumedephoenix.com",
          urgency: "D\u00e9lai de prescription\u00a0: certains d\u00e9lais commencent imm\u00e9diatement apr\u00e8s l\u2019accident. Ne tardez pas \u2014 contactez-nous pour prot\u00e9ger vos droits.",
          formTitle: "Demande de consultation",
          formDesc: "R\u00e9ponse sous 24h. Premi\u00e8re consultation gratuite.",
          modeLabel: "Mode de consultation souhait\u00e9",
          modes: [
            { label: "Cabinet", note: "Enghien / Paris" },
            { label: "Visioconf\u00e9rence", note: "France & international" },
            { label: "T\u00e9l\u00e9phone", note: "01 77 02 04 55" },
          ],
          firstName: "Pr\u00e9nom",
          lastName: "Nom",
          emailField: "Email",
          phoneField: "T\u00e9l\u00e9phone",
          caseType: "Type de situation",
          caseOptions: ["Accident de la route", "Traumatisme cr\u00e2nien", "B\u00e9b\u00e9 secou\u00e9", "Grands br\u00fbl\u00e9s", "Accident m\u00e9dical", "Victime d\u2019infraction", "Violences VIF/VSS", "Accident du travail", "Autre"],
          message: "Votre message",
          legal: "Vos donn\u00e9es sont utilis\u00e9es uniquement pour r\u00e9pondre \u00e0 votre demande, conform\u00e9ment au RGPD. Elles sont prot\u00e9g\u00e9es par le secret professionnel.",
          send: "Envoyer ma demande",
          sending: "Envoi...",
          success: "Merci. Nous revenons vers vous sous 24h pour organiser une consultation.",
          error: "Une erreur est survenue. Merci de r\u00e9essayer.",
        }
      : {
          eyebrow: "Get in touch",
          title: "Let\u2019s talk about your situation",
          desc: "The first step is often the most difficult. Our team is here to listen to you, analyze your case, and guide you \u2014 in complete confidentiality and without obligation.",
          office1Label: "Main office \u2014 Val d\u2019Oise",
          office1Addr: "3 rue Blanche \u2013 Ground Floor\n95880 Enghien-les-Bains",
          office1Note: "Wheelchair accessible",
          office2Label: "Paris address",
          office2Addr: "11 Avenue de l\u2019Op\u00e9ra\n75001 Paris",
          office2Note: "By appointment only",
          phoneLabel: "Phone",
          phone: "01 77 02 04 55",
          emailLabel: "Email",
          email: "contact@plumedephoenix.com",
          urgency: "Statute of limitations: Some time limits begin immediately after the accident. Don\u2019t delay \u2014 contact us to protect your rights.",
          formTitle: "Consultation request",
          formDesc: "Response within 24 hours. First consultation free.",
          modeLabel: "Preferred consultation method",
          modes: [
            { label: "Office", note: "Enghien / Paris" },
            { label: "Video call", note: "France & international" },
            { label: "Phone", note: "01 77 02 04 55" },
          ],
          firstName: "First name",
          lastName: "Last name",
          emailField: "Email",
          phoneField: "Phone",
          caseType: "Type of situation",
          caseOptions: ["Road accident", "Traumatic brain injury", "Shaken baby syndrome", "Severe burns", "Medical accident", "Crime victim", "Domestic violence", "Work accident", "Other"],
          message: "Your message",
          legal: "Your data is used solely to respond to your request, in accordance with the GDPR. It is protected by attorney-client privilege.",
          send: "Submit my request",
          sending: "Sending...",
          success: "Thank you. We will contact you within 24 hours to arrange a consultation.",
          error: "Something went wrong. Please try again.",
        };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("done"), 800);
  }

  return (
    <section id="ContactForm" className="contact-section dark-bg">
      <a id="Contact" href="#Contact" className="anchor" aria-hidden />
      <div className="main">
        <div className="contact-grid">
          {/* Left: Info */}
          <div className="contact-info">
            <small className="blk contact-eyebrow">{copy.eyebrow}</small>
            <h2>{copy.title}</h2>
            <p className="contact-desc">{copy.desc}</p>

            <div className="contact-locs">
              <div className="loc-card">
                <h4>{copy.office1Label}</h4>
                <p>{copy.office1Addr}</p>
                <span className="loc-note">{copy.office1Note}</span>
              </div>
              <div className="loc-card">
                <h4>{copy.office2Label}</h4>
                <p>{copy.office2Addr}</p>
                <span className="loc-note">{copy.office2Note}</span>
              </div>
            </div>

            <div className="contact-direct">
              <a href="tel:0177020455" className="contact-link">
                <span className="contact-link-icon">{PhoneIcon}</span>
                <div className="contact-link-text">
                  <h5>{copy.phoneLabel}</h5>
                  <p>{copy.phone}</p>
                </div>
              </a>
              <a href={`mailto:${copy.email}`} className="contact-link">
                <span className="contact-link-icon">{MailIcon}</span>
                <div className="contact-link-text">
                  <h5>{copy.emailLabel}</h5>
                  <p>{copy.email}</p>
                </div>
              </a>
            </div>

            <div className="urgency-note">
              <p>{copy.urgency}</p>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-wrap">
            <h3>{copy.formTitle}</h3>
            <p className="contact-form-sub">{copy.formDesc}</p>

            <div className="rdv-options">
              {copy.modes.map((mode, i) => (
                <label key={mode.label} className="rdv-opt">
                  <input type="radio" name="consultMode" value={mode.label} className="rdv-radio" />
                  <span className="rdv-opt-icon">{[OfficeIcon, VideoIcon, PhoneIcon][i]}</span>
                  <span className="rdv-opt-label">{mode.label}</span>
                  <span className="rdv-opt-note">{mode.note}</span>
                </label>
              ))}
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="c_firstName">{copy.firstName} *</label>
                  <input type="text" id="c_firstName" name="firstName" required placeholder={copy.firstName} />
                </div>
                <div className="form-group">
                  <label htmlFor="c_lastName">{copy.lastName} *</label>
                  <input type="text" id="c_lastName" name="lastName" required placeholder={copy.lastName} />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="c_email">{copy.emailField} *</label>
                  <input type="email" id="c_email" name="email" required placeholder={copy.emailField} />
                </div>
                <div className="form-group">
                  <label htmlFor="c_phone">{copy.phoneField}</label>
                  <input type="tel" id="c_phone" name="phone" placeholder={copy.phoneField} />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="c_caseType">{copy.caseType} *</label>
                <select id="c_caseType" name="caseType" required>
                  <option value="">{copy.caseType}</option>
                  {copy.caseOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="c_message">{copy.message}</label>
                <textarea id="c_message" name="message" rows={4} placeholder={copy.message} />
              </div>
              <p className="form-legal">{copy.legal}</p>

              {status === "done" && <p className="form-success" role="status">{copy.success}</p>}
              {status === "error" && <p className="form-error" role="alert">{copy.error}</p>}

              <button className="btn" type="submit" disabled={status === "sending"}>
                {status === "sending" ? copy.sending : copy.send} <span aria-hidden>{"\u2192"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
