import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Error 404</h1>
            <p>Try somewhere else.</p>
            <Link to="/">Home Page</Link>
        </div>
    );
};

export default ErrorPage;