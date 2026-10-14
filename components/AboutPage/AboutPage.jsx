"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import "./AboutPage.css";

const AboutPage = () => {

  const videoRef = useRef(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const imageBase =
    process.env.NODE_ENV === "production" ? "/Merak" : "";

  /* ========================================
     VIDEO CONTROLS
  ======================================== */

  const handlePlayVideo = async () => {
    if (!videoRef.current) return;

    try {
      await videoRef.current.play();
      setIsVideoPlaying(true);
    } catch (error) {
      console.error("Unable to play video:", error);
    }
  };

  /* ========================================
     VALUES, MISSION AND VISION
  ======================================== */

  const aboutCards = [
    {
      id: 1,
      title: "Values",
      icon: "💚",
      description:
        "We lead with empathy and inclusion in everything we do, ensuring every child feels valued.",
    },
    {
      id: 2,
      title: "Mission",
      icon: "🎯",
      description:
        "To empower early childhood development by designing and distributing interactive sensory tools to communities in need.",
    },
    {
      id: 3,
      title: "Vision",
      icon: "👁️",
      description:
        "To provide every child equal access to inclusive sensory learning environments.",
    },
  ];

  return (
    <div className="about-page">

      {/* ========================================
          HERO SECTION
      ======================================== */}

      <section className="about-page-hero">

        <div className="about-page-hero-content">

          <h1>About Us</h1>

          <p>
            Discover stories of hope, upcoming sensory play days,
            and opportunities to co-create inclusive spaces in
            our communities.
          </p>

        </div>

      </section>

      {/* ========================================
          INTRODUCTION SECTION
      ======================================== */}

      <section className="about-page-intro-section">

        <div className="about-page-content">

          {/* IMAGE GALLERY */}
          <div className="about-page-gallery">

            <div className="about-page-gallery-item about-gallery-one">
              <img
                src={`${imageBase}/images/about-01.png`}
                alt="Child exploring a wooden sensory activity board"
              />
            </div>

            <div className="about-page-gallery-item about-gallery-two">
              <img
                src={`${imageBase}/images/news-01.png`}
                alt="Merak volunteers sharing sensory boards with the community"
              />
            </div>

            <div className="about-page-gallery-item about-gallery-three">
              <img
                src={`${imageBase}/images/about-03.png`}
                alt="Child discovering interactive sensory activities"
              />
            </div>

            <div className="about-page-gallery-item about-gallery-four">
              <img
                src={`${imageBase}/images/about-04.png`}
                alt="Colourful wooden sensory board"
              />
            </div>

          </div>

          {/* INTRODUCTION CONTENT */}
          <div className="about-page-intro-content">

            <h2>
              Empowering Minds Through
              <br />
              Play
            </h2>

            <div className="about-page-intro-description">

              <p>
                We believe every child deserves access to interactive
                learning environments. Our community initiatives deliver
                custom-built sensory boards directly to local centers,
                specialized schools, and public spaces to support
                developmental growth.
              </p>

              <p>
                Through collaborative workshops and volunteer-led
                outreach, we work hand-in-hand with local leaders to
                ensure these tactile learning tools are accessible,
                engaging, and tailored to the needs of the children.
              </p>

            </div>

          </div>

          {/* SECTION DIVIDER */}
          <div className="about-page-section-divider" />

        </div>

      </section>

      {/* ========================================
          MISSION VIDEO SECTION
      ======================================== */}

      <section className="about-page-mission-section">

        <div className="about-page-content">

          <div className="about-page-mission-container">

            {/* LEFT VIDEO */}
            <div className="about-page-video-container">

              <video
                ref={videoRef}
                className="about-page-video"
                poster={`${imageBase}/images/about-mission.png`}
                controls={isVideoPlaying}
                playsInline
                preload="metadata"
                onEnded={() => setIsVideoPlaying(false)}
              >
                <source
                  src={`${imageBase}/videos/merak-mission.mp4`}
                  type="video/mp4"
                />
                Your browser does not support HTML video.
              </video>

              {!isVideoPlaying && (
                <button
                  type="button"
                  className="about-page-video-play"
                  onClick={handlePlayVideo}
                  aria-label="Play Merak mission video"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 5.5L19 12L8 18.5V5.5Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}

              <div className="about-page-video-caption">
                “Making An Impact Together”
              </div>

            </div>

            {/* RIGHT CONTENT */}
            <div className="about-page-mission-content">

              <h2>
                See Our Mission In
                <br />
                Action
              </h2>

              <p>
                Watch how our community outreach programs bring joy
                and vital sensory resources to children across the
                region. Every board delivered represents a new
                opportunity for tactile exploration and growth.
              </p>

              <p>
                Join our network of dedicated volunteers and partners.
                Whether you want to sponsor a board, help run a
                workshop, or spread awareness, your involvement
                makes a lasting difference.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ========================================
          VALUES, MISSION AND VISION SECTION
      ======================================== */}

      <section className="about-page-values-section">

        <div className="about-page-content">

          <div className="about-page-values-container">

            {aboutCards.map((card) => (

              <article
                className="about-page-value-card"
                key={card.id}
              >

                <div className="about-page-value-card-header">
                  <h3>{card.title}</h3>
                </div>

                <div className="about-page-value-card-content">

                  <div
                    className="about-page-value-card-icon"
                    aria-hidden="true"
                  >
                    {card.icon}
                  </div>

                  <p>{card.description}</p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

      {/* ========================================
          BOTTOM CALL TO ACTION SECTION
      ======================================== */}

      <section className="about-page-cta-section">

        <div className="about-page-content">

          <div className="about-page-cta-container">

            {/* LEFT CONTENT */}
            <div className="about-page-cta-content">

              <h2>
                Bring A Sensory Board To
                <br />
                Your Community
              </h2>

              <p>
                Partner with us to introduce custom-built,
                interactive sensory boards to local centers and
                schools, empowering children of all backgrounds
                to explore, learn, and grow through tactile play.
              </p>

              <div className="about-page-cta-btn-container">

                <Link
                  href="/sensory-board"
                  className="about-page-cta-btn"
                >
                  <span>Sensory Boards</span>
                  <span className="about-page-cta-arrow">→</span>
                </Link>

              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div className="about-page-cta-image-container">

              <img
                src={`${imageBase}/images/about-cta.png`}
                alt="Handmade interactive wooden sensory board"
                className="about-page-cta-image"
              />

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default AboutPage;