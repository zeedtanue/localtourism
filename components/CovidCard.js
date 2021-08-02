import React from 'react'
import axios from 'axios'
import moment from 'moment'
const CovidCard = () => {

    const [flag,setFlag]= React.useState("")
    const [covidData,setCovidData]= React.useState({})

    const readData= async()=>{
        const getForm={
            method: "GET",
            headers:
               {
                   "Authorization": "Basic emVlZHRhbnVlQGdtYWlsLmNvbTp0YW16ZWVkNTUyMQ==",
                    'X-Requested-With': 'XMLHttpRequest',

               },
            url:"https://gentle-springs-11097.herokuapp.com/https://www.feedspot.com/v1/entries.json?folder_id=3586628"
        }
        const {data} = await axios.get("https://corona.lmao.ninja/v2/countries/Malaysia?yesterday=false&strict=true&query")
        
        setFlag(data.countryInfo.flag)
        setCovidData(data)
    }
    React.useEffect(()=>{
        readData()
    },[])

    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <p className="title is-4">
                        
                        COVID 19 Update
                        </p>
                        
                        <div className="columns is-mobile is-centered">
                        <div className="column is-half">
                            <img src={flag} alt="Malaysian flag" className="is-align-self-center" height="30" width="45"/>

                        </div>
                        </div>                         
                    
                    <div className="media">
                        
                        <div className="media-content">
                            <tbody className="table is-narrow">
                                <tr>
                                    <td className="title is-4">Today</td>
                                    <td className="title is-4">{covidData.todayCases}</td>
                                </tr>
                                <tr>
                                    <td>Total Cases</td>
                                    <td>{covidData.cases}</td>

                                </tr>
                                <tr>
                                    <td>Active</td>
                                    <td>{covidData.active}</td>

                                </tr><tr>
                                    <td>Recovered</td>
                                    <td>{covidData.recovered}</td>

                                </tr>
                            </tbody>

                            

                        </div>
                        

                    </div>
                    
                </div>
                <div className="card-footer-border-top subtitle is-7">
                            <p> {moment(covidData.updated).format("dddd, MMMM, Do YYYY")} </p>

                        </div>
            </div>
            </div>
    )
}

export default CovidCard
