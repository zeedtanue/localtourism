import React,{useEffect,useState,useCallback} from 'react'
import axios from 'axios'
import styles from '../styles/Comment.module.css'
import { async } from 'regenerator-runtime'

const Comment = ({id}) => {
    const [comments,setComments]= useState([])
    const [postComment, setPostComment]= useState({
        email:"",
        comment:""
    })


    const readData =async ()=>{
        const commentReq={
            method:'GET',
            url: `/api/blogs/single/${id}/comments`
        }
        
        const {data} = await axios(commentReq)
        setComments([...comments,...data])
    }



    const handleOnChange = useCallback(
        ({target})=>{
            const {name, value} = target;
            setPostComment({
                ...postComment,
                [name]:value
            })
        },
        [postComment]
    )
    

    const onSubmitActionm=async (event)=>{
        event.preventDefault()
        setComments([...comments,postComment])
        const form= document.getElementById("commentForm")
        form.reset()
        console.log(postComment)

        
    }

    useEffect(()=>{
        readData()
    },[id])

    return (
        <div>
              <h6>Comments({comments.length})</h6>
                        <div>
                            {comments.map(item=>
                                <div className={styles.commentContainer}>
                                    <p>{item.email} said:</p>
                                    <p className={styles.comment}>{item.comment} </p>
                                </div>
                            )}
                        </div>
                        <form id="commentForm" onSubmit={onSubmitActionm} >
                        <input
                        name="email"
                        type="text"
                        className="input is-rounded"
                        placeholder='email'
                        onChange={handleOnChange}
                        
                        />
                        <input
                        name="comment"
                        type="text"
                        className="input is-rounded"
                        placeholder='comment'
                        onChange={handleOnChange}
                        
                        />
                        <input type="submit" />
                        
                        </form>  
        </div>
    )
}

export default Comment
