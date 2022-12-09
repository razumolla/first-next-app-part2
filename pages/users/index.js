import { useState } from "react";

function Users() {
    const [users, setUsers] = useState();

    const loadAllData = () => {
        fetch('api/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }

    return (
        <div>
            <h1>All Users </h1>

            <button onClick={loadAllData}>Load User Data </button>
            {
                users?.map(user => {
                    return (
                        <div key={user.id}>
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