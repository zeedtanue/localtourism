import React,{useState,useEffect} from 'react'
import {useRouter} from 'next/router'
import HeroSection from '../../components/HeroSection';
import styles from '../../styles/Search.module.css'
import axios from 'axios';
import BlogsList from '../../components/BlogsList';
export default function SearchPage (){
    const {query} =useRouter()
    const { searchTerm } = query;

    const [searchResult, setSearchResult] = useState([])

    const readData=async ()=>{
        const form= {
            method: 'GET',
            url: `/api/blogs/search/${searchTerm}`
        }
        const {data}=await axios(form)
        setSearchResult(data)
    }
    useEffect(()=>{
        readData()
    },[searchTerm])

    return (
        <div>
            <HeroSection title={`Welcome to Let's Go | Search `}/>
            <div className={styles.title}>
                <h3 className="title article-title">Showing result of: {searchTerm}</h3>
            </div>
            <BlogsList data={searchResult} />

            
        </div>
    )
}
