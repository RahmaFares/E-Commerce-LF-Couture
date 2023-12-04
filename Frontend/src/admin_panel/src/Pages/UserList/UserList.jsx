import React, { useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styles from "./userList.module.css";

export default function UserList() {
    const [users, setUsers] = useState([
        { _id: '6539b60e4c99cbb2ba2841bb', username: "rahoma", email: "rfaress@gmail.com", isAdmin: false },
        { _id: '6539a815b1f81cf239d6f88d', username: "roqaya", email: "rokaya.alhalawany@gmail.com", isAdmin: false },
        { _id: '646f8a27fb5c327bf37...', username: "gfdhgc", email: "example1@gmail.com", isAdmin: false },
        { _id: '64642db47573232a72a...', username: "rahma", email: "example2@gmail.com", isAdmin: false },
        { _id: '646f895efb5c327bf37...', username: "vhhv", email: "example3@gmail.com", isAdmin: false },
        { _id: '646f874fbf5c327bf37...', username: "ce", email: "example4@gmail.com", isAdmin: false },
        { _id: '6539a815b1f81cf239d...', username: "roqaya", email: "example5@gmail.com", isAdmin: false },
        { _id: '6539b60e4c99cbb2ba2...', username: "rahoma", email: "example6@gmail.com", isAdmin: false },
        { _id: '654f1fb1fd5647996c8...', username: "RahmaFares", email: "example7@gmail.com", isAdmin: false },
        { _id: '655008faeb464c637cf...', username: "RahmaFaress", email: "example8@gmail.com", isAdmin: false },
        { _id: '65521af5fd39892f1fb...', username: "Rahom", email: "example9@gmail.com", isAdmin: false },
        { _id: '65522e20888ba117966...', username: "NewUser", email: "example10@gmail.com", isAdmin: false },
        { _id: '65522ef8888ba117966...', username: "NewUser", email: "example11@gmail.com", isAdmin: false },
        { _id: '65522e9a888ba117966...', username: "ffff", email: "example12@gmail.com", isAdmin: false },
        { _id: '65522f38888ba117966...', username: "rahomaaaaa", email: "example13@gmail.com", isAdmin: false },
        { _id: '65524ee480f308b97c5...', username: "LeilaFares", email: "example14@gmail.com", isAdmin: true },
        { _id: '656274c5e07eab503f3...', username: "Rahoma", email: "example15@gmail.com", isAdmin: false },
        { _id: '656558da82ab0aa9ded...', username: "new", email: "example16@gmail.com", isAdmin: false },
        { _id: '656c874446027f7d808...', username: "nnn", email: "example17@gmail.com", isAdmin: false },
    ].map(user => ({ ...user, id: user._id })));

    const handleDelete = (id) => {
        setUsers(users.filter(user => user._id !== id));
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 220 },
        { field: "username", headerName: "Username", width: 150 },
        { field: "email", headerName: "Email", width: 200 },
        { field: "isAdmin", headerName: "Is Admin", width: 130 },
        {
            field: "action",
            headerName: "Action",
            sortable: false,
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/user/" + params.row._id}>
                            <button className={styles.userListEdit}>Edit</button>
                        </Link>
                        <DeleteOutline
                            className={styles.userListDelete}
                            onClick={() => handleDelete(params.row._id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <div className={`${styles.dataGridContainer}`} style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
                style={{ height: 'calc(100vh - 50px)' }}
            />
        </div>
    );
}