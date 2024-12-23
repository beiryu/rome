import React from 'react';
import '../styles/Hero.css';  // Import the Hero styles

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="hero-searchform">
                    <h1 className="hero-title">
                        <p>
                            Search Fitness and Specialist Listing
                            {/* <div class="hero-searchform">
                                <input type="text"></input>
                                <input type="button">Search</input>
                            </div> */}
                        </p>
                    </h1>

                    {/*}
                    <p className="hero-subtitle">
                    We manage your app so that you can focus on growing your user base.
                    </p>*/}
                </div>

            </div>
        </section>
    );
};

export default Hero;
