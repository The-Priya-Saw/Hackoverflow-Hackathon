import React from 'react';
import './App.css';

const welcome = () => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (!user) {
        window.location.href = "/login";
    }

    const logout = (e) => {
        sessionStorage.removeItem("user");
        window.location.href = "/login";
    }

    return (
        <div className='container'>

            <div className="navbar">
             <div className="home">HOME</div>
             <div className="about">ABOUT US</div>
             <div className="contact">CONTACT</div>
             <div className="logout"><button className = "logoutBtn" onClick={logout}>LOG OUT</button></div>
            </div>

            <div className="welcomeContainer">
                <div className="content">
                <h1>Welcome to our Page </h1>
                <h2>{user.name}</h2>
                
                </div>
            </div>

        </div>

    );

}

export default welcome;

