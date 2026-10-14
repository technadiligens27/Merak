"use client";

import { useState } from "react";
import Link from "next/link";
import "./EventsPage.css";

const events = [
  {
    id: 1,
    month: "JUN",
    day: "23",
    title: "Sensory Boards for curious little hands",
    description: [
      "Our sensory boards are designed to speak curiosity, build fine motor skills and provide a calming, engaging experience for children.",
      "Our sensory boards are designed to speak curiosity, build fine motor skills and provide a calming, engaging experience for children.",
    ],
    image: "/images/news-01.png",
    imageAlt: "Community sensory board outreach event",
    link: "/news-events",
    status: "past",
  },
  {
    id: 2,
    month: "JUL",
    day: "26",
    title: "Merak Sensory Play Day: Summer Discovery",
    description: [
      "A welcoming morning of tactile play, movement, and calm-down stations for children of all abilities.",
      "Families receive a take-home sensory kit and practical caregiver resources.",
    ],
    image: "/images/events-02.png",
    imageAlt: "Children exploring sensory activities at an outdoor event",
    link: "/news-events",
    status: "past",
  },
  {
    id: 3,
    month: "SEP",
    day: "05",
    title: "Co-Create: Inclusive Community Spaces",
    description: [
      "Help shape sensory-friendly parks and public spaces in this hands-on community workshop.",
      "Share lived experiences, map quiet routes, and prototype inclusive play areas together.",
    ],
    image: "/images/events-03.png",
    imageAlt: "Community members participating in an inclusive design workshop",
    link: "/news-events",
    status: "past",
  },
];

const EventsPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("past");

  const filteredEvents = events.filter(
    (event) =>
      selectedFilter === "all" ||
      event.status === selectedFilter
  );

  // Supports local development and GitHub Pages.
  const imageBase =
    process.env.NODE_ENV === "production" ? "/Merak" : "";

  return (
    <div className="events-page">

      {/* ========================================
          HERO SECTION
      ======================================== */}

      <section
  className="events-page-hero"
  style={{
    backgroundImage: `url("${imageBase}/images/events-bg.png")`,
  }}
>
        <div className="events-page-hero-content">

          <h1>Events/News</h1>

          <p>
            Discover stories of hope, upcoming sensory play days,
            and opportunities to co-create inclusive spaces
            in our communities.
          </p>

        </div>
      </section>

      {/* ========================================
          EVENTS LIST SECTION
      ======================================== */}

      <section className="events-page-list-section">

        <div className="events-page-content">

          {/* FILTER */}
          <div className="events-page-filter-container">

            <div className="events-page-filter-wrapper">

              <select
                className="events-page-filter"
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                aria-label="Filter events"
              >
                <option value="past">Past Events</option>
                <option value="upcoming">Upcoming Events</option>
                <option value="all">All Events</option>
              </select>

              <span className="events-page-filter-arrow" />

            </div>

          </div>

          {/* EVENTS */}
          <div className="events-page-list">

            {filteredEvents.length > 0 ? (

              filteredEvents.map((event) => (

                <article
                  className="events-page-item"
                  key={event.id}
                >

                  {/* DATE */}
                  <div className="events-page-date">

                    <span className="events-page-month">
                      {event.month}
                    </span>

                    <span className="events-page-date-line" />

                    <span className="events-page-day">
                      {event.day}
                    </span>

                  </div>

                  {/* IMAGE */}
                  <div className="events-page-image-container">

                    <img
                      src={`${imageBase}${event.image}`}
                      alt={event.imageAlt}
                      className="events-page-image"
                    />

                  </div>

                  {/* EVENT DETAILS */}
                  <div className="events-page-item-content">

                    <h2>{event.title}</h2>

                    <div className="events-page-item-description">

                      {event.description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}

                    </div>

                    <Link
                      href={event.link}
                      className="events-page-learn-btn"
                    >
                      <span>Learn More</span>
                      <span className="events-page-learn-arrow">
                        →
                      </span>
                    </Link>

                  </div>

                </article>

              ))

            ) : (

              <p className="events-page-empty">
                No events are currently listed in this category.
              </p>

            )}

          </div>

        </div>

      </section>

    </div>
  );
};

export default EventsPage;