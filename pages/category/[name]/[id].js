import React from 'react'
import {useRouter} from 'next/router'
import Head from 'next/head'
import styles from '../../../styles/Blogs.module.css'
import BlogsList from '../../../components/BlogsList'
import HeroSection from '../../../components/HeroSection'


export default function Blogs( {categoryBlogs} ) {
    const {query} =useRouter()

    const { id, name } = query;



    return (
        <div>
            <Head>
                <title>{name}- Let's Go MY!</title>
                <meta name="description" content="Malaysian Local Travel Tourism Lifestyle Food" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles}>
                <HeroSection title={`Welcome to Let's Go My | ${name}`} description="Encouraging Local Tourism"/>
                <BlogsList data={categoryBlogs}/>
            </main>

        </div>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.query;
    const res = await fetch(`https://letsgomy.herokuapp.com/api/blogs/${id}`);
    const categoryBlogs = await res.json();
  
    return { props: { categoryBlogs } };
  }