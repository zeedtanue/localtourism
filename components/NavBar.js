import React,{useEffect,useState} from 'react'
import axios from 'axios'


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
            
            <nav className="navbar">
                <div className="container">
                <div className="navbar-brand">
                    <a className="navbar-item is-size-4 has-text-weight-bold" href="../">
                    Let's Go
                    </a>
                    <span className="navbar-burger burger" data-target="navbarMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                    </span>
                </div>
                <div id="navbarMenu" className="navbar-menu">
                    <div className="navbar-end">
                    <div className=" navbar-item">
                        <div className="control has-icons-left">
                        <input className="input is-rounded" type="email" placeholder="Search"/>
                        <span className="icon is-left">
                            <i className="fa fa-search"></i>
                        </span>
                    </div>
                    </div>
                    <a className="navbar-item is-active is-size-5 has-text-weight-semibold">
                        Home
                    </a>

                    {category.map((item)=>
                    <a className="navbar-item is-size-5 has-text-weight-semibold">

                        {item.name}
                    </a>
                    )}
                    </div>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
