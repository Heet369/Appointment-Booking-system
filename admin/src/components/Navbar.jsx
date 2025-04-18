import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'

const Navbar = () => {

    const { aToken,setAToken } = useContext(AdminContext)
    const { dToken,setDToken } = useContext(DoctorContext)

    const navigate = useNavigate()

    const logout = () => {
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
        dToken && setDToken('')
        dToken && localStorage.removeItem('dToken')
    }

    return (
        <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
            <div className='flex items-center gap-2 text-xs'>
                <h1 className="text-3xl font-extrabold text-[#5f6fff] cursor-pointer tracking-wide relative mx-auto md:mx-0">
                    <span className="bg-gradient-to-r from-[#5f6fff] to-[#3a47d5] text-transparent bg-clip-text">
                        Med<span className="text-black">Pluse</span>
                    </span>
                </h1>
                <p className='border px-3.5 py-0.5 rounded-full border-gray-700 text-gray-700'>{aToken ? 'Admin' : 'Doctor'}</p>
            </div>
            <button onClick={logout} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
        
        </div>
    )
}

export default Navbar