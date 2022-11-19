import React from "react";

class Nav extends React.Component {
    constructor() {
        super()
    }
    render() {
        return (
           <React.Fragment>
              <nav className="navbar navbar-dark bg-danger navbar-expand-sm p-3">
                <div className="container">
                    <a href="/" className="nav-brand h2">Ultimate Tour Destinations</a>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item h3">
                                <a href="/" className="nav-link text-info">Home</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item h3">
                                <a href="/" className="nav-link text-info">Tours</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item h3">
                                <a href="/" className="nav-link text-info">Package</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item h3">
                                <a href="/" className="nav-link text-info">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
              </nav>

           </React.Fragment>


        )
    }
}
export default Nav;