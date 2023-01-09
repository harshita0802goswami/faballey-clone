import { Input, useSafeLayoutEffect } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Search = ({setSearchToggle}) => {
    const [searchResult, setSearchResult] = useState([]);
    const [input,setInput] = useState('');
    const fetchData = async (query)=>{
        let res = await fetch(`https://cheddar-pentagonal-torta.glitch.me/products?q=${query}&_page=1&_limit=6`)
        let data = await res.json();
        setSearchResult(data);
    }
    const handleChange= (value)=>{
        setInput(value)
    }
    const debounce = (input)=>{
        fetchData(input)
    }
    useEffect(()=>{
        debounce(input)
    },[input])

  return (
    <div className='search'>
        <div>
        <Input onChange={(e)=>handleChange(e.target.value)} backgroundColor='rgb(243, 240, 240)' focusBorderColor='rgb(243, 240, 240)' placeholder='Search'/>
        </div>
        <div>
            <ul>
                {searchResult.map((elem)=>{
                    return <li onClick={()=>setSearchToggle(false)}><Link to={`products/${elem.id}`}>{elem.title}</Link></li>
                })}
            </ul>
        </div>
    </div>
  )
}

export default Search