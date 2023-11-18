import React from 'react'

export default function Dashboard() {
    return (
        <div className='dashboard'>
            <div className='cityANDsearch d-flex flex-sm-row flex-column-reverse   justify-content-between m-5 p-2 mb-4'>
                <div className='city'>
                    <i className="fa-solid fa-location-dot"></i>
                    <span>Souk El Arbaa</span>
                    <p className='m-0'>271099834598234957</p>
                </div>
                <div className='search d-flex align-content-center '>
                    <i className="fa-solid fa-magnifying-glass align-self-center" ></i>
                    <input type='search' placeholder='search your city here' className='align-self-center' />
                </div>
            </div>
            <div className='wheatherData d-flex mx-5 my-4 p-2 '>
                <div className='data d-flex flex-column gap-3'>
                    <div className='d-flex flex-column'>
                        <span>select date</span>
                        <input type='date' />
                    </div>
                    <span>High Temperature</span>
                    <span>Low Temperature</span>
                    <span>Humidity</span>
                    <span>Sunrise Time</span>
                    <span>Sunset Time</span>
                </div>
                <div className='weatherDivs d-flex ps-5 text-center gap-4'>
                    <div className='weatherDiv '>
                        <span className=''>20 jan 2023</span>
                        <div className='text-white weatherCARD'>
                            <div className='weatherState d-flex justify-content-between  align-content-center '>
                                <i className="fa-regular fa-sun align-self-center w-50"></i>
                                <span className='align-self-center w-50'>Sunny</span>
                            </div>
                            <div className='weahterDataSon d-flex flex-column gap-3 py-3 '>
                                <span>23*c / 63*F</span>
                                <span>23*c / 63*F</span>
                                <span>76%</span>
                                <span>06:21 AM</span>
                                <span>05:83 PM</span>
                            </div>
                        </div>
                    </div>
                    <div className='weatherDiv '>
                        <span className=''>20 jan 2023</span>
                        <div className='text-white weatherCARD'>
                            <div className='weatherState d-flex justify-content-between  align-content-center '>
                                <i className="fa-regular fa-sun align-self-center w-50"></i>
                                <span className='align-self-center w-50'>Sunny</span>
                            </div>
                            <div className='weahterDataSon d-flex flex-column gap-3 py-3 '>
                                <span>23*c / 63*F</span>
                                <span>23*c / 63*F</span>
                                <span>76%</span>
                                <span>06:21 AM</span>
                                <span>05:83 PM</span>
                            </div>
                        </div>
                    </div>
                    <div className='weatherDiv '>
                        <span className=''>20 jan 2023</span>
                        <div className='text-white weatherCARD'>
                            <div className='weatherState d-flex justify-content-between  align-content-center '>
                                <i className="fa-regular fa-sun align-self-center w-50"></i>
                                <span className='align-self-center w-50'>Sunny</span>
                            </div>
                            <div className='weahterDataSon d-flex flex-column gap-3 py-3 '>
                                <span>23*c / 63*F</span>
                                <span>23*c / 63*F</span>
                                <span>76%</span>
                                <span>06:21 AM</span>
                                <span>05:83 PM</span>
                            </div>
                        </div>
                    </div>
                    <div className='weatherDiv '>
                        <span className=''>20 jan 2023</span>
                        <div className='text-white weatherCARD'>
                            <div className='weatherState d-flex justify-content-between  align-content-center '>
                                <i className="fa-regular fa-sun align-self-center w-50"></i>
                                <span className='align-self-center w-50'>Sunny</span>
                            </div>
                            <div className='weahterDataSon d-flex flex-column gap-3 py-3 '>
                                <span>23*c / 63*F</span>
                                <span>23*c / 63*F</span>
                                <span>76%</span>
                                <span>06:21 AM</span>
                                <span>05:83 PM</span>
                            </div>
                        </div>
                    </div>
                    <div className='weatherDiv '>
                        <span className=''>20 jan 2023</span>
                        <div className='text-white weatherCARD'>
                            <div className='weatherState d-flex justify-content-between  align-content-center '>
                                <i className="fa-regular fa-sun align-self-center w-50"></i>
                                <span className='align-self-center w-50'>Sunny</span>
                            </div>
                            <div className='weahterDataSon d-flex flex-column gap-3 py-3 '>
                                <span>23*c / 63*F</span>
                                <span>23*c / 63*F</span>
                                <span>76%</span>
                                <span>06:21 AM</span>
                                <span>05:83 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
