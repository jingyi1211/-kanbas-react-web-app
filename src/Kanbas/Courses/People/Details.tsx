// import { useEffect, useState } from "react";
// import { FaCheck, FaUserCircle } from "react-icons/fa";
// import { IoCloseSharp } from "react-icons/io5";
// import { useParams, useNavigate } from "react-router";
// import { Link } from "react-router-dom";
// import * as client from "../../Account/client";
// import { FaPencil } from "react-icons/fa6";

// export default function PeopleDetails() {
//     const { uid } = useParams();
//     const [user, setUser] = useState<any>({});
//     const navigate = useNavigate();
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [role, setRole] = useState("");
//     const [editing, setEditing] = useState(false);

//     const saveUser = async () => {
//         const [firstName, lastName] = name.split(" ");
//         const updatedUser = { ...user, firstName, lastName, email, role };
//         await client.updateUser(updatedUser);
//         setUser(updatedUser);
//         setEditing(false);
//         navigate(-1);
//     };

//     const deleteUser = async (uid: string) => {
//         await client.deleteUser(uid);
//         navigate(-1);
//     };

//     const fetchUser = async () => {
//         if (!uid) return;
//         const user = await client.findUserById(uid);
//         setUser(user);
//     };

//     useEffect(() => {
//         if (uid) fetchUser();
//     }, [uid]);
//     if (!uid) return null;

//     return (
//         <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
//             <button onClick={() => navigate(-1)} className="btn position-fixed end-0 top-0 wd-close-details">
//                 <IoCloseSharp className="fs-1" /> </button>
//             <div className="text-center mt-2"> <FaUserCircle className="text-secondary me-2 fs-1" /> </div><hr />
//             <div className="text-danger fs-4 wd-name">
//                 {!editing && (
//                     <FaPencil onClick={() => setEditing(true)}
//                         className="float-end fs-5 mt-2 wd-edit" />)}
//                 {editing && (
//                     <FaCheck onClick={() => saveUser()}
//                         className="float-end fs-5 mt-2 me-2 wd-save" />)}

//                 {!editing && (
//                     <div className="wd-name"
//                         onClick={() => setEditing(true)}>
//                         {user.firstName} {user.lastName} </div>)}
//                 {user && editing && (
//                     <input className="form-control w-50 wd-edit-name"
//                         defaultValue={`${user.firstName} ${user.lastName}`}
//                         onChange={(e) => setName(e.target.value)}
//                         onKeyDown={(e) => {
//                             if (e.key === "Enter") { saveUser(); }
//                         }} />)}
//             </div>

//             <b>Email:</b>
//             <span className="wd-email">
//                 {!editing && (
//                     <FaPencil onClick={() => setEditing(true)}
//                         className="float-end fs-5 mt-2 wd-edit" />)}
//                 {editing && (
//                     <FaCheck onClick={() => saveUser()}
//                         className="float-end fs-5 mt-2 me-2 wd-save" />)}
//                 {!editing && (
//                     <div className="wd-email"
//                         onClick={() => setEditing(true)}>
//                         {user.email} </div>)}
//                 {user && editing && (
//                     <input className="form-control w-50 wd-edit-email"
//                         defaultValue={`${user.email}`}
//                         onChange={(e) => setEmail(e.target.value)}
//                         onKeyDown={(e) => {
//                             if (e.key === "Enter") { saveUser(); }
//                         }} />)}        </span> <br />
//             <b>Roles:</b>
//             <span className="wd-roles">
//                 {!editing && (
//                     <FaPencil onClick={() => setEditing(true)}
//                         className="float-end fs-5 mt-2 wd-edit" />)}
//                 {editing && (
//                     <FaCheck onClick={() => saveUser()}
//                         className="float-end fs-5 mt-2 me-2 wd-save" />)}
//                 {!editing && (
//                     <div className="wd-roles"
//                         onClick={() => setEditing(true)}>
//                         {user.role} </div>)}
//                 {user && editing && (
//                     <select className="form-control w-50 mt-2 wd-edit-role"
//                         defaultValue={user.role}
//                         onChange={(e) => setRole(e.target.value)}
//                         onKeyDown={(e) => {
//                             if (e.key === "Enter") { saveUser(); }
//                         }}>
//                         <option value="STUDENT">Students</option>
//                         <option value="TA">Assistants</option>
//                         <option value="FACULTY">Faculty</option>
//                         <option value="ADMIN">Administrators</option>
//                     </select>)}
//             </span> <br />
//             <b>Login ID:</b>        <span className="wd-login-id">      {user.loginId}      </span> <br />
//             <b>Section:</b>         <span className="wd-section">       {user.section}      </span> <br />
//             <b>Total Activity:</b>  <span className="wd-total-activity">{user.totalActivity}</span>
//             <hr />
//             <button onClick={() => deleteUser(uid)} className="btn btn-danger float-end wd-delete" > Delete </button>
//             <button onClick={() => navigate(-1)}
//                 className="btn btn-secondary float-start float-end me-2 wd-cancel" > Cancel </button>
//         </div>);
// }

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { FaCheck, FaUserCircle } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import * as client from "../../Account/client";

