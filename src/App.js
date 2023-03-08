import styles from "./style/App.module.css";
import ServiceSection from "./components/ServiceSection";
import HeartShape from "./assets/heartShape.js";

function App() {
  return (
    <div className={styles.app}>
      <HeartShape className={styles.backgroundIcon} strokeWidth={3} />
      <HeartShape className={styles.backgroundIcon} strokeWidth={6} />

      <h1>Service Section Design</h1>
      <ServiceSection />
     
    </div>
  );
}

export default App;
