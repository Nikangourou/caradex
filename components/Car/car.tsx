import Image from "next/image";
import styles from "./car.module.scss";

interface CarProps {
  name: string;
  image: string;
  configs: string[];
}

const Car = ({ name, image, configs }: CarProps) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={name} width={300} height={150} />
      <div className={styles.containerInfo}>
        <h2>{name}</h2>
        <div className={styles.containerConfig}>
          <select>
            {configs.map((config) => (
              <option key={config}>{config}</option>
            ))}
          </select>
          <button>Ajouter</button>
        </div>
      </div>
    </div>
  );
};

export default Car;
