import { userUserContext } from "../context/UseContext";

const DashBoard = () => {

    const {user}= userUserContext();

    return (
        <>
            <h1>DashBoard</h1>
            <h2>Bienvenido: {user.name}</h2>
        </>
    );
};

export default DashBoard;