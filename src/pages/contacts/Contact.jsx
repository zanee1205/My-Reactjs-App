import { useState, useEffect } from "react";
import useUsers from "../../hooks/useUsers";
import styles from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuotes, findQuoteById } from "../../redux/quoteSlice";

function Contact () {
    const [searchId, setSearchId] = useState("");
    const {selectedUser, findUser} = useUsers();
    const dispatch = useDispatch();
    const {quotes,  filteredQuote, loading } = useSelector (
        (state) => state.quote
    );

    useEffect(() =>{
        dispatch(fetchQuotes());
    }, [dispatch]);


    const handleSearch = () => {
        const id = (Number(searchId));

        findUser (id);
        dispatch (findQuoteById(id));
    }

    return (
        <div>
            <h1> Welcome to the contact site! </h1>

            <div className = {styles.searchBox}>
                <input
                    className = {styles.searchInput}  
                    type = "number"
                    placeholder = "Nhập ID user cần tìm (1-30)"
                    value = {searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                />

                <button className = {styles.searchButton} onClick = {handleSearch} > Tìm kiếm </button>
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

            {filteredQuote && (
                <div className = {styles.quoteResult} >
                    <h3> Kết quả tìm kiếm quote theo ID đã nhập: </h3>
                    <p> ID: {filteredQuote.id}</p>
                    <p> Quote: {filteredQuote.quote}</p>
                    <p> Author: {filteredQuote.author}</p>
                </div>
            )}

            {/* <div style = {{marginTop: "20px"}}>
                {quotes.map((q) =>(
                    <div key = {q.id} style = {{marginBottom: "10px"}}>
                        <p> <b>{q.id}</b> {q.quote} </p>
                        <i>- {q.author}</i>
                    </div>
                ))}
            </div> */}

        </div>
    );
}

export default Contact;