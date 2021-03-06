import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/FormInput';
import CustomButton from '../custom-button/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase-utils';
import { Link } from 'react-router-dom';

export class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }
  handlerSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.createUserWithEmailAndPassword(email, password);

      this.state({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };
  handlerChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className='sign-in'>
        <span>Sign In with your email and password</span>
        <div>
          <form onSubmit={this.state.handlerSubmit}>
            <FormInput
              name='email'
              type='email'
              value={this.state.email}
              handleChange={this.handlerChange}
              placeholder='Email....'
              required
            />

            <FormInput
              name='password'
              type='password'
              value={this.state.password}
              handleChange={this.handlerChange}
              placeholder='Password.......'
              required
            />
            <div className='buttons'>
              <CustomButton type='submit'> Sign In </CustomButton>
              <CustomButton
                style={{ marginLeft: '10px' }}
                onClick={signInWithGoogle}
                isGoogleSignIn
              >
                Sign in with google
              </CustomButton>
            </div>
          </form>
        </div>
        <p>Needan account?</p>
        <Link className='nav-link' to='signup'>
          <CustomButton type='submit'> SignUp </CustomButton>
        </Link>
      </div>
    );
  }
}

export default SignIn;
