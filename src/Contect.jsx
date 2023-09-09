import { Footre } from "./common/Footre";
import { Haeder } from "./common/Headres";
import { Container, Row, Col } from 'react-bootstrap';
import { ImMobile } from "react-icons/im";
import { AiOutlineMail } from "react-icons/ai";
import './Contect.css'

export function Contect() {
    return (
        <>
            <Haeder />
            <Container>
                <Row className="m-0 p-0 p-lg-5">
                    <Col className="col-lg-6 pt-3 col-12">
                        <h3 className="fw-bold">
                            Contact Us
                        </h3>
                        <div className="d-flex my-5">
                            <ImMobile className="icons mt-2" />
                            <div>
                                <p className="fw-semibold px-2 pt-2 m-0">
                                    Helpline No.
                                </p>
                                <p className="m-0 fw-bold fs-5 px-2 text-black">
                                    <a href="tel:7878033508" className="nav-link">+91 7878033508</a>
                                </p>
                            </div>
                        </div>
                        <div className="d-flex my-5">
                            <AiOutlineMail className="icons mt-2" />
                            <div>
                                <p className="fw-semibold px-2 pt-2 m-0">
                                    Email :
                                </p>
                                <p className="m-0 fw-bold fs-5 px-2 text-black">
                                    <a href="mailto:info@dsigndpo.com" className="nav-link">info@dsigndpo.com</a>
                                </p>
                            </div>
                        </div>
                        <div className="d-flex my-5">
                            <AiOutlineMail className="icons mt-2" />
                            <div>
                                <p className="fw-semibold px-2 pt-2 m-0">
                                    Address :
                                </p>
                                <p className="m-0 fw-bold fs-5 px-2 text-black">
                                    <a href="mailto:info@dsigndpo.com" className="nav-link">
                                        14/15, Sector 14, Chopasni Housing Board, Jodhpur, Rajasthan 342001
                                    </a>
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-lg-6 pb-4 col-12">
                        <div className="enqirey">
                            <h5 className="fw-semibold ">Have a question?</h5>
                            <p className="m-0 fw-semibold">
                                Write to us!
                            </p>
                            <form>
                                <div className="my-2">
                                    <input type="text" placeholder="Full Name" />
                                    <input type="text" placeholder="Email Address" />
                                </div>
                                <div className="my-2">
                                    <input type="text" className="Mobile Numbur" />
                                    <select name="" id="">
                                        <option value="">Subjec</option>
                                        <option value="">Design qutoe</option>
                                        <option value="">Payment and purchase</option>
                                        <option value="">other</option>
                                    </select>
                                </div>
                                <textarea className="ms-2 my-3 ps-3 textarea" cols="60" placeholder="Massage" rows="5"></textarea>
                                <div className="text-center">
                                    <button className="py-2 my-2 px-5 fw-semibold  fs-5 text-light submit">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footre />
        </>

    );
}