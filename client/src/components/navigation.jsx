import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">

            <li>
                <Link class="nav-link" to="/contact">
                    Contact
                </Link>
            </li>
            <li>
                <Link class="nav-link" to="/">
                    Home
                </Link>
            </li>
        </div>
    );
}

export default withRouter(Navigation);