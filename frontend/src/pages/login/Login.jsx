import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import './login.css';

const Login = () => {
  
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const loginSubmit = async (user) => {
    try {
      const userInfo = {
        email: user.email,
        password: user.password,
      };

      const response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });

      if (!response.ok) {
        console.error('Login failed:', response.statusText); 
        toast.error('Login failed! Please check your credentials.')
        return;
      }

      const log = await response.json();

      if (log.success) {  
        console.log('Login successful');
        toast.success('Login was successful!');
        localStorage.setItem('data', JSON.stringify(user)); 
        navigate('/product');
      } else {
        console.error('Login:', log.error);
        toast.error('Login failed!');
      }
    } catch (error) {
      console.error(error);
      toast.error('Login failed!');
    }
  };

  return (
    <>
      <div className="container margin-top" style={{ marginTop: '100px' }}>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7">
            <div className="card" style={{ padding: '15px' }}>
              <div className="card-header">
                <h3 className="text-center">Login</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit(loginSubmit)}>
                  <div className="form-group">
                    <label htmlFor="username">email:</label>
                    <input type="text" {...register('email')} className="form-control" id="username" placeholder="Enter your email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" {...register('password')} className="form-control" id="password" placeholder="Enter your password" />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block w-100 mt-2 mb-2">
                    LOGIN
                  </button>

                  <span>
                    If you dont have an account! <Link to="/register">Register</Link>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
