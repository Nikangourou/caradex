import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Car from "../components/Car/car";
import Filter from "../components/Filter/filter";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabase";

const Home: NextPage = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const getCars = async () => {
      let { data: car, error } = await supabase
        .from("car")
        .select("*")
        .range(0, 9);
      if (error) console.log("error", error);
      else setCars(car);
    };
    getCars();
  }, [supabase]);

  console.log(supabase);

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
              name={car.model}
              image={`https://source.unsplash.com/random/300x150/?car,xantia,citroen`}
              configs={["2.0L Diesel", "1.8L Petrol"]}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
