import React from 'react'
import NavBar from './navBar'

const Header = () => {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
                            <h1>Online Payment Made <br /> Easy For You.</h1>
                            <p className="main-hero-para">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae mollitia laboriosam voluptatem quis magnam aliquam pariatur rem sapiente ipsum ab temporibus, eos ut debitis? Dolores voluptates provident odio rerum consequuntur?

                            </p>
                            <h3>Get early access for you</h3>
                            <div className="input-group mt-3">
                                <input type="text" className="rrounded-pill w-50  w-lg-75 me-3 p-2 form-control-text" placeholder="Enter Your Email" />
                                <div className="input-group-button">Get it Now</div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images order-md-first order-sm-first">
                            <img src="./images/hero1.jpg" className="img-fluid    " alt="heor1" />
                            <img src="./images/hero4.jpg" className="img-fluid   main-hero-img2 " alt="heor1" />
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header
