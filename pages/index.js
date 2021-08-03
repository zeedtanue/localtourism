import React, {useState,useEffect} from 'react'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import axios from 'axios'
import BlogCarousel from '../components/BlogCarousel'
import BlogSectionFirst from '../components/BlogSectionFirst'
import BlogSectionSecond from '../components/BlogSectionSecond'
import HeroSection from '../components/HeroSection'

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

      <main >
        <HeroSection title={`Welcome to Let's Go MY`} description="Encouraging local tourism"/>
        


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
