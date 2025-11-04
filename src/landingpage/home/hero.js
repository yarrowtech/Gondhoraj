import React from 'react';
import { Link } from 'react-router-dom';
function Hero() {
    return (
        <div className='container mt-5 mb-5 hero-section'>
            <div className='row'>
                <div className='col-7 ps-5'>
                <h1 className="display-4 fw-bold mb-4">
                        We do not cook, <br />
                        we create your <span className="highlight">emotions</span>!
                    </h1>
                    <p className="fs-5 text-muted mb-4">
                        Where traditional Bengali flavors are brightened by <br />
                        the distinctive zest of the local Gondhoraj lime...
                    </p>
                    <div className="mt-3">
                        <Link to="/Bookpage">
                            <button className="btn btn-success btn-lg me-3 shadow-sm animate-bounce">Book Now</button>
                        </Link>
                        <Link to="/about">
                            <button className="btn btn-outline-success  me-3 btn-lg shadow-sm animate-bounce">About</button>
                        </Link>
                    </div>
                    </div>
                    <div className='col-5 '>
                  <img className='hero-image' src='media/mypic.jpg' alt='pic' style={{width:"90%",borderRadius:"10px"}}/>
                    </div>
                </div>
            </div>
            );
}

            export default Hero;


