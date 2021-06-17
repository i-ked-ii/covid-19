import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import axios from 'axios';

import Layout from '@/components/containers/Layout';
import styles from '../styles/Home.module.css';
import {SectionHero, SectionCountries, SectionCounter} from '@/components/views'


const Home = () => {
  const [countries, setCountries] = useState('');
  const [data, setData] = useState([]);
  const [dataLastChecked, setDataLastChecked] = useState('');
  const [covid19Stats, setCovid19Stats] = useState([]);
  const [isSearchable, setIsSearchable] = useState(null);

  useEffect(() => {
    getCountry();
  }, [setCountries]);

  const getCountry = async () => {
    const headers = {
      'x-rapidapi-key': process.env.RAPID_API_KEY,
      'x-rapidapi-host': process.env.RAPID_API_HOST,
    }
    
    await axios.get(`${process.env.APP_API_HOST}/countries`, {
        headers: headers
      })
    .then((res) => {
      const obj = res.data.response.map((item, index) => ({ id: index+1, label: item, value: item }))
      setCountries(obj);
    })
    .catch((err) => console.log('err', err));
  }

  const toggleSearchable = (search) => {
    setIsSearchable(search)
    getCovidCountry(search.value)
  }

  const getCovidCountry = async (country) => {
    const headers = {
      'x-rapidapi-key': process.env.RAPID_API_KEY,
      'x-rapidapi-host': process.env.RAPID_API_CORONAVIRUS_STATISTICS,
    }
    
    await axios.get(`${process.env.APP_API_HOST_CORONAVIRUS_STATISTICS}/v1/stats?country=${country}`, {
      headers: headers
    })
    .then((res) => {
      setData(res.data.data.covid19Stats);
      setDataLastChecked(res.data.data.lastChecked)
    })
    .catch((err) => console.log('err', err));

    const headerscovid = {
      'x-rapidapi-key': process.env.RAPID_API_KEY,
      'x-rapidapi-host': process.env.RAPID_API_HOST,
    }
    await axios.get(`${process.env.APP_API_HOST}/statistics?country=${country}`, {
      headers: headerscovid
    })
    .then((res) => {
      setCovid19Stats(res.data.response)
    })
    .catch((err) => console.log('err', err));
  };

  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>COVID-19 Coronavirus Statistics</title>
        <meta name="description" content="COVID-19 Coronavirus Statistics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <SectionHero />
        <SectionCountries
          isSearchable={isSearchable}
          onSearchable={toggleSearchable}
          countries={countries}
        />
        <SectionCounter
          isSearchable={isSearchable}
          lastChecked={dataLastChecked}
          data={data}
          covid19Stats={covid19Stats}
        />
      </main>
    </div>
    </Layout>
  )
}

export default Home;
