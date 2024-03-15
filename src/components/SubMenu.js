"use client"; 
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import Link from "next/link"
import styles from '../app/page.module.css'

export const SubMenu = ({item}) => {

    const [subnav, setSubnav] = useState(false)
    const showSubnav = () => setSubnav(!subnav)


    function handleToggle(e) {
        setSubnav(prevState => !prevState);
        console.log('kjdas')
    }
    return (
    <div className={styles.navItems}>
        <button type="button" onClick={handleToggle} className={styles.button}>
            {/* {item.icon} */}

            <span className={styles.navTop}>     
       
                {item.title} 
                {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
            </span>
           
        </button>
        <div className={styles.subNav}>
            {subnav && item.subNav.map((item, index) => {
                return (
                    <Link  href={`${item.path}`} className={styles.subNavItems} key={index}>
                        {item.title}
                    </Link>          
                )
            })}

        </div>
      
    </div>
  )
}

