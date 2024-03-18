import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import styles from "../app/page.module.css"
import { NavItems } from "./NavItems"
import {SubMenu} from './SubMenu'

export default function Nav() {

    return (
        <nav className={styles.nav}>
            <Link href='/' className={styles.homeIcon}>
                <FontAwesomeIcon icon={faHome} width={32}/>
            </Link>
            {NavItems.map((item, index) => {
                return <SubMenu item={item} key={index} />
            })}

            <div className={styles.socials}>
                <a href='https://discord.gg/gnMFt3uHC8' >
                    <FontAwesomeIcon icon={faDiscord} width={20}/>
                </a>
                <a href='https://tiktok.com/@mathheroclub'>
                    <FontAwesomeIcon icon={faTiktok} width={15}/>
                </a>
                <a href='https://instagram.com/mathheroclub' >
                    <FontAwesomeIcon icon={faInstagram} width={17}/>
                </a>
                <a href='https://www.youtube.com/@mathheroclub' >
                    <FontAwesomeIcon icon={faYoutube} width={20} />
                </a>
            </div> 
        </nav>
    )
}

