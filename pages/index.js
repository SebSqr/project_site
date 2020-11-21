import Layout from "../components/Layout";
import styles from '../styles/index.module.css';
import navStyles from '../components/NavBar.module.css';

// components/Tile.js

const Home = () => (
    <Layout>
        
        <main>
            <div class="container">
                <div className={styles.mainContainer}>
                    <div className={styles.mainContent}>
                        <div className={styles.leftCol}>
                            <img className={styles.heart} src="Heart.svg" alt="Logo" class="logo-img"></img>
                        </div>
                        <div className={styles.rightCol}>
                            <h1 className={styles.h1}>Compare your music taste with friends and 
                            discover the Power of Music</h1>
                            <p1 className={styles.p1}>Log in with Spotify to find out how compatible your music 
                            taste is with your friends. Get your code, and share it with others to see how your 
                            taste stacks up against the rest of the world!</p1><br/>
                            <p1 className={styles.p1}>I've calculated 2,179,936 matches for 1,418,589 pals in 91 different countries
                                and counting!</p1><br/>
                            <p1 className={styles.p1}>Although I use the Spotify API, I'm not affiliated with Spotify.</p1>
                            <div className={styles.buttonContainer}>
                                <button style={{height: '50px', width:'300px', margin:'5px'}}className={navStyles.signUpButton}>Sign In with Spotify</button>
                                <p1>By signing in you agree to the privacy policy</p1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        
    </Layout>
);

export default Home;