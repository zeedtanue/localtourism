import React from 'react'

const ShortContent = ({item}) => {
    return (
        <div dangerouslySetInnerHTML={{__html:`${item.content.slice(0,120)}... <a href='/blogs/${item.title}/${item._id}/'>Continue Reading</a>`}}/>
        
        
    )
}

export default ShortContent
