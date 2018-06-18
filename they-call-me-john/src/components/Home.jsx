import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Grid>
                <video autoPlay loop muted video src="/assets/unboxing.mp4" id="bgvid"></video>
                <Jumbotron>
                    <h2>Welcome to One Nation Concepts</h2>
                    <p>Changing the way you approach custom design the way you want it.</p>
                    <p>Can a man still be brave if he’s afraid? That is the only time a man can be brave.The War of the 5 kings. Our Sun Shines Bright. Fire and blood. A dream of Spring. And now his watch is ended. The North remembers. King in the North. The Knight of Lemonwood. You know nothing, Jon Snow.</p>
                    <Link to="/about">
                        <Button bsStyle="primary">About</Button>
                    </Link>
                </Jumbotron>

                <Row className="show-grid text-center">
                <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="assets/summer.jpeg" circle className="profile-pic" />
                    <h3>Beatrice</h3>
                    <p>Blah Blah</p>
                </Col>
                <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="assets/beach2.jpeg" circle className="profile-pic" />
                    <h3>Talia</h3>
                    <p>Lady Bug Blah</p>
                </Col>
                <Col xs={12} sm={4} className="person-wrapper">
                    <Image src="assets/talk2.jpeg" circle className="profile-pic" />
                    <h3>Olivia</h3>
                    <p>Blah Blah</p>
                </Col>
                </Row>
            </Grid>        
        )
    }
}
