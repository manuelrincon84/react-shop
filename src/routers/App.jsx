import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PasswordRecovery from '../pages/PasswordRecovery';
import SendEmail from '../pages/SendEmail';
import NewPassword from '../pages/NewPassword';
import MyAccount from '../pages/MyAccount';
import CreateAccount from '../pages/CreateAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';
import NotFound from '../pages/NotFound';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import '../styles/global.css';

const router = createBrowserRouter( [
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/password-recovery",
        element: <PasswordRecovery />,
    },
    {
        path: "/send-email",
        element: <SendEmail />,
    },
    {
        path: "/new-password",
        element: <NewPassword />,
    },
    {
        path: "/my-account",
        element: <MyAccount />,
    },
    {
        path: "/create-account",
        element: <CreateAccount />,
    },
    {
        path: "/checkout",
        element: <Checkout />,
    },
    {
        path: "/orders",
        element: <Orders />,
    },
]);
const App = () => {
    const initialState = useInitialState();
    return (
        <AppContext.Provider value={{initialState}}>
            <Layout>
                <RouterProvider router={router} />
            </Layout>
        </AppContext.Provider>
    );
}


export default App;