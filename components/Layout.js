// components/Layout.js

import Head from "next/head";
import NavBar from "./NavBar";
import styles from './Layout.module.css'

const Layout = props => (
        <div className={styles.layoutStyle}>
            <Head>
                <title>Home</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <NavBar/>
            <div className={styles.contentStyle}> 
                {props.children}
            </div>

    
        
        </div>
);

export default Layout;