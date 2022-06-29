import React from "react";
import {auth} from "../../firebase/firebase";

const Home = () => {
    return (
        <>
            <h1>
                Huỳnh Đăng Khoa - Home
                <button onClick={() => {auth.signOut()}}>Logout</button>
            </h1>
        </>
    )
}


export default Home;