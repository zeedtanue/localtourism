import React from 'react'
import moment from 'moment'


const BlogSectionSecond = ({data, total}) => {
    const random= Math.floor(Math.random()*data.length)
    
    return (
        <div>

      <section class="section">
        <div class="columns is-variable is-8">
        {data.slice( random,random+2).map(item=>
          <div class="column is-5 is-offset-1 ">
            <div class="content is-medium">
              <h2 class="subtitle is-5 has-text-grey">{moment(item.published).format("MMMM DD, YYYY")}</h2>
              <h1 class="title has-text-black is-3">{item.title}</h1>
              <div class="has-text-dark"> {item.content.slice(0,250)} ...</div>
            </div>
          </div>
          
            )}
            </div>
          </section>
            

        


        </div>
    )
}

export default BlogSectionSecond
