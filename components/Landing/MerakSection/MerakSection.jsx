"use client";

import { useState } from "react";
import Link from "next/link";
import "./MerakSection.css";

const merakEvents = [
  {
    id: 1,
    year: "26",
    image: "/images/merak-01.png",
    imageAlt: "Volunteers and children participating in an activity",
    badge: "Coming Soon",
    description:
      "Our latest milestone event brought volunteers and children together for a day of immersive sensory play, creative learning, and joyous community bonding.",
    link: "/upcoming-events",
  },
  {
    id: 2,
    year: "23",
    image: "/images/merak-02.png",
    imageAlt: "Volunteers joining hands during a community activity",
    description:
      "Looking back at where our mission took root—distributing customized educational tools, building inclusive spaces, and planting smiles across every child's face.",
    link: "/news-events",
  }
];

const MerakSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? merakEvents.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      (prev + 1) % merakEvents.length
    );
  };

  const visibleEvents = [
    merakEvents[currentIndex],
    merakEvents[(currentIndex + 1) % merakEvents.length],
  ];

  return (
    <section className="merak-section">

      <div className="merak-section-content">

        {/* HEADER */}
        <div className="merak-section-top">

          <div className="merak-section-header">

            <div className="merak-section-badge">
              <span>⌁</span>
              Merak
            </div>

            <h2>
              Our <span>Journey</span> of Impact
            </h2>

            <p>
              Our sensory boards are designed to spark curiosity,
              build fine motor skills and provide a calming,
              engaging experience for children.
            </p>

          </div>

          {/* NAVIGATION */}
          <div className="merak-section-navigation">

            <button
              type="button"
              className="merak-section-nav-btn"
              onClick={previousSlide}
              aria-label="Previous event"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 5L8 12L15 19"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              className="merak-section-nav-btn"
              onClick={nextSlide}
              aria-label="Next event"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 5L16 12L9 19"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

          </div>

        </div>

        {/* EVENT CARDS */}
        <div className="merak-section-card-container">

          {visibleEvents.map((event, index) => (

            <article
              className={`merak-section-card ${
                index === 0
                  ? "merak-section-card-large"
                  : "merak-section-card-small"
              }`}
              key={event.id}
            >

              <img
                src={event.image}
                alt={event.imageAlt}
                className="merak-section-card-image"
              />

              <div className="merak-section-card-overlay" />

              {/* VISIT BUTTON */}
              <Link
                href={event.link}
                className="merak-section-visit"
                aria-label={`Visit Merak ${event.year} event`}
              >
                {index === 0 && <span>Visit</span>}

                <span className="merak-section-visit-icon">
                  ↗
                </span>
              </Link>

              {/* CARD CONTENT */}
              <div className="merak-section-card-content">

                {event.badge && (
                  <div className="merak-section-card-badge">
                    ✉ {event.badge}
                  </div>
                )}

                <h3>
                  MERAK <span>’{event.year}</span>
                </h3>

                <p>{event.description}</p>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
};

export default MerakSection;