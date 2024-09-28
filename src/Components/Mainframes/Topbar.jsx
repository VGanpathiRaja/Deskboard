import React from 'react';
import styled from 'styled-components';
import { IoIosSearch } from "react-icons/io";
import { GiVikingLonghouse } from "react-icons/gi";
import User from '../../Assets/user-1.jpg'
import Logoimg from '../../Assets/logo.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
const Overalltop = styled.div`
    background-color: #fff;
    padding: 10px 0;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 2;
    box-shadow: rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px;
`;
const Logo = styled.img`
    width: 115px;
    height: 70px;
    @media (min-width: 320px) and (max-width: 480px){
        width: 100%;
        height: 150px;
    }
`;
const Logopart = styled.div`
    display: flex;
    justify-content: start  ;
    align-items: center;
    @media (min-width: 320px) and (max-width: 480px){
        display: none;
    }
`;
const Authorpart =styled.div`
    background: #ffffff29;
    padding: 5px 10px;
    margin: 0 6px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Athour = styled.h3`
    font-size: 12px;
    padding: 10px;
    color: #1a3d76;
`;
const Authorimg =styled.img`
     width: 35px;
    height: 35px;
    border-radius: 50%;
`;
export default function Topbar() {
  return (
      <Overalltop>
            <Container>
                <Row className='d-flex align-items-center'>
                    <Col md={7}>
                        <Logopart>
                            <Logo src={Logoimg}  alt='logo'/>
                            <div className='d-flex justify-content-between align-items-center'>
                                <GiVikingLonghouse />
                                <Form.Select className='px-5 mx-2 text-center'>
                                <option>Choose</option>
                                    <option value="1">Chennai</option>
                                    <option value="2">Bangalore</option>
                                    <option value="3">Mumbai</option>
                                </Form.Select>
                            </div>
                        </Logopart>
                    </Col>
                    <Col  md={5}>
                        <div className='d-flex justify-content-around align-items-center '>
                            <div className=' d-flex justify-content-end align-items-center px-2 mx-5'>
                                <input type='text' name='search' id='searchitem' className='search mx-1'/>
                                <IoIosSearch />
                            </div>
                            <Authorpart>
                                <Athour>Williams Super Admin  </Athour>
                                <Authorimg src={User} alt='user'/>
                            </Authorpart>
                        </div>
                    </Col>
                </Row>
            </Container>
      </Overalltop>
  )
}
