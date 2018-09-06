import React from 'react';
import './Login.scss';
import LoginPage from './LoginPage/LoginPage';
import LoginOtp from './LoginOtp/LoginOtp';
import LoginOtpVerify from './LoginOtpVerify/LoginOtpVerify';
import history from '../../history';

const steps = [{ id: 0 }, { id: 1 }, { id: 2 }];
class Login extends React.Component {
    constructor() {
        super();
        this.state = ({ currentStep: steps[0] });
    }

    componentDidMount() {
        console.log();
    }

  nextPage = () => {
      const { currentStep } = this.state;
      this.setState({ currentStep: steps[currentStep.id + 1] });
  }

  previousPage = () => {
      const { currentStep } = this.state;
      this.setState({ currentStep: steps[currentStep.id - 1] });
  }

  onSubmit = values => {
      history.push('./home');
      console.log('final submit', values);
  }

  AuthenticationRequired= values => {
      // eslint-disable-next-line
      const isAuthenticationRequired = values.isAuthenticationRequired;
      if (isAuthenticationRequired) {
          return this.nextPage();
      }

return history.push('./loginAuth');
  }

  //   otpRequired=(values) =>{
  //     const otp = values.one + values.two +  values.three....;
  //     if (otp = 123456) {
  //       return history.push('./home');
  //     }
  //     return invalidotp;
  //   }

  render() {
      const { currentStep } = this.state;
    //   console.log(this.props.location);
      let testProps = '';
      if (this.props.location && this.props.location.query && this.props.location.query.testProps) {
            testProps = this.props.location.query.testProps;
            this.props.location.query.testProps= undefined;
      }

return (
    <div>
        {testProps === 'something'
                ? (
<div>
                    <LoginOtp
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage} />
                </div>
)
            : (
<div>
                {currentStep.id === 0
                && (
                    <LoginPage
                        onSubmit={this.AuthenticationRequired}
                    />
                )}
              {currentStep.id === 1
                && (
                    <LoginOtp
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage} />
                )}
              {currentStep.id === 2
                && (
                    <LoginOtpVerify
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage} />
                )}
            </div>
)}
    </div>
      );
  }
}

export default Login;
