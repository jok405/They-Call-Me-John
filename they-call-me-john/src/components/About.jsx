import React, { Component } from 'react';
import { Grid, Col, Image } from "react-bootstrap";
import "./About.css";

export default class About extends Component {
    render() {
        return (
            <div>
                <Image src="assets/distance.jpeg" className="header-image" />
                <Grid>
                    <Col xs={12} sm={8} smOffset={2}>
                        <Image src="assets/self3.jpg" className="about-profile-pic" rounded />
                        <h3> Sam Agular </h3>
                        <p>I am upgrading Sam's website because it will be freakin' sweet!</p>
                        <p> Yup it's gonna get a massive upgrade!</p>
                        <p>Bastards are born of passion, aren't they? We don't despise them in Dorne. More pigeon pie, please. The War of the 5 kings. All men must die. A forked purple lightning bolt, on black field speckled with four-pointed stars. What is dead may never die. The North remembers. Can a man still be brave if he’s afraid? That is the only time a man can be brave.And now his watch is ended. The tourney of Ashford Meadows. Unbowed, Unbent, Unbroken. Can a man still be brave if he’s afraid? That is the only time a man can be brave.You know nothing, Jon Snow. The wolf and the lion. The battle of the redgrass field. All men must die. You know nothing, Jon Snow.</p>
                    </Col>
                </Grid>
            </div>
        )
    }
}