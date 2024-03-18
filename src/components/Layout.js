import styles from "../app/page.module.css";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

export default function Layout({children}) {
    return(
        <div>
            <Header />
            <Nav/>
            <div className={styles.layout}>
                {children}
            </div>
            <Footer />


        </div>
    );
}