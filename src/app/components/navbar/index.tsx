"use client";

import config from "@/app/Config.json";
import { useState } from "react";
import Image from "next/image";

export const Navbar = () => {
    const [active, setActive] = useState("");

    return (
        <div className="navbar-container">
            <div className="navbar">
                <div className="navbar-routes">
                    {config.header.map((data, key) => (
                        <a
                            className={`route ${
                                active ==
                                "#" + data.item.charAt(0).toUpperCase() + data.item.slice(1)
                                    ? "active"
                                    : ""
                            }`}
                            key={key}
                            section-data={data.item}
                            href={`#${data.item}`}
                            onClick={() => (location.href = `/#${data.item}`)}
                            onMouseEnter={() => setActive("#" + data.item)}
                            onMouseLeave={() => setActive(location.hash)}>
                            <p>{data.item}</p> <div />
                        </a>
                    ))}
                </div>
                <Image
                    className="dark"
                    id="dark-mode-data"
                    src={"/jobk.svg"}
                    alt={"svg"}
                    width={"100"}
                    height={"50"}
                    onClick={() => (location.href = "./")}
                />

                <div id="dark-mode-toggle" className="navbar-darkModeToggle">
                    <a id="dark-mode-data">
                        <i className="fa-solid fa-sun"></i>
                        <i className="fa-solid fa-moon"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};
