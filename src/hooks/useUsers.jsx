import { useEffect, useState } from "react";

function useUsers () {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect (() =>{
        fetch("https://dummyjson.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data.users))
            .catch((err) => console.log(err));
    }, []);

    const findUser = (id) => {
        if ( id < 1 || id >30 ) {
            alert ("ID user không tồn tại!");
            return;
        }

        const user = users.find((x) => x.id === id);
        setSelectedUser(user);
    }

    return {
        users,
        selectedUser,
        findUser
    };
}

export default useUsers;