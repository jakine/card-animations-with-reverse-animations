import styles from "../style/Components.module.css";
import ArrowIcon from "../assets/arrow.js";
import { useEffect, useRef, useState } from "react";

const Card = (props) => {
  const [mouseHover, setMouseHover] = useState(false);
  const [mouseUnHover, setMouseUnHover] = useState(false);
  const [style, setStyle] = useState(`${styles.cardDiv} ${styles[props.cardstyles]}`);


  
  useEffect(() => {
    if(mouseHover){
      const newStyle = `${styles.cardDiv} ${styles[props.cardstyles]} ${styles.mouseHover}`;
      console.log(newStyle);
      setStyle(newStyle);
    }
    else if(mouseUnHover){
      const newStyle = `${styles.cardDiv} ${styles[props.cardstyles]} ${styles.mouseUnHover}`;
      console.log(newStyle);
      setStyle(newStyle);
    }
    
  }, [mouseHover, mouseUnHover])

  const onMouseHover=()=>{
    setMouseUnHover(false)
    setMouseHover(true)
  }
  
  const onMouseUnHover=()=>{
    setMouseUnHover(true)
    setMouseHover(false)
  }
  return (
    <div
      className={style} onMouseLeave={onMouseUnHover}
      onMouseEnter={onMouseHover}
    >
      <div className={styles.cardIconDiv}>{props.icon}</div>
      <h3 className={styles.cartTitle}>{props.title}</h3>
      <p className={styles.cardP}>{props.text}</p>
      <ArrowIcon className={styles.arrowIcon} />
    </div>
  );
};

export default Card;
