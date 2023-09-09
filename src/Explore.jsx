import { Footre } from "./common/Footre";
import { Haeder } from "./common/Headres";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import imgtab from './main1.jpg';
import imgtad2 from './main2.jpg';
import imgtad3 from './main3.jpg';
import imgtad10 from './main10.jpg';
import imgtad4 from './main4.jpg';
import imgtad5 from './main5.jpg';
import imgtad6 from './main6.jpg';
import imgtad7 from './main7.jpg';
import imgtad8 from './main8.jpg';
import imgtad9 from './main9.jpg';
import imgtad11 from './main11.jpg';
import imgtad12 from './main12.jpg'; 

export function Explore() {
    return (
        <>
            <Haeder />
            <div className="pt-3">
                <h1 className="container text-start fw-bold">
                  All Designs
                </h1>
                <Tabs
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example"
                    className="mb-3 tabss">
                    <Tab eventKey="home" title="All Design">
                        <Row className="py-5  container mx-auto">
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtab} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad2} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad3} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad4} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad5} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad6} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad7} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad8} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad9} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad10} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad11} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad12} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="profile" title="Bed Designs">
                        <Row className=" justify-content-center container mx-auto">
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtab} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad11} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad9} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad11} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad12} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="contact" title="Wardrobe Designs">
                        <Row className="justify-content-center container mx-auto">
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad8} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="tv" title="TV Unit Designs">
                        <Row className="justify-content-center container mx-auto">
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad4} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad5} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad6} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="Kitchen" title="Modular Kitchen Designs">
                        <Row className="justify-content-center container mx-auto">
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad7} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="Bedroom" title="Bedroom Designs">
                        <Row className="justify-content-center container mx-auto">
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad11} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="Childrens" title="Childrens Bedroom Designs">
                        <Row className="justify-content-center container mx-auto">
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad11} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad12} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad9} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad8} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="Living" title="Living Room Designs">
                        <Row className="justify-content-center container mx-auto">
                            <Col className="col-lg-3 p-2 col-12 col-md-6 ">
                                <img src={imgtad4} className="img-fluid tabimg py-2" alt="" />
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
            </div>
            <Footre />
        </>
    );
}