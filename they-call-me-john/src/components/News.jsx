import React, { Component } from 'react';
import { Grid, Row, Col, Image, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './News.css';


export default class News extends Component {
    render() {
        return (
            <div>
                <Image src="assets/2dunno.png" className="header-image" />                
                <Grid>
                    <h2>News</h2>
                    <Row>
                        <Col xs={12} sm={8} className="main-section">
                        <p>I am upgrading Sam's website because it will be freakin' sweet!</p>
                        <p> Yup it's gonna get a massive upgrade!</p>
                        <p>You can create beautiful things - but you have to see them in your mind first. You are only limited by your imagination. We don't need any guidelines or formats. All we need to do is just let it flow right out of us. Let's make some happy little clouds in our world. Automatically, all of these beautiful, beautiful things will happen.</p>
                        <p>How to paint. That's easy. What to paint. That's much harder. This is the time to get out all your flustrations, much better than kicking the dog around the house or taking it out on your spouse. It's cold, but it's beautiful. We artists are a different breed of people. We're a happy bunch. Use what you see, don't plan it. Let's get crazy. We'll make some happy little bushes here. So often we avoid running water, and running water is a lot of fun. When you buy that first tube of paint it gives you an artist license. Go out on a limb - that's where the fruit is. It's beautiful - and we haven't even done anything to it yet. You got your heavy coat out yet? It's getting colder. Just make little strokes like that. It's amazing what you can do with a little love in your heart. Put light against light - you have nothing. Put dark against dark - you have nothing. It's the contrast of light and dark that each give the other one meaning. Tree trunks grow however makes them happy. Get away from those little Christmas tree things we used to make in school. Son of a gun. It looks so good, I might as well not stop. You can get away with a lot. Don't forget to tell these special people in your life just how special they are to you. Don't hurry. Take your time and enjoy. But we're not there yet, so we don't need to worry about it. Just beat the devil out of it. Of course he's a happy little stone, cause we don't have any other kind. Just let your mind wander and enjoy. This should make you happy. This piece of canvas is your world. Be careful. You can always add more - but you can't take it away. I was blessed with a very steady hand; and it comes in very handy when you're doing these little delicate things.</p>
                        </Col>
                        <Col xs={12} sm={4} className="sidebar-section">
                        <Image src="assets/looselace.png"/>
                        <p>Yup, freakin' sweet! Girl lacing up her kicks.</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}
