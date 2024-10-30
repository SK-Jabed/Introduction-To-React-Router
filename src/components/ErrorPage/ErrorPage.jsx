import { useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError();

    console.log(error);

    return (
        <div>
            <h3>Uppps!!!</h3>
        </div>
    );
};

export default ErrorPage;