import React,{useEffect,useState,useCallback} from 'react'
import axios from 'axios'
import styles from '../styles/Comment.module.css'
import validation from './validation'

const Comment = ({id}) => {
    const [comments,setComments]= useState([])
    const [postComment, setPostComment]= useState({
        email:"",
        comment:""
    })
    const [emailError,setEmailerror]= useState(false)
    const [commentError,setCommentError]= useState(false)
    const [errors,setErrors] = useState({});


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
    
    const saveFunction=async()=>{
        const postDataForm={
            method:'POST',
            url: `/api/blogs/single/${id}/comments`,
            data: postComment

        }
        const retunPost = await axios(postDataForm)
        console.log(retunPost)
    } 
    const onSubmitActionm=async (event)=>{
        event.preventDefault()
        setErrors(validation(postComment))
        // if(postComment.email==="") setEmailerror(true)
        // else if(postComment.comment==="") setCommentError(true)
        // else{
        if(!errors.email && !errors.comment){
            
            const form= document.getElementById("commentForm")
            form.reset()
            setPostComment({email:"",comment:""})
            saveFunction()
            setComments([...comments,postComment])

        }
        // }
        

        
    }

    useEffect(()=>{
        readData()
    },[id])

    return (
        <div>
              <h6>Comments({comments.length})</h6>
                        <div >
                            {comments.map(item=>
                                <div className={styles.commentContainer}>
                                    <div className='card'>
                                    <span className='tag is-rounded is-primary'>{item.email}</span>

                                        <div className='card-content'> 
                                         <p className={styles.comment}>{item.comment} </p>
                                         </div>
                                    </div>
                                </div>
                            )}
                        </div>






                    <div className="card">
                        <br/>

                        <form id="commentForm" className={styles.mainComment} onSubmit={onSubmitActionm} >
                            <div className={styles.commentSectionPost}>
                                <div class="control ">
                                    <input
                                    name="email"
                                    type="text"
                                    className=" email input is-info "
                                    placeholder='email / name'
                                    onChange={handleOnChange}
                                    
                                    />
                                </div>
                            
                            {errors.email && <p className="help is-danger">email or name is required</p>}
                                <br/>
                                <div class="control ">

                                    <textarea
                                    name="comment"
                                    type="text"
                                    className="textarea input is-info "
                                    placeholder='comment'
                                    onChange={handleOnChange}                        
                                    />
                                </div>
                            {errors.comment && <p className="help is-danger">comment is required</p>}
                                <br/>
                                <button type="submit "className="button is-info"  >Comment</button>
                                </div>
                            </form>  
                            <br/>
                            </div>
        </div>
    )
}

export default Comment
