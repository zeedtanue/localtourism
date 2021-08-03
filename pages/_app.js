import "bulma/css/bulma.css";
import Layout from "../components/Layout";
import Router from "next/router"
import { useState } from "react";
import Loader from "../components/Loader";

function MyApp({ Component, pageProps }) {

  const [loading,setLoading] = useState(false)
  Router.events.on('routeChangeStart',(url)=>{
    setLoading(true)
  })
  Router.events.on('routeChangeComplete',(url)=>{
    setLoading(false)
  })
  
  
  return(
    <Layout>
      {loading?<Loader/>:<Component {...pageProps} /> }
      
    </Layout>
  ) 
}

export default MyApp
