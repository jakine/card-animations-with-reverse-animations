import styles from "./style/App.module.css";
import ServiceSection from "./components/ServiceSection";
import StarIcon from "./assets/StarIcon";

function App() {
  return (
    <div className={styles.app}>
     <StarIcon className={styles.backgroundIcon} strokeWiddth={3} />
      <StarIcon className={styles.backgroundIcon} strokewidth={6} />

      <h1 className={styles.textshadowmoving}>Section Design</h1>
      <ServiceSection />
     
    </div>
  );
}

export default App;
