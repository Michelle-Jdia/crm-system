import { Link, withRouter } from "react-router-dom";

function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav w-100">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/clients">Clients</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/note">Notes</Link>
                        </li>
                        <li className="nav-item bg-warning ml-auto rounded">
                            <Link className="nav-link" to="/clients/new">Add Client</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)
