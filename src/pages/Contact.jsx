import { useState } from "react";
import useUsers from "../hooks/useUsers";

function Contact () {
    const [searchId, setSearchId] = useState("");
    const {selectedUser, findUser} = useUsers();

    const handleSearch = () => {
        findUser (Number(searchId));
    }

    return (
        <div>
            <h1> Welcome to the contact site! </h1>

            <div className = "search-box">
                <input
                    className = "search-input"  
                    type = "number"
                    placeholder = "Nhập ID user cần tìm (1-30)"
                    value = {searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                />

                <button className = "search-button" onClick = {handleSearch} > Tìm kiếm </button>
            </div>

            {selectedUser ? (
                <div>
                    <h3> Thông tin user: </h3>
                    <p> ID user: {selectedUser.id}</p>
                    <p> First name: {selectedUser.firstName}</p>
                    <p> Last name: {selectedUser.lastName}</p>
                    <p> Email: {selectedUser.email}</p>
                    <p> Phone number: {selectedUser.phone}</p>
                    <p> Age: {selectedUser.age}</p>
                </div>
             ) : (
                <p> Chưa có user nào cần tìm kiếm. </p>
            
            )}
        </div>
    );
}

export default Contact;