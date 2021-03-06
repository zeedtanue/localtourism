import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Link from 'next/link'
import Search from './Search'
import Image from 'next/image'


const NavBar = () => {
    
    const [category, setCategory] = useState([])

    const readData= async()=>{
        const getCategory={
            method:"GET",
            url:"/api/blogs/category"
            
        }
        const {data} = await axios(getCategory)
        setCategory(data)
        
    }
    useEffect(()=>{
        readData()
        console.log(category)
    },[])

    return (
        <div>
            
            <nav className="navbar is-info is-bold">
                <div className="container">
                    <Link passHref href={"/"}>
                <div className="navbar-brand">
                    
                    <a className="navbar-item is-size-2 has-text-weight-bold" href="../">
                    Let's Go
                    </a>
                    <span className="navbar-burger burger" data-target="navbarMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                    </span>
                </div>
                </Link>
                <div id="navbarMenu" className="navbar-menu">
                    <div className="navbar-end">
                    <div className=" navbar-item">
                       <Search/>
                    </div>
                    

                    {category.map((item)=>
                    <Link passHref href={`/category/${item.name}/${item.folder}`}>
                        <a className="navbar-item is-size-5 has-text-weight-semibold">

                            {item.name}
                        </a>
                    </Link>
                    )}
                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
