import React from 'react'

const ShortContent = ({item}) => {
    return (
        <div dangerouslySetInnerHTML={{__html:`${item.content.slice(0,120)}... <a href='/blogs/${item._id}/${item.title}'>Continue Reading</a>`}}/>
        
        
    )
}

export default ShortContent
