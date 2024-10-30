import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();

    console.log(error);

    return (
        <div>
            <h3>Uppps!!!</h3>
            <p>{error.statusText || error.massage}</p>
            {
                error.status === 404 && <div>
                    <h3>Page Not Found</h3>
                    <p>Go Back where you come from</p>
                    <Link to={"/"}><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;