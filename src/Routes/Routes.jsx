import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import SignUp from '../Pages/SignUp/SignUp'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <h2 className='h-screen flex justify-center items-center text-5xl font-bold text-gray-300'>Error Page</h2>,
        children: [
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/',
                element: <SignUp />,
            },
            {
                path: '/login',
                element: <Login />
            }
        ]
    }
])