import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/img-logo-open-bar.gif';

function SideBar() {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img width="75" src={image} alt="Open Bar" />
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        {/* <a className="nav-link" href="/"> */}
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>OPEN BAR</span>
                        {/* </a> */}
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Acciones</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/categories">
                        {/* <a className="nav-link collapsed" href="/"> */}
                        <i className="fas fa-solid fa-list"></i>
                        <span>Categorias</span>
                        {/* </a> */}
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/varieties">
                        {/* <a className="nav-link" href="/"> */}
                        <i className="fas fa-solid fa-list"></i>
                        <span>Variedades</span>
                        {/* </a> */}
                    </Link>
                </li>


                <li className="nav-item">
                    <Link className="nav-link" to="/users">
                        {/* <a className="nav-link" href="/"> */}
                        <i className="fas fa-user"></i>
                        <span>Usuarios</span>
                        {/* </a> */}
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/*<!-- End of Sidebar -->*/}

        </React.Fragment>
    )
}
export default SideBar;