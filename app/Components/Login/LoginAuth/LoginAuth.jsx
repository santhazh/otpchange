import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import Background from '../../../../assets/Images/homeheader.png';
import Backhomepage from '../../../../assets/Images/homefooter.png';
import './LoginAuth.scss';

const bgStyle = {
    width: '100%',
    float: 'left',
};


class  LoginAuth extends React.Component {
    constructor() {
        super();
    }

    render() {

return (
    <div>
        <img src={Background} alt="home background" style={bgStyle}/>
        <div className="twoStep">
            <Link to={{ pathname: '/Login', query: { testProps: 'something' } }}> Verify your account using our two-step authentication process </Link>

        </div>
        {/* <div>hello</div> */}
        {/* <a href="#" onClick={() => { this.handleClick ;}}>click me</a> */}
        <img src={Backhomepage} alt="home background" style={bgStyle}/>
    </div>
        );
    }
}

export default LoginAuth;


// function LoginAuth() {
// return (
//     <div>
//         <img src={Background} alt="home background" style={bgStyle}/>
//         {/* <div><Link to="/LoginOtp">Authpage</Link></div> */}
//         {/* <div>hello</div> */}
//         <a href="#" onClick={() => {this.handleClick}}>click me</a>
//         <img src={Backhomepage} alt="home background" style={bgStyle}/>
//     </div>
//         );
//     }

// export default LoginAuth;
