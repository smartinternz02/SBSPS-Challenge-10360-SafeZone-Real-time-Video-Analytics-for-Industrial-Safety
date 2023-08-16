export default function LeftSideBar() {
    return (
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
            <div class="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
                <a class="sidebar-brand brand-logo" href="index.html"><img src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`} alt="logo" /></a>
                <a class="sidebar-brand brand-logo-mini" href="index.html"><img src={`${process.env.PUBLIC_URL}/assets/images/logo-mini.svg`} alt="logo" /></a>
            </div>
            <ul class="nav">
                <li class="nav-item profile">
                    <div class="profile-desc">
                        <div class="profile-pic">
                            <div class="count-indicator">
                                <img class="img-xs rounded-circle" src="data:image/jpeg;base64,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" alt="" />
                                <span class="count bg-success"></span>
                            </div>
                            <div class="profile-name">
                                <h5 class="mb-0 font-weight-normal">Divanshi Jain</h5>
                                <span>Gold Member</span>
                            </div>
                        </div>
                        <a href="#" id="profile-dropdown" data-bs-toggle="dropdown"><i class="mdi mdi-dots-vertical"></i></a>
                        <div class="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list" aria-labelledby="profile-dropdown">
                            <a href="#" class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <div class="preview-icon bg-dark rounded-circle">
                                        <i class="mdi mdi-settings text-primary"></i>
                                    </div>
                                </div>
                                <div class="preview-item-content">
                                    <p class="preview-subject ellipsis mb-1 text-small">Account settings</p>
                                </div>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <div class="preview-icon bg-dark rounded-circle">
                                        <i class="mdi mdi-onepassword  text-info"></i>
                                    </div>
                                </div>
                                <div class="preview-item-content">
                                    <p class="preview-subject ellipsis mb-1 text-small">Change Password</p>
                                </div>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item preview-item">
                                <div class="preview-thumbnail">
                                    <div class="preview-icon bg-dark rounded-circle">
                                        <i class="mdi mdi-calendar-today text-success"></i>
                                    </div>
                                </div>
                                <div class="preview-item-content">
                                    <p class="preview-subject ellipsis mb-1 text-small">To-do list</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </li>
                <li class="nav-item nav-category">
                    <span class="nav-link">Navigation</span>
                </li>
                <li class="nav-item menu-items">
                    <a class="nav-link" href="index.html">
                        <span class="menu-icon">
                            <i class="mdi mdi-speedometer"></i>
                        </span>
                        <span class="menu-title">Dashboard</span>
                    </a>
                </li>
                <li class="nav-item menu-items">
                    <a class="nav-link" data-bs-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
                        <span class="menu-icon">
                            <i class="mdi mdi-laptop"></i>
                        </span>
                        <span class="menu-title">Camera Settings</span>
                        <i class="menu-arrow"></i>
                    </a>
                    {/* <div class="collapse" id="ui-basic">
                        <ul class="nav flex-column sub-menu">
                            <li class="nav-item"> <a class="nav-link" href="pages/ui-features/buttons.html">Buttons</a></li>
                            <li class="nav-item"> <a class="nav-link" href="pages/ui-features/dropdowns.html">Dropdowns</a></li>
                            <li class="nav-item"> <a class="nav-link" href="pages/ui-features/typography.html">Typography</a></li>
                        </ul>
                    </div> */}
                </li>
                <li class="nav-item menu-items">
                    <a class="nav-link" href="">
                        <span class="menu-icon">
                            <i class="mdi mdi-playlist-play"></i>
                        </span>
                        <span class="menu-title">Alert History</span>
                    </a>
                </li>
                {/* <li class="nav-item menu-items">
                    <a class="nav-link" href="pages/tables/basic-table.html">
                        <span class="menu-icon">
                            <i class="mdi mdi-table-large"></i>
                        </span>
                        <span class="menu-title">Tables</span>
                    </a>
                </li> */}
                {/* <li class="nav-item menu-items">
                    <a class="nav-link" href="pages/charts/chartjs.html">
                        <span class="menu-icon">
                            <i class="mdi mdi-chart-bar"></i>
                        </span>
                        <span class="menu-title">Charts</span>
                    </a>
                </li> */}
                <li class="nav-item menu-items">
                    <a class="nav-link" href="">
                        <span class="menu-icon">
                            <i class="mdi mdi-contacts"></i>
                        </span>
                        <span class="menu-title">User Settings</span>
                    </a>
                </li>
                {/* <li class="nav-item menu-items">
                    <a class="nav-link" data-bs-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
                        <span class="menu-icon">
                            <i class="mdi mdi-security"></i>
                        </span>
                        <span class="menu-title">User Pages</span>
                        <i class="menu-arrow"></i>
                    </a>
                    <div class="collapse" id="auth">
                        <ul class="nav flex-column sub-menu">
                            <li class="nav-item"> <a class="nav-link" href="pages/samples/blank-page.html"> Blank Page </a></li>
                            <li class="nav-item"> <a class="nav-link" href="pages/samples/error-404.html"> 404 </a></li>
                            <li class="nav-item"> <a class="nav-link" href="pages/samples/error-500.html"> 500 </a></li>
                            <li class="nav-item"> <a class="nav-link" href="pages/samples/login.html"> Login </a></li>
                            <li class="nav-item"> <a class="nav-link" href="pages/samples/register.html"> Register </a></li>
                        </ul>
                    </div>
                </li> */}
                <li class="nav-item menu-items">
                    <a class="nav-link" href="http://www.bootstrapdash.com/demo/corona-free/jquery/documentation/documentation.html">
                        <span class="menu-icon">
                            <i class="mdi mdi-file-document-box"></i>
                        </span>
                        <span class="menu-title">Support</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}
