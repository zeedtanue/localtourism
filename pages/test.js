import React,{useState,useEffect} from 'react'
import CovidCard from '../components/CovidCard'
import axios from 'axios'

const test = () => {
    const readData= async()=>{
        const getForm={
            method: "GET",
            headers:
               {
                   "Authorization": "Basic emVlZHRhbnVlQGdtYWlsLmNvbTp0YW16ZWVkNTUyMQ==",
                    'X-Requested-With': 'XMLHttpRequest',

               },
            url:"https://gentle-springs-11097.herokuapp.com/https://www.feedspot.com/v1/entries.json?folder_id=3586643"
        }
        const getBlogs=await axios(getForm)
        
        let data=getBlogs.data.data
        //passing the data as an array 
        const postBlog={
            method:"POST",
            url:"/api/blogs/3586643",
            data: {data}
        }
        const newRes= await axios(postBlog)
        console.log(newRes.data)

    }
    // const readData=async()=>{
    //     const authForm={
    //         method:'POST',
    //         headers:
    //         {
    //             "Authorization": "Basic emVlZHRhbnVlQGdtYWlsLmNvbTp0YW16ZWVkNTUyMQ=="
    //         },
    //         url:"https://www.feedspot.com/v1/auth/accesstoken.json"

    //     }
    //     const {data}= axios(authForm)
    //     setResponse(data)
    //}
    useEffect(()=>{
        readData()

    },[])
    return (
        <div>
            <CovidCard/>
            <div>
                <p>test</p>
            </div>
        </div>
    )
}

export default test
