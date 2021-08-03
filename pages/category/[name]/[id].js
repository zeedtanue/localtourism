import React, {useEffect,useState} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Head from 'next/head'
import styles from '../../../styles/Blogs.module.css'
import BlogsList from '../../../components/BlogsList'
import axios from 'axios'
import HeroSection from '../../../components/HeroSection'


export default function Blogs() {
    const {query} =useRouter()

    const { id, name } = query;

    const [blogs, setBlogs] = useState([])
    const readData = async()=>{
        const form = {
            method: "GET",
            url: `/api/blogs/${id}`
        }
        const {data} = await axios(form)
        setBlogs(data)

    }

    useEffect(()=>{
        readData()
        console.log(blogs)
    },[id])



    return (
        <div>
            <Head>
                <title>{name}- Let's Go MY!</title>
                <meta name="description" content="Malaysian Local Travel Tourism Lifestyle Food" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles}>
                <HeroSection title={`Welcome to Let's Go My|| ${name}`} description="Encouraging Local Tourism"/>
                <BlogsList data={blogs}/>
            </main>

        </div>
    )
}
