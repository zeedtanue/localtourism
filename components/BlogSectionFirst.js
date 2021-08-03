import moment from 'moment'
import Link from 'next/link'
import React from 'react'
import ShortContent from './Blog/ShortContent'

const BlogSectionFirst = ({data}) => {
    return (
        <div>

            {data.slice(0,1).map(item=>
            
            <section className="hero ">
                <a href={`/blogs/${item._id}/${item.title}`}>

                <div className="hero-body">
                <div className="container">
                
                    <div className="columns">
                    <div className="column is-8 is-offset-2">
                        <figure className="image is-16by9">
                        <img src={item.article_image} alt=""/>
                        </figure>
                    </div>
                    </div>
                    
                        <section className="section">
                        <div className="columns">
                            <div className="column is-8 is-offset-2">
                            <div className="content is-medium">
                                <h2 className="subtitle is-4"> {moment(item.published).format("MMMM DD, YYYY")} </h2>
                                <h1 className="title"> {item.title} </h1>
                                <p>
                                    <ShortContent item={item}/>
                                </p>
                            </div>
                            </div>
                        </div>
                        </section>
                        

                        
                    

                    <div className="is-divider"></div>

                    


                </div>
                </div>
                </a>
            </section>
                                    )}




        </div>
    )
}

export default BlogSectionFirst
