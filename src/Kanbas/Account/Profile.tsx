import { Link } from "react-router-dom";
import React from 'react';

export default function Profile() {
    return (
        <div id="wd-profile-screen" className="container mt-3">
            <h3>Profile</h3>
            <form>
                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" id="wd-username" defaultValue="alice" placeholder="Username" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" id="wd-password" defaultValue="123" placeholder="Password" type="password" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" id="wd-firstname" defaultValue="Alice" placeholder="First Name" />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" id="wd-lastname" defaultValue="Wonderland" placeholder="Last Name" />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" id="wd-dob" defaultValue="2000-01-01" type="date" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <input className="form-control" id="wd-email" defaultValue="alice@wonderland.com" type="email" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <select className="form-control" id="wd-role">
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="FACULTY">Faculty</option>
                            <option value="STUDENT">Student</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <Link to="/Kanbas/Account/Signin" className="btn btn-danger w-100">Sign out</Link>
                    </div>
                </div>
            </form>
        </div>
    );
}
