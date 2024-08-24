"use client";

import { getAge } from "@/lib";
import config from "@/lib/config.json";

export const Footer = () => {
    return (
        <section className="footer-container">
            <div>
                <div className="footer-socials">
                    {config.socials.map((data, key) => (
                        <a onClick={() => window.open(data.link)} key={key}>
                            <i className={data.icon}></i>
                        </a>
                    ))}
                </div>
                <p>
                    Me and <i className="fa-solid fa-code"></i> is a{" "}
                    <i className="fa-solid fa-fire"></i> combination
                </p>
            </div>
        </section>
    );
};
