import Link from "next/link";
import "./SensoryBoardSection.css";

const SensoryBoardSection = () => {

  const sensoryBoards = [
    {
      id: 1,
      image: "/images/Board-image-01.png",
      imageAlt: "Child exploring a wooden sensory board",
      tag: "Practical skills",
      title: "Build everyday confidence",
      description:
        "Familiar locks, laces and switches turn essential life skills into calm, rewarding moments of play.",
    },
    {
      id: 2,
      image: "/images/Board-image-02.png",
      imageAlt: "Wooden sensory board with colourful shapes and gears",
      tag: "Tactile discovery",
      title: "Explore through touch",
      description:
        "Thoughtful textures, fastenings and shapes invite curious hands to discover at their own pace.",
    },
    {
      id: 3,
      image: "/images/Board-image-03.png",
      imageAlt: "Colourful sensory board in a learning environment",
      tag: "Inclusive by design",
      title: "Made for every learner",
      description:
        "Adaptable activities support focus, coordination and independence across different abilities.",
    },
  ];

  return (
    <section className="sensory-board-section">

      <div className="sensory-board-content">

        {/* TRENDING BADGE */}
        <div className="sensory-board-trending">
          <span className="sensory-board-trending-icon">⌁</span>
          <span>Trending</span>
        </div>

        {/* HEADING */}
        <div className="sensory-board-header">
          <h2>
            Sensory Boards
            <span>for curious little hands</span>
          </h2>

          <p>
            Our sensory boards are designed to spark curiosity,
            build fine motor skills and provide a calming,
            engaging experience for children.
          </p>
        </div>

        {/* CARDS */}
        <div className="sensory-board-card-container">

          {sensoryBoards.map((board) => (
            <article
              className="sensory-board-card"
              key={board.id}
            >

              <div className="sensory-board-card-image">
                <img
                  src={board.image}
                  alt={board.imageAlt}
                />
              </div>

              <div className="sensory-board-card-content">

                <div className="sensory-board-card-tag">
                  <span className="sensory-board-tag-icon">✣</span>
                  {board.tag}
                </div>

                <h3>{board.title}</h3>

                <p>{board.description}</p>

              </div>

            </article>
          ))}

        </div>

        {/* BUTTON */}
        <div className="sensory-board-btn-container">
          <Link
            href="/sensory-board"
            className="sensory-board-btn"
          >
            <span>Sensory Boards</span>
            <span className="sensory-board-btn-arrow">→</span>
          </Link>
        </div>

      </div>

    </section>
  );
};

export default SensoryBoardSection;