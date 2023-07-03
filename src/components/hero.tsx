import React from 'react';

export default function HeroSection(){
    return(
        <div 
            className="hero-section"
            style={{ backgroundImage: `url('/cloud-tech-bg-3.jpg')` }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero-text">
                            <h1>Hello, I'm <span className="hero-span">Ashwin</span></h1>
                            <p>I'm a Full Stack Web Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}