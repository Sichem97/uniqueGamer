import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from './UserProvider';
import './css/style.css';

export default function Login() {
  const [formData, setFormData] = useState({
    pseudo: '',
    ID: '',
    gender: 'Male',
    clan: '',
    password: '',
    confirm_password: '',
    account: '',
  });

  const [showInvalidAlert, setShowInvalidAlert] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      setShowInvalidAlert(true);
      return;
    }

    const hashedPassword = bcrypt.hashSync(formData.password, 10);

    // Set account type to "standard"
    let updatedFormData = { ...formData, account: 'standard' };

    const usersData = JSON.parse(localStorage.getItem('users')) || [];
    localStorage.setItem('users', JSON.stringify([...usersData, { ...updatedFormData, password: hashedPassword }]));

    setFormData({
      pseudo: '',
      ID: '',
      gender: 'Male',
      clan: '',
      password: '',
      confirm_password: '',
      account: '',
    });

    setRegistrationSuccess(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const usersData = JSON.parse(localStorage.getItem('users')) || [];
    const user = usersData.find((user) => user.pseudo === formData.pseudo);

    if (user && bcrypt.compareSync(formData.password, user.password)) {
      setUser(user); 
      setShowInvalidAlert(false);
      navigate('/home');
    } else {
      setShowInvalidAlert(true);
    }
  };

  return (
    <section className='hook'>
      {useUser().user ? (
        <div className='logbar'>

        </div>
      ) : (
        <div className='main'>
          <div className='head'>
            <Link to='/'>
              {/* Add your logo or other branding */}
            </Link>
          </div>
          <input type='checkbox' id='chk' aria-hidden='true' />
          <div className='signup'>
            <form onSubmit={handleSubmit}>
              <label htmlFor='chk' aria-hidden='true'>
                Sign up
              </label>

              <div className='alertB'>
                {registrationSuccess && <p>You have been registered successfully!</p>}
              </div>

            <input
                type="text"
                name="pseudo"
                placeholder="User pseudo"
                required
                value={formData.pseudo}
                onChange={handleChange}
            />

            <input
                type="text"
                name="ID"
                placeholder="User ID"
                required
                value={formData.ID}
                onChange={handleChange}
            />

            <select
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
            >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to say">Prefer not to say</option>
            </select>

            <input
                type="text"
                name="clan"
                placeholder="Clan"
                required
                value={formData.clan}
                onChange={handleChange}
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
            />

            <input
                type='password'
                name='confirm_password'
                placeholder='Confirm your Password'
                required
                value={formData.confirm_password}
                onChange={handleChange}
            />
            
              {formData.password !== formData.confirm_password && (
                <p className='alert'>Passwords do not match</p>
              )}

            <button type='submit'>Sign up</button>
            </form>
          </div>

          <div className='login'>
            <form onSubmit={handleLogin}>
              <label htmlFor='chk' aria-hidden='true'>
                Login
              </label>

            <input
                type="text"
                name="pseudo"
                placeholder="User pseudo"
                required
                value={formData.pseudo}
                onChange={handleChange}
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
            />

              {showInvalidAlert && (
                <div className='alert'>
                  Invalid pseudo or password. Please try again.
                </div>
              )}

              <button type='submit'>Login</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
