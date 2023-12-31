import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <>
            <div>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    {/* Brand Logo */}
                    <a href="index3.html" className="brand-link">
                        <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                        <span className="brand-text font-weight-light">AdminLTE 3</span>
                    </a>
                    {/* Sidebar */}
                    <div className="sidebar">
                        {/* Sidebar user panel (optional) */}
                        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div className="image">
                                <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                            </div>
                            <div className="info">
                                <a href="#" className="d-block">Alexander Pierce</a>
                            </div>
                        </div>
                        {/* SidebarSearch Form */}
                        <div className="form-inline">
                            <div className="input-group" data-widget="sidebar-search">
                                <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-sidebar">
                                        <i className="fas fa-search fa-fw" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Sidebar Menu */}
                        <nav className="mt-2">
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                                <li className="nav-item menu-open">
                                    <a href="#" className="nav-link active">
                                        <i className="nav-icon fas fa-tachometer-alt" />
                                        <p>
                                            <Link to='./'>Conten</Link>
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                </li>


                                {/* <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-chart-pie" />
                                        <p>
                                            Charts
                                            <i className="right fas fa-angle-left" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="pages/charts/chartjs.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>ChartJS</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/charts/flot.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Flot</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/charts/inline.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Inline</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/charts/uplot.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>uPlot</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li> */}

                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-edit" />
                                        <p>
                                                    <Link to='/From'>Form</Link>
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    {/* <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="pages/forms/general.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>General Elements</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/forms/advanced.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Advanced Elements</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/forms/editors.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Editors</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/forms/validation.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Validation</p>
                                            </a>
                                        </li>
                                    </ul> */}
                                </li>
                                {/* <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        <i className="nav-icon fas fa-table" />
                                        <p>
                                            Tables
                                            <i className="fas fa-angle-left right" />
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        <li className="nav-item">
                                            <a href="pages/tables/simple.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>Simple Tables</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/tables/data.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>DataTables</p>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="pages/tables/jsgrid.html" className="nav-link">
                                                <i className="far fa-circle nav-icon" />
                                                <p>jsGrid</p>
                                            </a>
                                        </li>
                                    </ul>
                                </li> */}
                              
                           
                            </ul>
                        </nav>
                        {/* /.sidebar-menu */}
                    </div>
                    {/* /.sidebar */}
                </aside>
            </div>




        </>
    )
}
export default Menu;