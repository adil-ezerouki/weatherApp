import React from 'react'
import logo from '../assets/logo.png'

export default function NavBar() {
    return (
        <div className='navBar d-flex justify-content-between align-content-between  py-2 px-5'>
            <div className='logo d-flex justify-content-between align-content-between'>
                <img src={logo} alt="website logo" className='object-fit-contain ' />
                <h2 className='align-self-center m-0 ms-2'>Weather 99</h2>
            </div>
            <div className='refresh d-flex flex-sm-row flex-column  justify-content-between align-content-between'>
                <i className="fa-solid fa-arrows-rotate align-self-center "></i>
                <span  className='align-self-center ms-2'>Refresh</span>
            </div>
        </div>
    )
}
