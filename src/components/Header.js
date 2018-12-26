import React from 'react'
import './header.css'
import house from '../images/houserImg.png'

export default function Header() {

    return (
        <div className='header'>
            <img src={house} className='house' ></img>
            <span className='houser'>Houser</span>
        </div>
    )
}