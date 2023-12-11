import {NavLink} from 'react-router-dom'
import { userUserContext } from '../context/UseContext';

const Navbar = () => {

      const {user, setUser} =  userUserContext();

    return (
        <nav>
            <NavLink to='/'>Home</NavLink> |
            {
                user && (
                    <>
                        <NavLink to='/dashboard'>Dashboard</NavLink>
                        <button onClick={() => setUser(false)}>LogOut</button>
                    </>
                )
            }
        </nav>
    )
}

export default Navbar;