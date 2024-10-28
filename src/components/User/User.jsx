import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id, name, email, phone} = user;

    const userStyle = {
        border: "2px solid tomato",
        padding: "5px",
        borderRadius: "12px"
    }

    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;