import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Car from "../components/Car/car";
import Filter from "../components/Filter/filter";

const Home: NextPage = () => {
  const cars = [
    {
      id: 1,
      name: "Citroen Xantia",
      image: "https://source.unsplash.com/random/300x150/?car,xantia,citroen",
      configs: ["2.0L Diesel", "1.8L Petrol"],
    },
    {
      id: 2,
      name: "Toyota Camry",
      image: "https://source.unsplash.com/random/300x150/?car,camry,toyota",
      configs: ["2.5L Hybrid", "2.0L Petrol"],
    },
    {
      id: 3,
      name: "Ford Mustang",
      image: "https://source.unsplash.com/random/300x150/?car,mustang,ford",
      configs: ["5.0L V8", "2.3L EcoBoost"],
    },
    {
      id: 4,
      name: "Honda Civic",
      image: "https://source.unsplash.com/random/300x150/?car,civic,honda",
      configs: ["1.5L Turbo", "2.0L Naturally Aspirated"],
    },
    {
      id: 5,
      name: "Volkswagen Golf",
      image: "https://source.unsplash.com/random/300x150/?car,golf,volkswagen",
      configs: ["1.4L TSI", "2.0L TDI"],
    },
    {
      id: 6,
      name: "BMW 3 Series",
      image: "https://source.unsplash.com/random/300x150/?car,3series,bmw",
      configs: ["2.0L TwinPower Turbo", "3.0L Inline-6"],
    },
    {
      id: 7,
      name: "Mercedes-Benz C-Class",
      image: "https://source.unsplash.com/random/300x150/?car,cclass,mercedes",
      configs: ["2.0L Turbo", "3.0L V6"],
    },
    {
      id: 8,
      name: "Audi A4",
      image: "https://source.unsplash.com/random/300x150/?car,a4,audi",
      configs: ["2.0L TFSI", "3.0L V6"],
    },
    {
      id: 9,
      name: "Nissan Altima",
      image: "https://source.unsplash.com/random/300x150/?car,altima,nissan",
      configs: ["2.5L 4-Cylinder", "3.5L V6"],
    },
    {
      id: 10,
      name: "Chevrolet Corvette",
      image:
        "https://source.unsplash.com/random/300x150/?car,corvette,chevrolet",
      configs: ["6.2L V8", "6.2L V8 Supercharged"],
    },
    {
      id: 2,
      name: "Toyota Camry",
      image: "https://source.unsplash.com/random/300x150/?car,camry,toyota",
      configs: ["2.5L Hybrid", "2.0L Petrol"],
    },
    {
      id: 3,
      name: "Ford Mustang",
      image: "https://source.unsplash.com/random/300x150/?car,mustang,ford",
      configs: ["5.0L V8", "2.3L EcoBoost"],
    },
    {
      id: 4,
      name: "Honda Civic",
      image: "https://source.unsplash.com/random/300x150/?car,civic,honda",
      configs: ["1.5L Turbo", "2.0L Naturally Aspirated"],
    },
    {
      id: 5,
      name: "Volkswagen Golf",
      image: "https://source.unsplash.com/random/300x150/?car,golf,volkswagen",
      configs: ["1.4L TSI", "2.0L TDI"],
    },
    {
      id: 6,
      name: "BMW 3 Series",
      image: "https://source.unsplash.com/random/300x150/?car,3series,bmw",
      configs: ["2.0L TwinPower Turbo", "3.0L Inline-6"],
    },
    {
      id: 7,
      name: "Mercedes-Benz C-Class",
      image: "https://source.unsplash.com/random/300x150/?car,cclass,mercedes",
      configs: ["2.0L Turbo", "3.0L V6"],
    },
    {
      id: 8,
      name: "Audi A4",
      image: "https://source.unsplash.com/random/300x150/?car,a4,audi",
      configs: ["2.0L TFSI", "3.0L V6"],
    },
    {
      id: 9,
      name: "Nissan Altima",
      image: "https://source.unsplash.com/random/300x150/?car,altima,nissan",
      configs: ["2.5L 4-Cylinder", "3.5L V6"],
    },
    {
      id: 10,
      name: "Chevrolet Corvette",
      image:
        "https://source.unsplash.com/random/300x150/?car,corvette,chevrolet",
      configs: ["6.2L V8", "6.2L V8 Supercharged"],
    },
    {
      id: 11,
      name: "Lamborghini Aventador",
      image:
        "https://source.unsplash.com/random/300x150/?car,aventador,lamborghini",
      configs: ["6.5L V12", "6.5L V12 Supercharged"],
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Caradex</title>
        <meta name="description" content="Caradex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Filter />
        <div className={styles.grid}>
          {cars.map((car) => (
            <Car
              key={car.id}
              name={car.name}
              image={car.image}
              configs={car.configs}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
