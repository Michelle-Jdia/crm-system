import { Link, NavLink } from "react-router-dom";

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Home</NavLink>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav w-100">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to="/clients">Clients</NavLink>
                        </li>
                        <li className="nav-item bg-warning ml-auto rounded">
                            <NavLink className="nav-link" to="/clients/new">Add Client</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
