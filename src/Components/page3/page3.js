import { Button, Container, Row, Col, ProgressBar } from 'react-bootstrap';
import "./page3.css";
import hm from "../../assets/images/h&m.jpg";
export default function Page3() {
    return (

        <>

            <Container>
                <Row>
                    <Col sm={4}>
                        <img src={hm} alt="H&M Freestyle Saree" width="400px" height="500px" align="left"></img>

                    </Col>
                    <Col sm={8}>
                        <h1 align="left">H&M Freestyle Saree</h1>
                        <p align="left">Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex
                            ea commodo consequat.<br /><br />
                            Rs. 1999</p>
                        <p align="left" style={{ color: "red" }}><b>only 1 left in stock</b></p>
                        <br />
                        <p align="left"><b>SELECT SIZE</b></p>
                        <div class="button" align="left"><Button variant="danger" className="btn-size">S</Button>
                            <Button variant="danger" className="btn-size">M</Button>
                            <Button variant="danger" className="btn-size">L</Button>
                            <Button variant="danger" className="btn-size">XL</Button>
                            <Button variant="danger" className="btn-size">XXL</Button>
                            <Button variant="danger" className="btn-size">XXXL</Button></div>
                        <br />
                        <p align="left"><Button variant="danger" className="btn-add">ADD TO CART</Button>
                            <Button variant="outline-danger" className="btn">WISHLIST</Button>
                        </p>

                    </Col>
                </Row><br />
                <Row>
                    <Col sm={12}>
                        <p align="left"><b>PRODUCT DETAILS</b><br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            ea commodo consequat.</p>
                        <p align="left"><b>MATERIAL</b><br />
                            lorem<br />ipsum dolor<br />consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4}>
                        <h4 align="left">RATINGS</h4>
                        <div>
                            <ProgressBar variant="danger" now={100} /> <br />
                            <ProgressBar variant="danger" now={80} /><br />
                            <ProgressBar variant="danger" now={60} /><br />
                            <ProgressBar variant="danger" now={40} /><br />
                            <ProgressBar variant="danger" now={20} /><br />
                        </div>
                    </Col>
                    <Col sm={8} style={{ textAlign: "left" }}>
                        <h4 align="left">COMMENTS</h4>
                        <p align="left"><b>USER 1</b><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            <br /><b>USER 2</b><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>

                        <Button variant="danger" className="btn-read">Read More</Button>



                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <br></br><h3 align="left">EXPLORE MORE WOMEN SAREES</h3>
                    </Col>
                </Row>
            </Container>



        </>);

}