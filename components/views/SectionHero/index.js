import React from 'react'

const SectionHero = () => {
    return (
        <header id="home" className="home-area hero-equal-height section-padding overflow-hidden d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className="text-left home-content z-index position-relative">
                            <h5>Covid-19</h5>
                            <h1>Corona Virus - Stay Home Stay Safe</h1>
                            <p>COVID-19 is the infectious disease caused by the most recently discovered coronavirus. This new virus and disease were unknown before the outbreak began in Wuhan, China, in December 2019.</p>
                            <a href="#prevention" className="button js-scroll active-btn">How to Protect <i className="fa fa-question-circle-o" aria-hidden="true" /></a>
                            <a href="https://www.youtube.com/watch?v=elWIPbDfLA0" className="iq-video popup-video mfp-iframe button home-btn-2"> <i className="fa fa-play-circle-o" /> About COVID-19</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className="text-center z-index position-relative home-image">
                            {/* <img src="assets/img/home-front.png" className="img-fluid" alt /> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default SectionHero;
