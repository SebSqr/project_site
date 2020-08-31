// components/Layout.js

import Head from "next/head";
import NavBar from "./NavBar";
import styles from './Layout.module.css'

const Layout = props => (
    <div className={styles.layoutStyle}>
        <Head>
            <title>Projects</title>
        </Head>
        <NavBar />
    
        <div className={styles.contentStyle}>
            {props.children} 
        </div>
        
        <div className={styles.animationArea}>
            <ul className={styles.boxArea}>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
);

export default Layout;