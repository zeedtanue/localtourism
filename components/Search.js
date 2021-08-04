import React,{useCallback, useState} from 'react'
import {useRouter} from 'next/router'


const Search = () => {
    const [searchTerm, setSearchTerm]= useState('')
    const {push} = useRouter()

    const handleOnChange = useCallback(
        ({target})=>{
            const {name, value} = target;
            setSearchTerm(value)
        },
        [searchTerm]
    )

    const onSubmitActionm= event=>{
        event.preventDefault()
        push(`/search/${searchTerm}`)
    }
    return (
        <div>
         <form onSubmit={onSubmitActionm} >
                <input
                  name="search"
                  type="text"
                  className="input is-rounded"
                  placeholder='Search..'
                  onChange={handleOnChange}
                  
                />
                
                </form>   
        </div>
    )
}

export default Search
