import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ListOfData from './ListOfData';
import logo from '../../assets/image/logo.png'
import { useNavigate } from 'react-router-dom';
import useSetTitle from '../../Hooks/useSetTitle';

const Home = () => {
    useSetTitle('Home')
    const navigate = useNavigate()
    const [allData, setAllData] = useState({})
    const [error, setError] = useState(false);
    const [date, setDate] = useState(0);
    useEffect(() => {
        fetch('https://test.nexisltd.com/test', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('NexisltdToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])
    const allListData = Object.values(allData)

    const changeDate = (event) => {
        const date = event.target.value;
        if (date > 0 && date < 30) {
            // console.log(date)
            setDate(date - 1);
            setError(false);
        }
        else if (date < 1) {
            setError(false);
        }
        else {
            setError(true);
            setDate(0);
        }
    }

    const handleLogout = () => {
        localStorage.removeItem('NexisltdToken')
        navigate('/login')
    }

    return (
        <section className="container mx-auto px-4 lg:px-0 mb-10 lg:mb-0">
            <div className='mt-14'>
                <div className='flex justify-between items-center'>
                    <img src={logo} alt="Logo" />
                    <button onClick={handleLogout} className='text-white bg-theme-primary py-3 px-7 rounded'>Logout</button>
                </div>
                <div className='text-center mt-8 mb-20 ' data-aos="fade-up" data-aos-duration='2000'>
                    <h3 className='bg-theme-primary inline-block text-2xl md:text-4xl py-4 px-7 md:px-14 rounded text-white font-semibold leading-10'>Attendance information</h3>
                </div>
            </div>
            <div className='mb-5 flex'>
                <h3 className='font-bold mr-3'>Please Select A Date: </h3>
                <input type="number" onChange={changeDate} placeholder='Enter A Date of November' name="date" className='border border-cyan-400' />
                {
                    error && <p className='text-red-900 ml-3'>This is not a Date</p>
                }
            </div>
            <table className="min-w-full leading-normal">
                <thead>
                    <tr>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            Date
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            Employee Name
                        </th>
                        <th
                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                        >
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allListData.map(data => (
                            <ListOfData key={data.id} data={data} date={date} />
                        ))
                    }
                </tbody>
            </table>
        </section>
    );
};

export default Home;