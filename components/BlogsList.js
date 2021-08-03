import moment from 'moment'
import ShortContent from './Blog/ShortContent'
const BlogsList = ({data}) => {
    return (
        <div>
            {data.map(item=>
                <section className="hero ">
                <div className="hero-body">
                    <div className="container">


                    <section className="section">
                        <div className="columns">
                            <div className="column is-8 is-offset-2">
                            <div className="content is-medium">
                                <h2 className="subtitle is-4"> {moment(item.published).format("MMMM DD, YYYY")} </h2>
                                <h1 className="title"> {item.title} </h1>
                                <ShortContent item={item}/>
                            </div>
                            </div>
                        </div>
                        </section>

                    </div>
                </div>
                </section>
                )}
             
        </div>
    )
}

export default BlogsList
