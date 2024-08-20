"use client";

import config from "@/lib/config.json";
import Image from "next/image";

export const Projects = () => {
    return (
        <section className="projects-container" id="Projects">
            <div>
                <div className="main-title">
                    <h2>My Projects</h2>
                    <h1>What projects have I or am i working on?</h1>
                </div>
                <div className="projects-list">
                    {config.projects.map((data, key) => (
                        <div className="projects-item" key={key}>
                            <Image src={data.image} alt={""} width={"1080"} height={"523"} />
                            <div>
                                <h1>{data.title}</h1>
                                <div>
                                    {data.buttons.map((button, key) => (
                                        <i
                                            key={key}
                                            className={button.icon}
                                            onClick={() => window.open(button.link)}></i>
                                    ))}
                                </div>
                            </div>
                            <p>{data.subTitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
