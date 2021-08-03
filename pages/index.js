import React, {useState,useEffect} from 'react'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import axios from 'axios'
import BlogCarousel from '../components/BlogCarousel'
import BlogSectionFirst from '../components/BlogSectionFirst'
import BlogSectionSecond from '../components/BlogSectionSecond'

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

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">Let's Go!</a>
        </h1>

        <p className={styles.description}>
          Encouraging Local Tourism
        </p>


      <BlogSectionFirst data={allData}/>

      <section class="hero ">
    <div class="hero-body">
      <div class="container">


      <BlogSectionSecond data={allData} />
      <BlogSectionSecond data={allData}/>
      </div>
    </div>
  </section>


  
  
      </main>
    </div>
  )
}
