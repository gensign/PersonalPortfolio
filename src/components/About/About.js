import React, { Component } from 'react';
import './About.css';

import gradPicUAA from '../../images/graduationPicature.png';
import grantHoldingSkiies from '../../images/holdingSkiiesChugiak.png';

export default class About extends Component {
    render() {
        return (
            <div>
                <span className="gradFromUAA">
                    <img src={gradPicUAA} alt="Grant's Graducation Picture from UAA" />
                </span>

                <p>
                    I graduated from the University of Alaska, Anchorage with a BS in Psychology and an AS in Physical Therapist Assistant.
                    I worked as a PTA for a while but then became interested in coding and decided to move from Alaska to Utah and go to DevMountain.
                </p>

                <span className="holdingSkiies">
                    <img src={grantHoldingSkiies} alt="Grant Holding Cross Country Skiies" />
                </span>

                <p>
                    In Alaska I enjoyed cross country skiing, swimming, mountain biking and rock climbing.
                    Now that my schooling at DevMountain  is complete, I hope to be able to get back into some of the things I have not had time to do since I moved.
                </p>
            </div>
        )
    }
}

