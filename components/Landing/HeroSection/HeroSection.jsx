import "./HeroSection.css"

const HeroSection = ()=>{
    
    return(
        <section className="hero-section">
          <div className="hero-content">
            <h1>MERAK</h1>
            <p>We connect compassion with action, helping communities overcome challenges and build stronger, more hopeful futures</p>
            <div className="hero-btn-container">
                <button className="btn-color">Sensory Board</button>
                <button className="hero-btn-2">Contact Us</button>
            </div>
          </div>
        </section>
    )
}

export default HeroSection