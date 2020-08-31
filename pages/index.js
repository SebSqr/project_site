import Layout from "../components/Layout";
// components/Tile.js
import styles from './index.module.css'
import Tile from "../components/Tile";

const Home = () => (
    <Layout>
        <div className={styles.tileListContainer}>
        <ul className={styles.tileList}>
            <li><Tile h1="Statistics Calculator" src={"/ml_learning.jpg"} title="Machine Learning"
            text="Two predictive machine learning models on determining new policyholders' risk 
            on car insurance claims, and secondly for music taste by location."></Tile></li>
            <li><Tile></Tile></li>
            <li><Tile></Tile></li>
        </ul>
        </div>
    </Layout>
);

export default Home;