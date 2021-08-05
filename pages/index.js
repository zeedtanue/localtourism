import React, {useState,useEffect} from 'react'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import axios from 'axios'
import BlogSectionFirst from '../components/BlogSectionFirst'
import BlogSectionSecond from '../components/BlogSectionSecond'
import HeroSection from '../components/HeroSection'
import CovidCard from '../components/CovidCard'

export default function Home() {

  const [allData,setAllData] = useState([])
  const [carouselData, setCarouselData]= useState([])

  const readData = async()=>{
    const form= {
      method: 'GET',
      url: '/api/blogs'
    }
    const {data} = await axios(form)
    setAllData(data)
    setCarouselData(data.slice(0,5))
    console.log(allData)
  }

  useEffect(()=>{
    readData()
  },[])
  

  

  return (
    <div >
      <Head>
        <title>Let's Go MY</title>
        <meta name="description" content="Malaysian Local Travel Tourism Lifestyle Food" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main  className={styles.container}>
        <HeroSection title={`Welcome to Let's Go`} description="Encouraging local tourism"/>
      <CovidCard/>

        

      <BlogSectionFirst data={allData}/>

      <section class="hero ">
        <div className={styles.main}>
    <div class="hero-body">
      <div class="container">
        <div className={styles.title}>
        <h1 className="title article-title">Recently Added</h1>
        </div>

      <BlogSectionSecond data={allData} />
      <BlogSectionSecond data={allData}/>
      </div>
    </div>
    </div>
  </section>


  
  
      </main>
    </div>
  )
}
