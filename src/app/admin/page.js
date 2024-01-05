

export default function Admin(){
    return (
        <div className="container login-container" style={{ maxWidth: '400px',margin: 'auto', marginTop: '100px', marginBottom:'100px' }}>
        <div className="row">
          <div className="col-md-12 login-form" style={{ backgroundColor: '#ffffff',padding: '20px',
				  borderRadius: '10px',
				  boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)' }}>
            <h3>Login</h3>
            <form id="loginForm">
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input type="text" className="form-control" id="username" name="username" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" className="form-control" id="password" name="password" required />
              </div>
              <button type="button" className="btn btn-primary btn-block" onclick="validateLogin()">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
}