import React, { useState } from 'react'
import useFetch from '../Hooks/useFetch'

const GithubSearch = () => {
    const [query, setQuery] = useState("")
    const [page, setPage] = useState(1)

    const handlePage = (val)=>{
        if((page + val)<1 || data.incomplete_results )
        {
            return false
        }
        setPage(page + val)
    }

    // function handleSearch()
    // {
        const { loading, data, error} = useFetch(
            `https://api.github.com/search/users?q=${query || 'masai'}&&page=${page}`
        );

        // console.log(data.items)
    // }

    // console.log(page)
    

  return (
    <div>
        <h1>GithubSearch</h1>
        <input type="text" value={query} onChange={e=> setQuery(e.target.value)} />
        {/* <button>Search</button> */}
        <br />
        <button disabled={page==1} onClick={e => handlePage(-1) }>Prev</button>
        <button onClick={e => handlePage(1) }>Next</button>
        <br />
        {loading && "Loading..."}
        {!loading && data && data.items.map(item => (
            <div key={item.id}>{item.login}</div>
        )) }
    </div>
  )
}

export default GithubSearch