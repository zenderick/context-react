import {Outlet, Navigate} from 'react-router-dom';
import { userUserContext } from '../context/UseContext';


const LayoutPrivate = () => {

    const {user} = userUserContext();


    return (
        <>
         { user ? <Outlet/> : <Navigate to='/'/>}
        </>
    );
};

export default LayoutPrivate;