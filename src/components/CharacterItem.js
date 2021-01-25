import React from 'react'

const CharacterItem = ({ item }) => {
    return(
        <div className="max-w-lg rounded overflow-hidden shadow-lg mb-3">
            <img className="w-full" src={item.img} alt=""/>
            <div className="px-6 py-4">
                <h1 >Name: {item.name}</h1>
                <p><strong>Category:</strong> {item.category}</p>
            </div>
        </div>
    )
       
}

export default CharacterItem
