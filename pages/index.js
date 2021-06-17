import React, { useState, useEffect, Fragment } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import dynamic from 'next/dynamic';
import moment from 'moment';

import { httpClient } from '../utils/HttpClient';
import Layout from '@/components/containers/Layout';
import styles from '../styles/Home.module.css';
import {SectionHero, SectionCounter} from 'components/views'

const SelectNoSSR = dynamic(() => import("react-select"), { ssr: false });


const Home = () => {
  const [countries, setCountries] = useState('');
  const [data, setData] = useState([]);
  const [dataLastChecked, setDataLastChecked] = useState('');
  const [covid19Stats, setCovid19Stats] = useState([]);
  const [isSearchable, setIsSearchable] = useState(null);
  const [page, setPage] = useState(1);
  const [dataTable, setDataTable] = useState([]);

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
      // console.log(obj);
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
      console.log('res 1', res);
      setData(res.data.data.covid19Stats);
      setDataLastChecked(res.data.data.lastChecked)
      // setData(res.data.response)
    })
    .catch((err) => console.log('err', err));

    const headerscovid = {
      'x-rapidapi-key': process.env.RAPID_API_KEY,
      'x-rapidapi-host': process.env.RAPID_API_HOST,
    }
    await axios.get(`${process.env.APP_API_HOST_CORONAVIRUS_STATISTICS}/statistics?country=${country}`, {
      headers: headerscovid
    })
    .then((res) => {
      console.log('res 2', res);
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
        <div className="d-inline-block">
          <h2 className="mb-4 d-inline-block">เลือกประเทศเพื่อดูสถานการณ์ COVID-19</h2>
          <SelectNoSSR
            className="d-inline-block"
            styles={{width: 200}}
            instanceId="instance-id"
            value={isSearchable}
            onChange={toggleSearchable}
            options={countries}
          />
        </div>
        
        {isSearchable !== null && (<div className="about-info">
          <h2>สถานการณ์ในประเทศ: {isSearchable.label}</h2>
        </div>)
        }
        <section className="counter-area">
            <div className="container">
            {
              data.map((item) => (
                <Fragment key={item.country}>
                  <SectionCounter
                    key={item.country}
                    country={item.country}
                    cases={item.confirmed}
                    recovered={item.recovered}
                    deaths={item.deaths}
                    lastUpdate={moment(dataLastChecked).format('Do MMMM YYYY, h:mm:ss a')}
                    text="***ค่าของ api COVID-19 Coronavirus Statistics มีค่าใกล้เคียงกับค่าจาก WHO"
                  />
                  {/* ผู้ป่วยยืนยัน (คน)
                  สะสม {item.confirmed}
                  รายใหม่
                  3,129
                  ดีขึ้น
                  {item.recovered}
                  เสียชีวิต
                  {item.deaths} */}
                </Fragment>
              ))
            }
            <div className="mt-5">
            {
              covid19Stats.map((item) => (
                <Fragment key={item.country}>
                  <SectionCounter
                    cases={item.cases.total}
                    newcases={item.cases.new}
                    recovered={item.cases.recovered}
                    deaths={item.deaths.total}
                    lastUpdate={moment(item.time).format('Do MMMM YYYY, h:mm:ss a')}
                    text="***ค่าของ api COVID-19 มีค่าใกล้เคียงกับค่าจากกรมควบคุมโรค"
                  />
                  {/* สะสม {item.cases.total}207,724
                  รายใหม่
                  3,129{item.cases.new}
                  ดีขึ้น {item.cases.recovered}
                  เสียชีวิต
                  1,555{item.deaths.total} */}
                </Fragment>
              ))
            }
            </div>
          </div>
        </section>
      </main>
    </div>
    </Layout>
  )
}

export default Home;
