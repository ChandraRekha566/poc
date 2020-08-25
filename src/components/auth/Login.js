import React, { useState, Fragment } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Redirect } from 'react-router-dom';

const Login = ({ isAuthenticated, login }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(username, password);
  };
  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <form className='form-box'>
        <p className='lead'>
          <i className='fas fa-user'></i> Login Form
        </p>
        <h1 className='large text-primary'>Enter the details</h1>

        <div className='form-group'>
          <label for='username'> User ID </label>
          <input
            type='username'
            placeholder='Enter User Id'
            name='username'
            size='25'
          />
        </div>
        <div className='form-group'>
          <label for='password'>Password </label>
          <input
            type='password'
            placeholder='Password'
            name='password'
            size='25'
            minLength='6'
          />
        </div>

        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth,
});
export default connect(mapStateToProps, { login })(Login);
