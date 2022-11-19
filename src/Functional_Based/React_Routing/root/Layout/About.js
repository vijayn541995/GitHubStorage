import React from "react";
let About = () => {
    return (
        <React.Fragment >
            <div className="about-page">
                <div className="wrapper">
                <section className="p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h4  text-teal">About Us</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore tenetur accusamus, cum tempore sint dolores consequuntur,
                                dolor pariatur sapiente vel aut praesentium et labore, voluptates temporibus totam? Recusandae, nesciunt inventore!</p>
                        </div>
                    </div>
                </div>
            </section>
            
                <div className="container ">
                    <div className="row">
                        <div className="col">
                            <ul className=" list-group mx-2">
                                <li className="list-group-item ">
                                    App Name : <span className="font-weight-bold">React Routing</span>
                                </li> <br/>
                                <li className="list-group-item ">
                                    Version : <span className="font-weight-bold">1.0.1</span>
                                </li> <br/>
                                <li className="list-group-item ">
                                    Author : <span className="font-weight-bold">Vijay Aradhya</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default About;