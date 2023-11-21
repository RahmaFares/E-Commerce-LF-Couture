import React, { useState } from "react";
import { useDispatch } from "react-redux";
import login from "../../Redux/apiCalls"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleLogin = (e) => {
        e.preventDefault();
        login(dispatch, { username, password });
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </form>
        </div>
    );
};

export default Login;
