import styles from "../style/Components.module.css";
import Card from "./Card";
import HeartShape from "../assets/heartShape";
import { services } from "../data";

const ServiceSection = () => {
  return (
    <div className={styles.serviceContainerDiv}>
      <HeartShape
        className={styles.heartShapeBackground}
        width={"1000"}
        height={"1000"}
        viewBox={"-60 -60 1500 1000"}
        strokeWidth={100}
      />
      <div className={styles.headerServiceContainer}>
        <h1 className={styles.headerDivTitle}>hellocare is for everyone</h1>
        <p className={styles.headerDivText}>
          hellocare platform consists of software, hardware and Artificial
          Intelligence (AI) that provides turnkey solutions for Hospitals, Home
          Care and Primary Care
        </p>
      </div>

      <div className={styles.servicesContainer}>
        {services.map((service) => (
          <Card key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;
