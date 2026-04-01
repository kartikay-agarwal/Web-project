import React from "react";
import { QRCodeSVG } from "qrcode.react";

function Contact({ contact }) {
  const contactItems = [
    { label: "Email", value: contact.email, type: "text" },
    { label: "Phone", value: contact.phone, type: "text" },
    { label: "LinkedIn", value: contact.linkedin, type: "qr" },
    { label: "GitHub", value: contact.github, type: "qr" },
    { label: "Location", value: contact.location, type: "text" }
  ];

  return (
    <section className="portfolio-section contact-section" id="contact">
      <div className="section-heading">
        <p className="section-kicker">Contact</p>
        <h2>Let&apos;s build something meaningful</h2>
      </div>

      <div className="contact-grid">
        {contactItems.map((item) => (
          <div
            className={`contact-card ${item.type === "qr" ? "qr-card" : "compact-card"}`}
            key={item.label}
          >
            <p>{item.label}</p>
            {item.type === "qr" ? (
              item.value ? (
                <div className="qr-wrapper">
                  <QRCodeSVG
                    value={item.value}
                    size={112}
                    bgColor="transparent"
                    fgColor="currentColor"
                    includeMargin={true}
                  />
                  <span>Scan to open {item.label}</span>
                </div>
              ) : (
                <span>Add your {item.label.toLowerCase()} URL</span>
              )
            ) : (
              <span>{item.value || `Add your ${item.label.toLowerCase()}`}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Contact;
