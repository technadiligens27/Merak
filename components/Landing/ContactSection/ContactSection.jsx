import Link from "next/link";
import "./ContactSection.css";

const ContactSection = () => {

  return (
    <section className="contact-section">

      <div className="contact-section-content">

        {/* LEFT IMAGE */}
        <div className="contact-section-image-container">
          <img
            src="/images/news-01.png"
            alt="Volunteers sharing sensory boards with the community"
            className="contact-section-image"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="contact-section-right">

          {/* BADGE */}
          <div className="contact-section-badge">
            Get Involved
          </div>

          {/* HEADING */}
          <h2>
            Bring A Sensory Board To
            <br />
            Your Community
          </h2>

          {/* DESCRIPTION */}
          <p>
            Partner with us to distribute interactive sensory boards
            to local centers, empowering children of all backgrounds
            to learn, explore, and thrive through tactile play.
          </p>

          {/* CONTACT BUTTON */}
          <div className="contact-section-btn-container">
            <Link href="/contact" className="contact-section-btn">
              <span>Contact Us</span>
              <span className="contact-section-btn-arrow">→</span>
            </Link>
          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactSection;