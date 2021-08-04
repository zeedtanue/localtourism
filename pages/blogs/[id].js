import React, {useEffect,useState} from 'react'
import Head from 'next/head'
import Error from 'next/error'
import {useRouter} from 'next/router'
import HeroSection from '../../components/HeroSection'
import axios from 'axios'
import moment from 'moment'
import styles from '../../styles/Blogs.module.css'
import BlogSectionSecond from '../../components/BlogSectionSecond'
import RecommendationCard from '../../components/Blog/RecommendationCard'
import Comment from '../../components/Comment'
const BlogsDetails = () => {

    const {query} =useRouter()
    const { id } = query;
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(false)
    const [recom,setRecom]= useState([])

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

        try {
            setLoading(true)
            const form= {
                method:'GET',
                url: `/api/blogs/single/${id}`
            }
            const {data}= await axios(form)
            const recomForm= {
                method:'GET',
                url: `/api/blogs/recommendation/${id}`
            }
            const recomData = await axios(recomForm)
            setRecom([...recom,...recomData.data])
        console.log(recom)

            setBlogContent({...blogContent, 
                title:data.title,
                author:data.author,
                article_image:data.article_image,
                permalink:data.permalink,
                content:data.content,
                published:data.published
            })
            setLoading(false)

            
        } catch (error) {
            console.log(error.response.data)
            setError(true)
            
        }



    }

    useEffect(()=>{
        readData()
    },[query])




    return (
        <>
            {error && <Error/>}

        <div>
            <Head>
                <title>{blogContent.title}- Let's Go MY!</title>
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
                                        <span key={item._id} class="tag is-rounded is-info"> {item.name}</span>
                                        
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
                        <Comment id={id} />
                    </div>
                </div>
        </div>
        </section>
        </div>

        <div className={styles.recomContainer} >
            <h1 className="title article-title">Similar Like This</h1>
            <RecommendationCard data={recom}/>
            
        </div>
        </main>
        </div>
        </>

    )
}

export default BlogsDetails
