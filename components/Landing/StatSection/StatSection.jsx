import "./StatSection.css";

const StatSection = () => {

  const stats = [
    {
      id: 1,
      value: "34",
      description: "Communities reached",
    },
    {
      id: 2,
      value: "10k+",
      description: "Hours of meaningful play",
    },
    {
      id: 3,
      value: "500+",
      description: "Sensory boards delivered",
    },
  ];

  return (
    <section className="stat-section">

      <div className="stat-section-content">

        {/* LEFT CONTENT */}
        <div className="stat-section-left">

          {/* BADGE */}
          <div className="stat-section-badge">
            COMPASSION IN ACTION
          </div>

          {/* HEADING */}
          <h2>
            Small moments of
            <br />
            discovery build
            <br />
            brighter futures.
          </h2>

          {/* DESCRIPTION */}
          <p>
            Together, we create welcoming spaces where every
            child can explore, learn, and feel included.
          </p>

        </div>

        {/* RIGHT CONTENT */}
        <div className="stat-section-right">

          {stats.map((stat) => (
            <div className="stat-section-card" key={stat.id}>

              <h3>{stat.value}</h3>

              <p>{stat.description}</p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default StatSection;