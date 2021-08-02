import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const BlogCarousel = ({data}) => { 
  return (
      <div style={{marginLeft:10,marginRight:10}}>
    <Carousel autoPlay>
        {data.map(item=>
            <div>
                <img src={item.article_image}/>
                <p className="legend"> {item.title} </p>
            </div>
            )}
        <div>
            <img height="200" width="200" alt="" src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
            <p className="legend">Legend 2</p>
        </div>
        <div>
            <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
            <p className="legend">Legend 3</p>
        </div>
        </Carousel>
        </div>
  );
}

export default BlogCarousel
