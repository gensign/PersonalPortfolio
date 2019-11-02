import React, { Component } from 'react'

import grantHappyWhileSnowingPic from '../../images/happyWhileSnowing.png';


export default class Intro extends Component {
    render() {
        return (
            <div>
                <span className="happyWhileSnowing">
                    <img src={grantHappyWhileSnowingPic} alt="" />
                </span>
                <p>
                    Hi, I’m Grant. I am a Physical Therapist Assistant turned Web Developer. Starting in 2019, I decided on a career change and moved from Alaska to Utah to go to DevMountain.
                    I am excited to continue to learn and use new technologies. I am familiar with Javascript, React, Node, Express, Massive, PostgreSQL, HTML, and CSS.
                    I have also  utilized other technologies such as Stripe, Sockets, Postman, Git, and Jest and a firm believer in test driven development.
                </p>
                <p>
                    Technologies:
                </p>
                <p>
                    As seen below are a few of the technologies that I have learned throughout my coding career.
                    My foundation is Javascript but I am interested in learning more.
                </p>
                {/* <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png' alt='Javascript Logo' />
                <img src='https://i2.wp.com/www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo.jpg?resize=825%2C510&ssl=1' alt='React Logo' />
                <img src='https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' alt='NodeJs Logo' /> */}
            </div>
        )
    }
}
