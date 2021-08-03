import React from 'react'

const ShortContent = ({item}) => {
    return (
        <>
            {item.content.slice(0,250)}... <a href={`/blogs/${item._id}/${item.title}`}>Continue Reading</a>
        </>
    )
}

export default ShortContent
