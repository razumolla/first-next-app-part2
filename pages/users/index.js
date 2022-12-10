import { useState } from "react";
import Header from "../../components/Header";

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

    const handleDeleteBtn = (id) => {
        fetch(`api/users/${id}`, {
            method: "DELETE",
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
                            <h3>{user.id} :  {user.name} </h3>
                            <button onClick={() => handleDeleteBtn(user.id)}> Delete
                            </button>
                            
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    );
}

Users.getLayout = function getLayout(page) {
    return (
      <>
      <Header/>
        <>{page}</>
      </>
    )
  }

export default Users;