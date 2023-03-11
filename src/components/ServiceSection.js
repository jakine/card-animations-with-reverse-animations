import styles from "../style/Components.module.css";
import Card from "./Card";
import { services } from "../data";

const ServiceSection = () => {
  return (
    <div className={styles.serviceContainerDiv}>
   
    <div className={styles.headerServiceContainer}>
        <h1 className={styles.headerDivTitle}>
        Lorem title
        </h1>
        <p  className={styles.headerDivText}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempore provident quibusdam ipsam repudiandae.
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
