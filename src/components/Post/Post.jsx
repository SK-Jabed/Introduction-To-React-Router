import { Link, useNavigate } from "react-router-dom";



const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();

    const postStyle = {
        border: "2px solid tomato",
        padding: "5px",
        borderRadius: "16px"
    }

    const handleShowDetails = () => {
        navigate(`/post/${id}`)
    }

    return (
        <div style={postStyle}>
            <h2>Post of ID: {id}</h2>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link>
            <button onClick={handleShowDetails}>Click to see details</button>
        </div>
    );
};

export default Post;