import React, {useState,useEffect} from 'react'
import Head from 'next/head'

import styles from '../styles/Home.module.css'
import axios from 'axios'
import BlogCarousel from '../components/BlogCarousel'
import SlickCarousel from '../components/SlickCarousel'
import { data } from 'browserslist'

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
          Welcome to <a href="https://nextjs.org">Let's Go!</a>
        </h1>

        <p className={styles.description}>
          Encouraging Local Tourism
        </p>


        <section class="hero ">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <figure class="image is-16by9">
              <img src={allData[0].article_image} alt=""/>
            </figure>
          </div>
        </div>

        <section class="section">
          <div class="columns">
            <div class="column is-8 is-offset-2">
              <div class="content is-medium">
                <h2 class="subtitle is-4">December 25, 2018</h2>
                <h1 class="title">Getting Started</h1>
                <p>This is a starter template for creating a beautiful, customizable blog with minimal
                  effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                  configuration settings can be found in config</p>
              </div>
            </div>
          </div>
        </section>

        <div class="is-divider"></div>

        <section class="section">
          <div class="columns">
            <div class="column is-8 is-offset-2">
              <div class="content is-medium">
                <h2 class="subtitle is-4">December 25, 2018</h2>
                <h1 class="title">Getting Started</h1>
                <p>This is a starter template for creating a beautiful, customizable blog with minimal
                  effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                  configuration settings can be found in config</p>
              </div>
            </div>
          </div>
        </section>


      </div>
    </div>
  </section>








  
  <section class="hero ">
    <div class="hero-body">
      <div class="container">

        <section class="section">
          <div class="columns is-variable is-8">
            <div class="column is-5 is-offset-1 ">
              <div class="content is-medium">
                <h2 class="subtitle is-5 has-text-grey">December 23, 2018</h2>
                <h1 class="title has-text-black is-3">Custom 404 Pages</h1>
                <p class="has-text-dark">This starter template includes a custom 404 Not Found error page, located at
                  /source/404.blade.php.
                  To preview the 404 page, you can visit /404 in your browser. Depending...</p>
              </div>
            </div>
            <div class="column is-5">
              <div class="content is-medium">
                <h2 class="subtitle is-5 has-text-grey">December 25, 2018</h2>
                <h1 class="title has-text-black is-3">Fuse Search</h1>
                <p class="has-text-dark">To provide fast, local search of your blog, this starter template comes with a
                  pre-built Vue.js
                  component that uses Fuse.js. Fuse.js is a "lightweight fuzzy-search library with no...</p>
              </div>
            </div>
          </div>
        </section>

        <div class="is-divider"></div>

        <section class="section">
          <div class="columns is-variable is-8">
            <div class="column is-5 is-offset-1">
              <div class="content is-medium">
                <h2 class="subtitle is-5 has-text-grey">December 25, 2018</h2>
                <h1 class="title has-text-black is-3">Getting Started</h1>
                <p class="has-text-dark">This is a starter template for creating a beautiful, customizable blog with
                  minimal
                  effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                  configuration settings can be found in config</p>
              </div>
            </div>
            <div class="column is-5">
              <div class="content is-medium">
                <h2 class="subtitle is-5 has-text-grey">December 25, 2018</h2>
                <h1 class="title has-text-black is-3">Getting Started</h1>
                <p class="has-text-dark">This is a starter template for creating a beautiful, customizable blog with
                  minimal
                  effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                  configuration settings can be found in config</p>
              </div>
            </div>
          </div>
        </section>


      </div>
    </div>
  </section>


      </main>
    </div>
  )
}
