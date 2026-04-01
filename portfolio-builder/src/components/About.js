import React from "react";

function About({ name, title, about, image, location }) {
  return (
    <section className="hero-section" id="about">
      <div className="hero-copy">
        <p className="section-kicker">About Me</p>
        <h2>{name || "Your Name"}</h2>
        <h3>{title || "Your Professional Title"}</h3>
        <p>{about || "Tell visitors about your experience, goals, and strengths."}</p>

        <div className="hero-meta">
          <span>{location || "Your Location"}</span>
          <a href="#contact">Let&apos;s Connect</a>
        </div>
      </div>

      <div className="hero-image-card">
        <img
          src={
            image ||
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
          }
          alt={name || "Profile"}
        />
      </div>
    </section>
  );
}

export default About;
