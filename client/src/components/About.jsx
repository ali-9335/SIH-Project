import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AboutUs() {
    return (
        <div className="container-fluid">
            <h1 className="text-center mb-4" style={{ padding: "40px 0px", fontSize: "70px", }}>About Us</h1>

            <section className="row mb-5 d-flex align-items-center " style={{ padding: "0 40px" }}>
                <div className="col-lg-6">
                    <div className="card border-0 shadow-sm" style={{ borderRadius: '12px', backgroundColor: '#ffffff' }}>
                        <div className="card-body">
                            <h2 className="card-title" style={{ fontSize: '3rem', fontWeight: '600' }}>Our Story</h2>
                            <p className="card-text" style={{ color: '#666666', fontSize: '1.5rem', lineHeight: '1.6' }}>
                                Our platform is built on the principles of integrity, transparency, and collaboration. We offer a range of services designed to support both farmers and buyers, including crop bidding, price transparency, and legal government contracts. By providing real-time data and fostering direct connections, we ensure that all parties can make informed decisions and engage in transactions with confidence.
                            </p>
                            <p className="card-text" style={{ color: '#666666', fontSize: '1.5rem', lineHeight: '1.6' }}>
                                We are committed to driving positive change in the agricultural sector. Through strategic partnerships with companies and startups, we bring cutting-edge solutions and resources directly to farmers, helping them improve their operations and stay competitive. Our focus on legal and transparent processes ensures that all transactions are secure and fair, promoting trust and reliability in every interaction.
                            </p>

                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="card border-0 shadow-sm" style={{ borderRadius: '12px' }}>
                        <img
                            src="https://plus.unsplash.com/premium_photo-1677529496297-fd0174d65941?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGVhbXxlbnwwfHwwfHx8MA%3D%3D"
                            alt="Company Overview"
                            className="card-img-top"
                            style={{ height: 'auto', width: '100%', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
                        />
                    </div>
                </div>
            </section>




            <section className="my-5">
                <h2 className="text-center" style={{ padding: "75px 0px", fontSize: "70px" }}>Our Team</h2>
                <div className="row mx-5">
                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="card mb-4" style={{ maxWidth: "400px" }}>
                            <img
                                src="https://plus.unsplash.com/premium_photo-1661766386981-1140b7b37193?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww"
                                className="card-img-top"
                                alt="Team Member"
                                style={{ height: "auto", width: "100%" }} // Ensure the image scales properly
                            />
                            <div className="card-body">
                                <h5 className="card-title">John Doe</h5>
                                <p className="card-text">CEO & Founder</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="card mb-4" style={{ maxWidth: "400px" }}>
                            <img
                                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                                className="card-img-top"
                                alt="Team Member"
                                style={{ height: "auto", width: "100%" }} // Ensure the image scales properly
                            />
                            <div className="card-body">
                                <h5 className="card-title">Jane Smith</h5>
                                <p className="card-text">Chief Technology Officer</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center">
                        <div className="card mb-4" style={{ maxWidth: "400px" }}>
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D"
                                className="card-img-top"
                                alt="Team Member"
                                style={{ height: "auto", width: "100%" }} // Ensure the image scales properly
                            />
                            <div className="card-body">
                                <h5 className="card-title">Alice Johnson</h5>
                                <p className="card-text">Marketing Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <section className="text-center">
                <h2>Contact Us</h2>
                <p>If you have any questions or would like to learn more about our services, please feel free to reach out to us.</p>
                <a href="mailto:info@example.com" className="btn btn-primary">Email Us</a>
            </section> */}

        </div>

    );
}