export default function PeopleDetails() {
    const { uid } = useParams();
    const [user, setUser] = useState({ firstName: "", lastName: "", email: "", role: "", loginId: "", section: "", totalActivity: "" });
    const navigate = useNavigate();
    const [editingName, setEditingName] = useState(false);
    const [editingEmail, setEditingEmail] = useState(false);
    const [editingRole, setEditingRole] = useState(false);

    const saveField = async (field: any) => {
        const updatedUser = { ...user };
        await client.updateUser(updatedUser);
        setUser(updatedUser);
        if (field === 'name') setEditingName(false);
        if (field === 'email') setEditingEmail(false);
        if (field === 'role') setEditingRole(false);
        navigate(-1);
    };

    const deleteUser = async () => {
        if (!uid) return;  // 确保 uid 有效
        await client.deleteUser(uid);
        navigate(-1);
    };

    const fetchUser = async () => {
        if (!uid) return;
        const fetchedUser = await client.findUserById(uid);
        setUser(fetchedUser);
    };

    useEffect(() => {
        fetchUser();
    }, [uid]);

    if (!uid) return null;

    return (
        <div className="wd-people-details position-fixed top-0 end-0 bottom-0 bg-white p-4 shadow w-25">
            <button onClick={() => navigate(-1)} className="btn position-fixed end-0 top-0 wd-close-details">
                <IoCloseSharp className="fs-1" />
            </button>
            <div className="text-center mt-2">
                <FaUserCircle className="text-secondary me-2 fs-1" />
            </div>
            <hr />
            <div className="text-danger fs-4 wd-name">
                {editingName ? (
                    <>
                        <input
                            className="form-control"
                            value={`${user.firstName} ${user.lastName}`}
                            onChange={e => {
                                const [firstName, lastName] = e.target.value.split(" ");
                                setUser({ ...user, firstName, lastName });
                            }}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") { saveField('name'); }
                            }}
                        />
                        <FaCheck onClick={() => saveField('name')} className="float-end fs-5 mt-2 me-2 wd-save" />
                    </>
                ) : (
                    <>
                        {user.firstName} {user.lastName}
                        <FaPencil onClick={() => setEditingName(true)} className="float-end fs-5 mt-2 wd-edit" />
                    </>
                )}
            </div>
            <b>Email:</b>
            <div className="wd-email">
                {editingEmail ? (
                    <>
                        <input
                            type="email"
                            className="form-control"
                            value={user.email}
                            onChange={e => setUser({ ...user, email: e.target.value })}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") { saveField('email'); }
                            }}
                        />
                        <FaCheck onClick={() => saveField('email')} className="float-end fs-5 mt-2 me-2 wd-save" />
                    </>
                ) : (
                    <>
                        {user.email}
                        <FaPencil onClick={() => setEditingEmail(true)} className="float-end fs-5 mt-2 wd-edit" />
                    </>
                )}
            </div>
            <b>Roles:</b>
            <div className="wd-roles">
                {editingRole ? (
                    <select
                        className="form-control"
                        value={user.role}
                        onChange={e => setUser({ ...user, role: e.target.value })}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") { saveField('role'); }
                        }}
                    >
                        <option value="STUDENT">Students</option>
                        <option value="TA">Assistants</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="ADMIN">Administrators</option>
                    </select>
                ) : (
                    <>
                        {user.role}
                        <FaPencil onClick={() => setEditingRole(true)} className="float-end fs-5 mt-2 wd-edit" />
                    </>
                )}
            </div>
            <b>Login ID:</b> <span className="wd-login-id">{user.loginId}</span> <br />
            <b>Section:</b> <span className="wd-section">{user.section}</span> <br />
            <b>Total Activity:</b> <span className="wd-total-activity">{user.totalActivity}</span>
            <hr />
            <button onClick={deleteUser} className="btn btn-danger float-end wd-delete">Delete</button>
            <button onClick={() => navigate(-1)} className="btn btn-secondary float-start float-end me-2 wd-cancel">Cancel</button>
        </div>
    );
}


