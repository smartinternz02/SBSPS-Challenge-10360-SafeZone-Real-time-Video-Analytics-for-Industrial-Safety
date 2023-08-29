export default function NavBar() {
    return (
        <nav className="navbar p-0 fixed-top d-flex flex-row">
            <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
                <a className="navbar-brand brand-logo-mini" href="index.html"><img src="assets/images/logo-mini.svg" alt="logo" /></a>
            </div>
            <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
                <ul className="navbar-nav w-100">
                    <li className="nav-item w-100">
                        <h1 className="h1">Dashboard Control</h1>
                    </li>
                </ul>
                <ul className="navbar-nav navbar-nav-right">
                    <li className="nav-item dropdown border-left">
                        <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-bs-toggle="dropdown">
                            <i className="mdi mdi-bell"></i>
                            <span className="count bg-danger"></span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                            <h6 className="p-3 mb-0">Notifications</h6>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <i className="mdi mdi-calendar text-success"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject mb-1">Event today</p>
                                    <p className="text-muted ellipsis mb-0"> Just a reminder that you have an event today </p>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <i className="mdi mdi-settings text-danger"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject mb-1">Settings</p>
                                    <p className="text-muted ellipsis mb-0"> Update dashboard </p>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item preview-item">
                                <div className="preview-thumbnail">
                                    <div className="preview-icon bg-dark rounded-circle">
                                        <i className="mdi mdi-link-variant text-warning"></i>
                                    </div>
                                </div>
                                <div className="preview-item-content">
                                    <p className="preview-subject mb-1">Launch Admin</p>
                                    <p className="text-muted ellipsis mb-0"> New admin wow! </p>
                                </div>
                            </a>
                            <div className="dropdown-divider"></div>
                            <p className="p-3 mb-0 text-center">See all notifications</p>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
