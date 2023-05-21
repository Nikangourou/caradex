import styles from "./filter.module.scss";

const Filter = ({}) => {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="Rechercher" />
      <select>
        <option value="all">Marque</option>
        <option value="audi">Audi</option>
        <option value="bmw">BMW</option>
        <option value="citroen">Citroen</option>
        <option value="ford">Ford</option>
        <option value="honda">Honda</option>
        <option value="mercedes">Mercedes</option>
        <option value="nissan">Nissan</option>
        <option value="toyota">Toyota</option>
        <option value="volkswagen">Volkswagen</option>
      </select>
    </div>
  );
};

export default Filter;
