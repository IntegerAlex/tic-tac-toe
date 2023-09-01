export default function SignUpComp() {
    return (
        <div className="signup">
            <div className="signup-form">
                <h1>Sign Up</h1>
                <input id="user" type="text" placeholder="Enter your name" />
                <input id="pass" type="password" placeholder="Enter your password" />
                <button type="button" onClick={handleSubmit}>Sign Up</button>
                {/* <button type="button" onClick={() => navigate("/home")}>Login</button> */}
            </div>
        </div>
            )
}