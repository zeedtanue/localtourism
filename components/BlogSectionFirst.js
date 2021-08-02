import moment from 'moment'
import React from 'react'

const BlogSectionFirst = ({data}) => {
    return (
        <div>
            {data.slice(0,1).map(item=>
            <section className="hero ">
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
                                {item.content.slice(0,250)}.. <a>Continue Reading</a>
                                </p>
                            </div>
                            </div>
                        </div>
                        </section>
                        

                        
                    

                    <div className="is-divider"></div>

                    


                </div>
                </div>
            </section>
                                    )}




        </div>
    )
}

export default BlogSectionFirst
