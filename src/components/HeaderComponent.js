import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return(
        <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark p-3 ">
            <Link to={"/list"} className="navbar-brand">
                Students Management App
            </Link>
            <div className="navbar-nav mr-auto">
                <li className="nav-item"  >
                    <Link to={"/list"} className="nav-link">
                        All Students
                    </Link>
                </li>
                <li className="nav-item" >
                    <Link to={"/add"} className="nav-link">
                        Add Student
                    </Link>
                </li>
            </div>
        </nav>
    </header>
    )

}

export default Header;