import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Select from 'react-select';

import { httpClient } from '../utils/HttpClient';
import styles from '../styles/Home.module.css';

const Home = (props) => {

  const [countries, setCountries] = useState({label:"Afghanistan", value: "Afghanistan"});
  const [data, setData] = useState([]);
  const [isSearchable, setIsSearchable] = useState(countries);

  useEffect(() => {
    getCountry();
  }, [setCountries]);

  const getCountry = async () => {
    await httpClient.get(`/countries`)
    .then((res) => {
      console.log('res', res.data)
      const obj = Object.keys(res.data.response).map((val, key) => {
        console.log(key, val)
        ({ id:key, label: key, value: key })
      });
      
      setCountries(obj);
    })
    .catch((err) => console.log('err', err));
  }

  const toggleSearchable = (search) => {
    setIsSearchable(search)
  }

  const getCovidCountry = async (country) => {
    getCovidCountry(countries);
    await httpClient.get(`/statistics?country=${country}`)
    .then((res) => {
      console.log('res', res);
      setData(res)
    })
    .catch((err) => console.log('err', err));
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        {console.log('countries', countries)}
        {/* <Select
          value={isSearchable}
          onChange={toggleSearchable}
          options={countries}
        /> */}
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home;
