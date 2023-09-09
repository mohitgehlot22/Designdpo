import { Container, Nav, Navbar, NavLink, Button, Offcanvas } from 'react-bootstrap';
import { NavbarBrand } from 'react-bootstrap';
import weblogo from './logo.svg';
import { useState } from 'react';
import Headericon from './headercrown.svg';
import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { LuRockingChair } from "react-icons/lu";
import { BiCategoryAlt } from "react-icons/bi";
import { MdHomeMini } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { AiFillHome } from "react-icons/ai";
import { Link } from 'react-router-dom';

export function Haeder() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let [popshow,setpopShow] = useState(false);

    return (
        <>
        <div className='container-fluid p-0 shadow'>
            <Container>
                <Navbar>
                    <Container>
                        <div className='row d-lg-none navbars'>
                            <div className='col-6'>
                                <NavbarBrand>
                                    <img src={weblogo} alt="" className='logoimg' />
                                </NavbarBrand>
                            </div>
                            <div className='col-6 p-0'>
                                <div className='d-lg-none text-end navbars'>
                                    <AiOutlineSearch className='fs-4 mt-2  mx-1' />
                                    <AiOutlineHeart className='fs-4 mt-2  mx-1' />
                                    <CgShoppingBag className='fs-4 mt-2  mx-1' />
                                    <Button className=' ms-1 bars' onClick={handleShow}>
                                        <AiOutlineAlignLeft className='fs-2 fw-bold' />
                                    </Button>
                                </div>
                            </div>
                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header className='shadow headerBackground' closeButton>
                                    <Offcanvas.Title>
                                        <img src={weblogo} className='logoimg' alt="" />
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <ul className='listing'>
                                        <li className='upro fw-bold'>
                                            <img src={Headericon} className='px-2 kinglogo' />
                                            Upgrade Pro
                                        </li>
                                        <li className='offItems pt-3'>
                                            Links
                                        </li>
                                        <li className='offItems'>
                                            <MdHomeMini className='me-1 fs-4'/>
                                            <Link to={'/'}>
                                              Home
                                            </Link>
                                            
                                        </li>
                                        <li className='offItems'>
                                            <LuRockingChair className='me-1 fs-4'/>
                                            <Link to={'/Explore'}>
                                              Explore
                                            </Link>
                                            
                                        </li>
                                        <li className='offItems'>
                                         <BiCategoryAlt className='me-1 fs-4'/>
                                          Category
                                        </li>
                                        <li className='offItems'>
                                         <AiOutlineInfoCircle className='me-1 fs-4'/>
                                         <Link to={'/about-us'}>
                                           About Us
                                         </Link>
                                        
                                        </li>
                                        <li className='offItems'>
                                         <FaQuestionCircle className='me-1 fs-4'/>
                                          FAQ's
                                        </li>
                                        <li className='offItems'>
                                         <BsFillTelephoneFill className='me-1 fs-4'/>
                                         <Link to={'/contect '}>
                                         Contact us
                                         </Link>
                                        </li>
                                    </ul>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <NavbarCollapse id="responsive-navbar-nav">
                            <div className='d-none navbarrr d-lg-block'>
                                <div className='d-flex justify-content-between'>
                                    <NavbarBrand>
                                        <img src={weblogo} alt="" className='logoimg' />
                                    </NavbarBrand>
                                    <Nav className="me-auto ms-3 ">
                                        <NavLink className='mx-2 fw-semibold listItem' href="#"> <Link to={'/'}>
                                              Home
                                            </Link></NavLink>
                                        <Nav.Link className='mx-2 fw-semibold list' href="#"> <Link to={'/about-us'}>
                                           About Us
                                         </Link></Nav.Link>
                                        <NavLink className='mx-2 fw-semibold list' href="#"> <Link to={'/Explore'}>
                                              Explore
                                            </Link></NavLink>
                                        <NavLink className='mx-2 fw-semibold list' href="#"> Blog</NavLink> 
                                        <NavLink className='mx-2 fw-semibold list' href="#"> <Link to={'/contect '}>
                                         Contact us
                                         </Link></NavLink>
                                    </Nav>
                                    <Nav>
                                        <Nav.Link href="#">
                                            <AiOutlineSearch className='fs-4 mt-2' />
                                        </Nav.Link>
                                        <Nav.Link href="#">
                                            <AiOutlineHeart className='fs-4 mt-2' />
                                        </Nav.Link>
                                        <Nav.Link href="#">
                                            <CgShoppingBag className='fs-4 mt-2' />
                                        </Nav.Link>
                                        <Nav.Link className='fw-bold pro pt-3' href="#">
                                            <img src={Headericon} className='px-2 ' />
                                            Upgrade Pro
                                        </Nav.Link>
                                        <Nav.Link className='fw-bold pro' href="#">
                                            <Button className='sing px-5 py-2 fw-semibold' onClick={()=>setpopShow(true)}>
                                                Sign In
                                            </Button>
                                        </Nav.Link>
                                    </Nav>
                                </div>
                            </div>
                        </NavbarCollapse>
                    </Container>
                </Navbar>
            </Container>
        </div>
        <div onClick={()=>setpopShow(false)} className={(popshow) ? 'popup' : 'pop'}>  
             
        </div>
        <div className={(popshow) ? 'popmain' : 'pop'}>
            <h1 className='fw-bold text-center py-3'>Sign In</h1>
            <p className='fw-semibold text-center px-5'>
                We will send you an One Time Password on this mobile number
            </p>
            <form className='form'>
                <label className='fs-5  fw-semibold px-2'>
                    Phone number
                </label><br />
                <input placeholder='Enter Phone Number' type="text" className='w-100 rounded' />
            </form>
            <p>
               I agree to all Terms & Conditions and Privacy Policy of DsignDpo.
            </p>
        </div>
        </>
    )
}