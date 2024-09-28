import React, { useState } from 'react';
import './Mainstyle.css';
import { Offcanvas, Nav } from 'react-bootstrap';
import { FaBars } from "react-icons/fa6";
import { GrAppsRounded } from "react-icons/gr";
import { RxLayers } from "react-icons/rx";
import { AiOutlineLogout } from "react-icons/ai";
import styled from 'styled-components';
const Responssivebar = styled.div`
    
`;
const Sidebar =styled.div`
  position: relative;
`;
const Sidemenus = styled.div`
  background-color: #fff;
    height: 100vh;
    width: 90px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 2;
    @media (min-width: 320px) and (max-width: 480px){
      display: none;
    }
    @media (min-width: 481px) and (max-width: 768px){
      display: none;
    }
`;
const SideNav = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Responssivebar>
        <div  className='responsive-navbar'><button className="btn btn-primary toggle" onClick={handleShow}> ☰ </button></div>
      <Sidebar>
         <Sidemenus>
             <div className='logo'><FaBars /></div>
             <div className='menu-top'>
                 <div className='nav-links'><GrAppsRounded /><h4>Home</h4></div>
                 <div className='nav-links'><RxLayers /><h4>Charts</h4></div> 
             </div>
             <div className='menubottom'>
                 <div className='nav-links'><AiOutlineLogout /><h4>logout</h4></div>
             </div>
         </Sidemenus>    
        </Sidebar>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#home" >Home</Nav.Link>
            <Nav.Link href="#Charts">Charts</Nav.Link>
            {/* <Nav.Link href="#Lists">Lists</Nav.Link>
            <Nav.Link href="#Files">Files</Nav.Link>
            <Nav.Link href="#Keys">Keys</Nav.Link> */}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Responssivebar>
  );
};

export default SideNav;