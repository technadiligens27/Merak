import Link from "next/link";
import "./NewsSection.css";

const newsItems = [
  {
    id: 1,
    date: "Sep 12, 2026",
    title: "Community Outreach Day at Galle",
    description:
      "Our team joined local volunteers in Galle for a day of community service, bringing together residents, students, and partner organizations. Activities included a coastal clean-up, educational workshops, and the distribution of essential supplies to families in need. The event strengthened local connections and showed what we can achieve by working together.",
    image: "/images/news-01.png",
    imageAlt: "Community outreach activity in Galle",
    link: "/news-events",
    featured: true,
  },
  {
    id: 2,
    tag: "Coming Soon",
    title: "Sensory play workshop",
    description:
      "Discover hands-on techniques to boost early childhood development through creative textures, sights, and sounds. Reserve your spot today!",
    image: "/images/news-workshop.png",
    imageAlt: "People attending a sensory play workshop",
    link: "/news-events",
  },
  {
    id: 3,
    tag: "Coming Soon",
    title: "Early Childhood Classroom Tour",
    description:
      "Step inside our purposefully designed learning environments and see how we inspire curiosity.",
    image: "/images/news-classroom.png",
    imageAlt: "Early childhood classroom",
    link: "/news-events",
  },
];

const featuredNews = newsItems.find((item) => item.featured);
const sideNews = newsItems.filter((item) => !item.featured);

const NewsSection = () => {
  return (
    <section className="news-section">
      <div className="news-section-content">
        {/* HEADER */}
        <div className="news-section-header">
          <h2>Latest News & Events</h2>

          <div className="news-section-badge contact-section-badge">What’s Happening</div>

          <p>
            Discover stories of hope, upcoming sensory play days, and
            opportunities to co-create inclusive spaces in our communities.
          </p>
        </div>

        {/* NEWS LAYOUT */}
        <div className="news-section-grid">
          {/* LEFT FEATURED CARD */}
          {featuredNews && (
            <article className="news-feature-card">
              <div className="news-feature-image">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.imageAlt}
                />
              </div>

              <div className="news-feature-content">
                <span className="news-feature-date">
                  {featuredNews.date}
                </span>

                <h3>{featuredNews.title}</h3>

                <p>{featuredNews.description}</p>

                <Link
                  href={featuredNews.link}
                  className="news-feature-btn"
                >
                  <span>Learn More</span>
                  <span className="news-btn-arrow">→</span>
                </Link>
              </div>
            </article>
          )}

          {/* RIGHT SIDE CARDS */}
          <div className="news-side-column">
            {sideNews.map((item) => (
              <article className="news-side-card" key={item.id}>
                <div className="news-side-image">
                  <img src={item.image} alt={item.imageAlt} />
                </div>

                <div className="news-side-content">
                  <span className="news-side-tag">{item.tag}</span>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <Link
                    href={item.link}
                    className="news-side-arrow-btn"
                    aria-label={`Read more about ${item.title}`}
                  >
                    →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* BOTTOM BUTTON */}
        <div className="news-section-btn-container">
          <Link href="/news-events" className="news-section-btn">
            <span>News/Events</span>
            <span className="news-section-btn-arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;