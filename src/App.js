import {About, Contact, Footer, Home, NavBar, Resume, Skills} from "components/";
import {initAnalytics} from "utils/userAnalytics";
import "./App.scss";

initAnalytics();

const App = () => (
    <div id="app">
        <NavBar />

        <div id="app-content">
            <Home />
            <About />
            <Skills />
            <Resume />
            <Contact />
            <Footer />
        </div>
    </div>
);

export default App;
