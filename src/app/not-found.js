import Layout from "../components/Layout"
import styles from "../app/page.module.css"
import Header from "../components/Header"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

export default function Custom404() {
    return (
        <div className={styles.App}>
            <Header/>
            <Nav/>
            <div className={styles.notFound}>
                <p className={styles.speechBubble}>找不到页面... 返回<a href="/" className={styles.notFoundLink}>主页</a></p>
                <iframe src="https://giphy.com/embed/BOPrq7m5jYS1W" width="343" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>        
            </div>
            <Footer/>
        </div>
    )
}