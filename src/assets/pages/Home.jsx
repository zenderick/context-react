import { userUserContext } from "../context/UseContext";
import {useNavigate} from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    const { setUser} = userUserContext();

    const handleLogin = () => {
        setUser({
            name: 'Polo',
            email: 'polo@123',
            number: 12345,
        })
        navigate('/dashboard')
    }
    
    return (
        <>
            <h1>Home</h1>
            <button onClick={handleLogin}>Login</button>
        </>
    );
};

export default Home;