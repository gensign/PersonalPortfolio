import React, { Component } from 'react';

import hapwagonHomePagePic from '../../images/hapwagonHomePage.png';
// import learnsoapnotesPic from '../../images/learnSOAPNotesPic.png';

export default class ProjectsWorkedOn extends Component {
    render() {
        return (
            <div>
                <span className="hapwagon">
                    <img src={hapwagonHomePagePic} alt="" />
                </span>
                <h3>Hapwagon: </h3>
                <p>
                    Group Project: Hosted with digital ocean. <a href='http://157.245.241.75:5555/#/' alt='link to hapwagon'>Hapwagon</a>.
                </p>
                <p>
                    Oil Change Scheduling web application for busy people who sometimes forget to have their oil changed.
                    A user may login using their phone number and verification code sent to them by Twillo verification.
                    Afterwards the user inputs their personal information which is saved to the database.
                    They then input their car information and it is saved to the database.
                    Next the user inputs the desired date making sure that it is not a previous date, today’s date, or a weekend.
                    Then it takes them to the payment page which uses Stripe.
                    Once the payment is made, they are taken to an instruction page and then to a message page which utilizes Sockets.
                    At this point the user is finished and will now just wait for the appointment time and date.
                    When an admin logs in with their number they are taken to the admin page which allows them to see all appointments for today.
                    They are able to click on pick up or drop off to change the status of the car and get to a link that takes them to google maps with the customer’s address.
                    Then the final button the admin can select is the message button which takes them to the chat room where they can access any message the customer has left for them or they can chat with a user.
                </p>
                {/* <span className="soapnote">
                    <img src={learnsoapnotesPic} alt="" />
                </span>
                <h3>SOAP Notes Template</h3>
                <p>
                    Personal Project: Hosted with digital ocean. <a href='https://learnsoapnotes.com/#/' alt='link to SOAP note template'>SOAP Notes</a>
                </p>
                <p>

                </p> */}
            </div>
        )
    }
}

