import React, { Fragment } from 'react';
import Background from '../../../../assets/Images/home.png';
import ForgotPopUp from '../../Model/SuccessPopup';
import ForgotPassword from './ForgotPassword';
import Login from '../../Login/Login';
// import history from '../../../history';

const bgStyle = {
    width: '100%',
    float: 'left',
};

class ForgotPasswordPopUp extends React.Component {
    constructor() {
        super();
        this.state = ({ isModalAppear: true });
    }

    closeModel = () => {
        // history.push('./home');
        console.log('clicked');
        this.setState({
            isModalAppear: false,
        });
    }

    render() {
        const { isModalAppear } = this.state;
        const { pathname } = location;

        return (
            <Fragment>
                <img src={Background} alt="home background" style={bgStyle} onClick={this.closeModel} id="bgImg"/>
                <div>
                    {isModalAppear && (
                        <ForgotPopUp
                            show={isModalAppear}
                            resetpassword={1}
                            bodycontent={pathname && pathname === '/signin' ? <Login /> : <ForgotPassword/>}
                            onHide={this.closeModel} />
                    )}
                </div>
            </Fragment>
        );
    }
}

export default ForgotPasswordPopUp;
