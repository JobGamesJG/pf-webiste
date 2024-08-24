import { Landing, About, Projects, Contact, Footer } from "./pageItems/";

export default function Home() {
    return (
        <main>
            <Landing />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}
