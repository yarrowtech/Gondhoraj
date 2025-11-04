import React from "react";


function Contact() {
    return (
        <div className="contact-container">
            <div className="container py-5 ">
                <h2 className="fw-bold mb-3 text-center">Visit Our Place</h2>
                <p className="text-muted mb-5 text-center">
                    Go and enjoy our food and explore the rich flavors of Bengal.
                </p>

                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-12 mb-4">
                        <div className="contact-info p-4 border rounded">
                            <h4 className="fw-bold">Flavours of Bengal</h4>
                            <p className="text-muted">
                                Bengali · Desserts · Beverages
                            </p>
                            <h5 className="mt-4"><i class="fa-solid fa-location-dot"></i> Location</h5>
                            <p>Plot 34, DC Block, Bidhan Nagar, Sector 1, Salt Lake, Kolkata</p>
                        </div>
                    </div>


                    
                </div>
            </div>
        </div>
    );
}

export default Contact;
