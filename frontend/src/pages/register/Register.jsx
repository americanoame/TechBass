import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import './register.css';

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error('User is alredy registered, login');
        toast.error('User already exists, please login');
        return;
      }

      const responseData = await response.json();

      if (responseData.success) {
        console.log('Registration successful.');
        toast.success('Registration was successful!');
        setTimeout(() => {
          navigate('/login');
        }, 500);
      
        
      } else {
        console.error('Registration failed.');
        toast.error('Registration failed!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container" style={{ marginTop: '100px' }}>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-7">
            <div className="card" style={{ padding: '15px' }}>
              <div className="card-header">
                <h3 className="text-center">Register</h3>
              </div>

              <div className="card-body">
                <form onSubmit={handleSubmit(registerSubmit)}>
                  <div className="form-group" style={{ padding: '10' }}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" {...register('name')} className="form-control" id="name" placeholder="Enter your name" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" {...register('email', { required: true })} className="form-control" id="email" placeholder="Enter your email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                      type="password"
                      {...register('password', {
                        required: true,
                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,
                      })}
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                    />

                    <div className="text-danger mt-1">
                      {errors.password?.type === 'required' && <p>Password must be at least 8 character </p>}
                      {errors.password?.type === 'pattern' && <p>Should contain at least one uppercase, lowercase, number and special character</p>}
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block w-100 mt-2">
                    REGISTER
                  </button>

                  <span>
                    If you have an account! <Link to="/login">Login</Link>
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

export default Register;
