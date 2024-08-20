"use client";

import { getAge } from "@/lib";
import config from "@/lib/config.json";

export const About = () => {
    return (
        <section className="about-container" id="About">
            <div>
                <a />
                <div>
                    <div className="main-title">
                        <h2>About me</h2>
                        <h1>What makes me who I am?</h1>
                        <div>
                            {config.socials.map((data, key) => (
                                <a onClick={() => window.open(data.link)} key={key}>
                                    <i className={data.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="about-text">
                        <p>
                            Hi, I&apos;m Job, a {getAge()} year-old amateur devoloper, who likes to
                            code ones in a while. Most of the time I play sports or code a little.
                            Programming has always been something I liked and I hope that I can do
                            something with it. Still I don&apos;t know for sure what I want to do
                            later in life. Maybe I will join the military, maybe something with
                            sport or maybe I will stick to coding. Time will tell what will happen,
                            but until then I will continue to code things like this webiste.
                        </p>
                        <p>
                            🕹️ In my free time I mostly play sports but ones in a while I play games
                            such as{" "}
                            <a
                                onClick={() =>
                                    window.open("https://bandainamcoent.eu/elden-ring/elden-ring")
                                }>
                                Eldenring
                            </a>
                        </p>
                        <p>
                            🏑 Currently playing at{" "}
                            <a onClick={() => window.open("https://www.mhchbs.nl/")}>mhc HBS</a> in
                            team <i>A1</i>
                        </p>
                        <p>
                            🎓 Currently studying at{" "}
                            <a onClick={() => window.open("https://mendelcollege.nl/")}>
                                Mendel College
                            </a>{" "}
                            for my <i>VWO-ateneum degree</i>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
