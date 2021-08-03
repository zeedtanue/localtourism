import React from 'react'
import moment from 'moment'
import ShortContent from './ShortContent'
const RecommendationCard = ({data}) => {
    return (
        <div>
             <section class="section">
                <div class="columns is-variable is-8">
                {data.map(item=>
                <div class="column is-5 is-offset-1 ">
                    <div class="content is-medium">
                    <h2 class="subtitle is-5 has-text-grey">{moment(item.published).format("MMMM DD, YYYY")}</h2>
                    <a href={`/blogs/${item._id}/`}> <h1 class="title has-text-black is-3">{item.title}</h1></a>
                    <ShortContent item={item}/>
                    
                    </div>
                </div>
                
                    )}
                    </div>
                </section>
            
        </div>
    )
}

export default RecommendationCard
