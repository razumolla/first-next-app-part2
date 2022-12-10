import { useState } from "react";

function Users() {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState("");

    const loadUsers = () => {
        fetch('api/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }

    const handleAddUser = () => {
        fetch("api/users", {
            method: "POST",
            body: JSON.stringify({ user }),
            headers: { "Content-Type": "application/json" },
        });
        loadUsers();
    }

    return (
        <div>
            <h1>All Users </h1>
            <div>
                <input onChange={e => setUser(e.target.value)} type="text" />
                <button onClick={handleAddUser}>Add User</button>
            </div>
            <button onClick={loadUsers}>Load Users </button>
            {
                users?.map(user => {
                    return (
                        <div key={user.id}>
                            {user.id} . 
                            {user.name}
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Users;