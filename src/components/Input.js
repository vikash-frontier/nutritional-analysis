import React from 'react'
import Button from './Button'

export default function Input({list,onClick,onChange,onClear}) {
    return (
        <div className="input_div">
             <form onSubmit={onClick} >
                 <input onChange={onChange} placeholder="Eg: 1 cup tea, 100g chicken..." className="inputbox text"/>
             </form>
             <Button onClear={onClear} onClick={onClick} list={list} />
        </div>
    )
}
