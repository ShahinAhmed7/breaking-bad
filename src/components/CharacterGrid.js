import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from './Spinner'

const CharacterGrid = ({items, isLoading}) => {

    return isLoading ? (
        <Spinner />
      ) : (
        <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 sm:grid-cols-2">
            {items.map((item) => (
                <CharacterItem key={item.char_id} item={item}></CharacterItem>
            ))}
        </div>
    )
}

export default CharacterGrid
