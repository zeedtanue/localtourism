import React, {useEffect,useState} from 'react'
import Head from 'next/head'

import {useRouter} from 'next/router'
import HeroSection from '../../../components/HeroSection'
import axios from 'axios'
import moment from 'moment'
const BlogsDetails = () => {

    const {query} =useRouter()
    const { id, title } = query;

    const [blogContent,setBlogContent] = useState(
        {
            title:"",
            author:[],
            article_image:"",
            permalink:"",
            content:"",
            published:""
        }
        )
    
    const readData= async()=>{
        const form= {
            method:'GET',
            url: `/api/blogs/single/${id}`
        }
        const {data}= await axios(form)

        setBlogContent({...blogContent, 
            title:data.title,
            author:data.author,
            article_image:data.article_image,
            permalink:data.permalink,
            content:data.content,
            published:data.published
        })
        console.log(blogContent)

    }

    useEffect(()=>{
        readData()
    },[id])




    return (

        <div>
            <Head>
                <title>{title}- Let's Go MY!</title>
                <meta name="description" content="Malaysian Local Travel Tourism Lifestyle Food" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main>
            <HeroSection title="Welcome to Let's Go MY" description="Encouraging local tourism"/>


    <div class="container">
        <section class="articles">
            <div class="column is-8 is-offset-2">
                <div class="card article">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content has-text-centered">
                                <p class="title article-title"> {blogContent.title} </p>
                                <div class="tags has-addons level-item">
                                    {blogContent.author.map(item=>
                                        <span class="tag is-rounded is-info"> {item.name}</span>
                                        
                                        )}
                                    <span class="tag is-rounded">{moment(blogContent.published).format('ll')}</span>
                                </div>
                            </div>
                        </div>
                        <div  class="content article-body">
                        <figure className="image is-16by9">
                            <img src={blogContent.article_image} alt=""/>
                        </figure>
                        <div dangerouslySetInnerHTML={{__html: blogContent.content}} />
                        <p>Original Source:<a href={blogContent.permalink}> {blogContent.permalink}</a></p>
                        </div>
                    </div>
                </div>
        </div>
        </section>
        </div>
        </main>
        </div>

    )
}

export default BlogsDetails
