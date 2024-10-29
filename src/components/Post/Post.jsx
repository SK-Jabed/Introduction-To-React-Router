import { Link } from "react-router-dom";


const Post = ({post}) => {
    const {id, title} = post;

    const postStyle = {
        border: "2px solid tomato",
        padding: "5px",
        borderRadius: "12px"
    }

    return (
        <div style={postStyle}>
            <h2>Post of ID: {id}</h2>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
        </div>
    );
};

export default Post;