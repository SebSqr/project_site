// components/Tile.js
import styles from './Tile.module.css'

  const Tile = (props) => (
    <div className={styles.tileStyle}>

        <div className={styles.topHalf}>
            <img className={styles.photo} src={props.src}></img>
        </div>

      <div className={styles.bottomHalf}>
          <div className={styles.title}>
            <h1>{props.title}</h1>
          </div>
          <div className={styles.paragraph}>
            <p>{props.text}</p>
          </div>

      </div>

      {props.children}

    </div>
  );
  
  export default Tile;