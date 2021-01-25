import React, {useState} from 'react'

const Search = ({ getQuery }) => {
    const [text, setText] = useState('')


        const onChange = (q) => {
            setText(q)
            getQuery(q)
        }

    return (
        <div className="mx-auto px-5 grid md:grid-cols-8 mb-10">
           
            <div className="md:col-start-3 md:col-span-4">
                <form className="form">
                <input value={text} onChange={(e) => onChange(e.target.value)} autoFocus className="mx-auto appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-grey" type="search" placeholder="Search a Characters"/>
                </form>
            </div>
           
        </div>
    )
}

export default Search
