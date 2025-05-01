import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-body-tertiary w-100">
            <nav className="navbar container ">
            <div className="container-fluid">
                <Link to={"/students-form"} className="navbar-brand fs-3 fw-bolder">Student-Form</Link>
                <Link to={"/students-list"} className="navbar-brand fs-3 fw-bolder">Detail-Cards</Link>
            </div>
        </nav>
        </div>
    );
}

export default Navbar;