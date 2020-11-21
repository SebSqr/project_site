// components/NavBar.js
import styles from './NavBar.module.css'
import Link from "next/link";
import Head from 'next/head';


  const NavBar = () => (
    <header className={styles.header}>
      <div className="container">
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>      
        <nav>
          <div className={styles.navWrapper}>
            <div className={styles.leftSide}>
              <h4>POM DISCOVER</h4>
            </div>
            <div className={styles.rightSide}>
              <ul className={styles.ul}>
                <li className={styles.li}><Link href="/explore"><a>About</a></Link></li>
                <li className={styles.li}><Link href="/profile"><a>Compatibility</a></Link></li>
                <li className={styles.li}><Link href="/profile"><a>Insights</a></Link></li>
                <li className={styles.li}><Link href="/profile"><a>Dashboard</a></Link></li>
                <button className={styles.signUpButton}>Sign In</button>
                <a className={styles.icon} href="javascript:void(0);" onclick="myFunction()">
                  <i style={{height:'20px',width:'20px'}} class="fas fa-bars"></i>
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
  
  export default NavBar;