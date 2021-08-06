import React, {useState,useEffect} from 'react'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import axios from 'axios'
import BlogSectionFirst from '../components/BlogSectionFirst'
import BlogSectionSecond from '../components/BlogSectionSecond'
import HeroSection from '../components/HeroSection'
import CovidCard from '../components/CovidCard'
import RecommendationCard from '../components/Blog/RecommendationCard'
import moment from 'moment'
import Loader from '../components/Loader'

export default function Home({firstTenBlogs}) {

  const [loading, setLoading]= useState(false)

  const readData = async()=>{
    

      const today = (moment(Date.now()).format('YYYY-MM-DD')) 

    const newBlogsForm={
        method: "GET",
        headers:
           {
               "Authorization": "Basic emVlZHRhbnVlQGdtYWlsLmNvbTp0YW16ZWVkNTUyMQ==",
                'X-Requested-With': 'XMLHttpRequest',

           },
        url:`https://gentle-springs-11097.herokuapp.com/https://www.feedspot.com/v1/entries.json?feed_entry_created=${today}`
    
    }
    const newBlogs = await axios(newBlogsForm)
    let newData= newBlogs.data
    const postBlog={
      method:"POST",
      url:"/api/blogs/",
      data: {newData}
    }
    await axios(postBlog)




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
        {loading && <Loader/>}
        
        <div>

        <HeroSection title={`Welcome to Let's Go`} description="Encouraging local tourism"/>
      <CovidCard/>

        <div>
        

          <BlogSectionFirst data={firstTenBlogs}/>

            <div className={styles.main}>
              <div class="container">
                <div className={styles.title}>
                  <h1 className="title article-title">Recently Added</h1>
                </div>
          
                <RecommendationCard data={firstTenBlogs.slice(1,4)}/>
                <RecommendationCard data={firstTenBlogs.slice(4,7)}/>

              </div>
              </div>

          </div>
  
          </div>
      </main>
    </div>
  )
}


export const getServerSideProps = async () => {
  let firstTenBlogs = []
  
  await fetch('https://letsgomy.herokuapp.com/api/blogs')
    .then((response) => response.json())
    .then((json) =>{
      json.forEach(element => {
        firstTenBlogs.push(element)
      });
    })

  return {
    props: {
      firstTenBlogs,
    },
  };
};