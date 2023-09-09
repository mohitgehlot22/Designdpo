import { Col, Container, Row } from "react-bootstrap";
import footrelogo from  '../Footre.svg';
import googleimg from '../google.svg';
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";


export function Footre() {
    return (
        <>
            <div className="footre py-5">
                <Container>
                    <Row className="m-0">
                        <Col className="col-lg-3 col-12">
                            <div className="bacgroundFootre">
                                <img src={footrelogo} className="img-fluid" alt="" />
                                <h6 className="my-4 fw-bold">DOWNLOAD OUR APP</h6>
                                <img src={googleimg} width="160px" className="img-fluid" alt="" />
                            </div>
                            <div>
                                <BiLogoFacebook className="iconfecebook mt-5" />
                                <AiOutlineInstagram className="iconfecebook mt-5" />
                                <AiOutlineTwitter className="iconfecebook mt-5" />
                                <FaTelegramPlane className="iconfecebook mt-5" />
                            </div>
                        </Col>
                        <Col className="col-lg-3 col-12 ">
                            <h6 className="fw-bold py-3 ps-5">CATEGORY</h6>
                            <ul className="list-group ps-5">
                                <li className="py-2 fw-semibold">
                                    Dining Area
                                </li>
                                <li className="py-2 fw-semibold">
                                    Living Room Designs
                                </li>
                                <li className="py-2 fw-semibold">
                                    Childrens Bedroom Designs
                                </li>
                                <li className="py-2 fw-semibold">
                                    Bathroom Design
                                </li>
                            </ul>
                        </Col>
                        <Col className="col-lg-3 col-12 ">
                            <h6 className="fw-bold py-3 ps-5">COMPANY</h6>
                            <ul className="list-group ps-5">
                                <li className="py-2 fw-semibold">
                                    Blog
                                </li>
                                <li className="py-2 fw-semibold">
                                    About Us
                                </li>
                                <li className="py-2 fw-semibold">
                                    FAQ's
                                </li>
                                <li className="py-2 fw-semibold">
                                    Contact Us
                                </li>
                            </ul>
                        </Col>
                        <Col className="col-lg-3 col-12 ">
                            <h6 className="fw-bold py-3 ps-5">QUICK LINKS</h6>
                            <ul className="list-group ps-5">
                                <li className="py-2 fw-semibold">
                                    Privacy Policy
                                </li>
                                <li className="py-2 fw-semibold">
                                    Terms and Conditions
                                </li>
                                <li className="py-2 fw-semibold">
                                    Refund Policy
                                </li>

                            </ul>
                        </Col>
                    </Row>

                </Container>
            </div>
            <Row className="m-0">
                <Col className="col-md-6 col-12">
                    <p className="pt-3  pe-3 fw-semibold">
                        © 2022 Blue City Studio. All Rights Reserved.
                    </p>
                </Col>
                <Col className="col-md-6 col-12">
                    <p className="pt-3 text-end pe-3 fw-semibold">
                        Design and develop by <span className="text_footre">Geekologix Technologies</span>
                    </p>
                </Col>
            </Row>
        </>
    );
}