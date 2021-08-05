import React from 'react'
import moment from 'moment'
import ShortContent from './Blog/ShortContent'


const BlogSectionSecond = ({data, total}) => {
    const random= Math.floor(Math.random()*data.length-3)
    
    return (
        <div>

      <section class="section">
        <div class="columns is-variable is-8">
        {data.slice( random,random+3).map(item=>
          <div class="card column post is-4">
            <article class="columns is-multiline">
              <div class="column is-12 post-img">
                <img src={item.article_image} alt="Featured Image"/>
              </div>
              <div class="column is-12 featured-content ">
              <h6 className="subtitle">{moment(item.published).format('ll')}</h6>

                <h1 class="title post-title">{item.title}</h1>
                <ShortContent item={item} />
                <br/>
                <a href={`/blogs/${item.title}/${item._id}`} class="button is-info">Read More</a>
              </div>
            </article>
          </div>
          )}
            </div>
          </section>
            
          
        </div>
    )
}

export default BlogSectionSecond
