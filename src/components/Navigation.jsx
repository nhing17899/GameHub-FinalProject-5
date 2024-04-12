import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <div className="navbar">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home Page</Link>
                        </li>
                        <li>
                            <Link to="/RPS">Rock Paper Scissors</Link>
                        </li>
                        <li>
                            <Link to="/TTT">Tic Tac Toe</Link>
                        </li>
                        <li>
                            <Link to="/Wordle">Wordle</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Navigation;