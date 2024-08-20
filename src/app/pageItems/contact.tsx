"use client";

import config from "@/lib/Config.json";
import React, { useState } from "react";

export const Contact = () => {
    const [result, setResult] = React.useState("");
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    };

    const clearInput = () => {
        setInputValue("");
    };

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setResult("Sending");
        const formData = new FormData(event.target);

        formData.append("access_key", "1705052f-ffda-418c-81c8-65e58911d6cf");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("success");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult("Error, " + data.message);
        }

        clearInput();
    };

    return (
        <>
            <section className="contact-container" id="Contact">
                <div>
                    <div className="main-title">
                        <h2>Contact</h2>
                        <h1>Want to Hire or Contact me?</h1>
                    </div>
                    <div className="contact-form">
                        <form onSubmit={onSubmit}>
                            <p>Name</p>
                            <input
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                className="contact-inputs"
                                required
                                value={inputValue}
                                onChange={handleInputChange}></input>
                            <p>Email</p>
                            <input
                                type="email"
                                name="email"
                                placeholder="JohnDoe@email.com"
                                className="contact-inputs"
                                required></input>
                            <p>Message</p>
                            <textarea
                                name="message"
                                placeholder="Hi I love your work ..."
                                className="contact-inputs"
                                required></textarea>

                            <button type="submit">
                                <i className="fa-regular fa-paper-plane" /> Submit
                            </button>
                        </form>
                    </div>
                </div>
            </section>
            <div
                className={`contact-popup ${result == "success" ? "active" : ""}`}
                onClick={() => setResult("finnished")}>
                <div>
                    <div className="popup-bar">
                        <i className="fa-solid fa-xmark" onClick={() => setResult("finnished")}></i>
                    </div>
                    <div className="popup-item">
                        <i className="fa-regular fa-circle-check"></i>
                        <h1>Thank you!</h1>
                        <p>Messages has been send succesfully!</p>
                    </div>
                </div>
            </div>
        </>
    );
};
