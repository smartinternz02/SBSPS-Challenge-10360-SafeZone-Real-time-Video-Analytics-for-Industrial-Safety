import LeftSideBar from "../Components/LeftSideBar";
import NavBar from "../Components/NavBar";

export default function Alerts() {
    return (
        <div class="container-scroller">

            <LeftSideBar />
            <NavBar />
            <div class="container-fluid page-body-wrapper">
                {/* <div className="content-wrapper"> */}
                <div class="row ">
                    <div class="col-12 grid-margin">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Alert History</h4>
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th> Location </th>
                                                <th> Date </th>
                                                <th> Time </th>
                                                <th> Type </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>

                                                <td> 02312 </td>
                                                <td> Dashboard </td>
                                                <td> 04 Dec 2019 </td>
                                                <td>
                                                    <div class="badge badge-outline-success">Approved</div>
                                                </td>
                                            </tr>
                                            <tr>

                                                <td> 02312 </td>
                                                <td> Dashboard </td>
                                                <td> 04 Dec 2019 </td>
                                                <td>
                                                    <div class="badge badge-outline-success">Approved</div>
                                                </td>
                                            </tr> <tr>

                                                <td> 02312 </td>
                                                <td> Dashboard </td>
                                                <td> 04 Dec 2019 </td>
                                                <td>
                                                    <div class="badge badge-outline-success">Approved</div>
                                                </td>
                                            </tr> <tr>

                                                <td> 02312 </td>
                                                <td> Dashboard </td>
                                                <td> 04 Dec 2019 </td>
                                                <td>
                                                    <div class="badge badge-outline-success">Approved</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
