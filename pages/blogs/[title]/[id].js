import React, {useEffect,useState} from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import HeroSection from '../../../components/HeroSection'
import axios from 'axios'
import moment from 'moment'
import styles from '../../../styles/Blogs.module.css'
import RecommendationCard from '../../../components/Blog/RecommendationCard'
import Comment from '../../../components/Comment'
const BlogsDetails = ({content,article_image,title,author,permalink,published, recomendations}) => {

    const {query} =useRouter()
    const { id } = query;
    const [recom,setRecom]= useState([])

    
    const readData= async()=>{

        try {
           
            const recomForm= {
                method:'GET',
                url: `/api/blogs/recommendation/${id}`
            }
            const recomData = await axios(recomForm)
            setRecom([...recom,...recomData.data])
        console.log(recom)

        } catch (error) {
            console.log(error)
        }



    }

    useEffect(()=>{
        readData()
    },[query])

    return (
        <>

        
            <Head>
                <title>{title}- Let's Go MY!</title>
                <meta name="description" content="Malaysian Local Travel Tourism Lifestyle Food" />

                <meta property="og:type" content="website" />
                <meta property="fb:app_id" content="your fb app id" />
                <meta
                property="og:title"
                content={title}
                />
                <meta name="twitter:card" content="summary" />
                <meta
                property="og:description"
                content={content}
                />
                <meta property="og:image" content={article_image} />

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
                                <p class="title article-title"> {title} </p>
                                <div class="tags has-addons level-item">
                                    {author.map(item=>
                                        <span key={item._id} class="tag is-rounded is-info"> {item.name}</span>
                                        
                                        )}
                                    <span class="tag is-rounded">{moment(published).format('ll')}</span>
                                </div>
                            </div>
                        </div>
                        <div  class="content article-body">
                        <figure className="image is-16by9">
                            <img src={article_image} alt=""/>
                        </figure>
                        <div dangerouslySetInnerHTML={{__html: content}} />
                        <p>Original Source:<a href={permalink}> {permalink}</a></p>
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
        
        </>

    )
}

export default BlogsDetails
export const getServerSideProps = async (context) => {
    const {id} = context.query
    let content = null;
    let article_image=null;
    let title=null;
    let author=null;
    let permalink=null;
    let published=null;



    await fetch(`https://letsgomy.herokuapp.com/api/blogs/single/${id}`)
      .then((response) => response.json())
      .then((json) =>{
        content=json.content
        article_image=json.article_image
        title=json.title
        author=json.author
        permalink=json.permalink
        published=json.published
      })
  
    return {
      props: {
        content,article_image,title,author,permalink,published,
      },
    };
  };
