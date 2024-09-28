import React from 'react';
import Assessement from '../Assessementchart/Assessement';
import Attendance from '../Attendancechart/Attendance';
import Programoutcome from './Programoutcome';
import Coursedetails from '../Coursedetails/Coursedetails';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFileAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Dashboard = styled.div`
    position: absolute;
    top: 155px;
    left: 105px;
    z-index: 1;
    .links{
        text-decoration: none;
        color: #043076;
        font-size: 16px;
        padding: 6px 0;
        font-weight: 800;
    }
    .links:hover{
        color: #91b07c;
    }
    @media (min-width: 320px) and (max-width: 480px){
        top: 80px;
        left:0;
    }
    @media (min-width: 481px) and (max-width: 768px){
        top: 150px;
        left: 60px;
    }
`;

const Daskbox = styled.div`
    padding: 15px 20px;
    margin: 5px;
    color: #333;
    border: 1px solid #ff;
    border-radius: 10px;
    background-color: #fff;
`;
const Maincomponent =styled.div`
    background-color: #fff;
    padding: 10px;
    border-radius:10px;
`;
const Totalstudent = styled.div`
    background-color: #e6e6e6;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    padding: 10px;
    margin: 6px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Dasktitle = styled.h1`
    color: #043076;
`;
const Daskinnerbox = styled.div`
     display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 10px 15px;
    height: 105px;
`;
const Daskinnerpara = styled.p`
    color: #1a3d76;
    padding: 5px;
    font-weight: 900;
    font-size: 12px;
`;
const Daskinnerheading = styled.h5`
    color: #043076 !important;
    font-size: 16px;
`;


export default function Daskboard() {
  return (
    <Dashboard>
        <Container fluid>
        <Row >
            <Col sm={12} xs={12} md={12} lg={2} xl={2}>
                <Dasktitle >Dash Board</Dasktitle>
            </Col>
        </Row>
        <Row>
            <Col sm={12} xs={12} md={12} lg={2} xl={2}>
                 <Link to='#' className='links'>Program Education Objectives PEOs</Link>
            </Col>
            <Col sm={12} xs={12} md={12} lg={2} xl={2} className='link' >
                <Link to='#' className='links '> PEOs ans pos</Link>
            </Col>
        </Row>
        <Row className='count'>
            <Col sm={12} xs={12} md={12} lg={2} xl={2}>
                <Daskbox >
                    <Daskinnerheading>All</Daskinnerheading>
                </Daskbox>
            </Col>
            <Col sm={12} xs={12} md={12} lg={2} xl={2} >
                <Daskbox>
                    <Daskinnerbox>
                        <div>
                            <Daskinnerpara>Peo-1</Daskinnerpara>
                            <Daskinnerheading>Employability</Daskinnerheading>
                        </div>
                        <div><FaFileAlt /></div>
                    </Daskinnerbox>
                </Daskbox>
            </Col>
            <Col sm={12} xs={12} md={12} lg={2} xl={2} >
            <Daskbox>
                    <Daskinnerbox>
                        <div>
                            <Daskinnerpara>Peo-2</Daskinnerpara>
                            <Daskinnerheading>Entreprenue</Daskinnerheading>
                        </div>
                        <div><FaFileAlt /></div>
                    </Daskinnerbox>
                </Daskbox>
            </Col>
            <Col sm={12} xs={12} md={12} lg={2} xl={2} >
            <Daskbox>
                    <Daskinnerbox>
                        <div>
                            <Daskinnerpara>Peo-3</Daskinnerpara>
                            <Daskinnerheading>Reachesh & Development</Daskinnerheading>
                        </div>
                        <div><FaFileAlt /></div>
                    </Daskinnerbox>
                </Daskbox>
            </Col>
            <Col sm={12} xs={12} md={12} lg={2} xl={2} >
            <Daskbox>
                    <Daskinnerbox>
                        <div>
                            <Daskinnerpara>Peo-4</Daskinnerpara>
                            <Daskinnerheading>Contribution to bussiness World</Daskinnerheading>
                        </div>
                        <div><FaFileAlt /></div>
                    </Daskinnerbox>
                </Daskbox>
            </Col>
            <Col sm={12} xs={12} md={12} lg={2} xl={2} >
            <Daskbox>
                    <Daskinnerbox>
                        <div>
                            <Daskinnerpara>Peo-5</Daskinnerpara>
                            <Daskinnerheading>Contribution of socity</Daskinnerheading>
                        </div>
                        <div><FaFileAlt /></div>
                    </Daskinnerbox>
                </Daskbox>
            </Col>
        </Row>



        <Row className="mt-3">
            <Col sm={12} xs={12} md={12}  lg={3} xl={3}>
                <Programoutcome/>
            </Col>
            <Col sm={12} xs={12} md={12} lg={9} xl={9}>
                <Row className='my-1'>
                    <Col sm={12} xs={12} md={6}>
                        <Link to='#' className='links'>Course Reports </Link>
                    </Col>
                    <Col sm={12} xs={12} md={6}  className='text-end' >
                        <Link to='#' className='links'>OPE Evalution Reports</Link>
                    </Col>
                </Row>
                <Maincomponent>
                    <Row>
                        <Col sm={12} xs={12} md={12} lg={3} xl={3}>
                            <Coursedetails/>
                        </Col>
                        <Col sm={12} xs={12} md={12} lg={9} xl={9}>
                            <Row>
                                <Col sm={12} xs={12} md={12} lg={6} xl={6}>
                                    <Row>
                                        <Col sm={12} xs={12} md={12} lg={6} xl={6} >
                                            <Totalstudent>
                                                <h6>Total Students</h6>
                                                <h5>102</h5>
                                            </Totalstudent>
                                        </Col>
                                        <Col sm={12} xs={12} md={12} lg={6} xl={6}>
                                            <Totalstudent>
                                                <h6>Course Average Marks</h6>
                                                <h5>85%</h5>
                                            </Totalstudent>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm={12} xs={12} md={12} lg={6} xl={6}></Col>
                            </Row>
                            <Row>
                                <Col sm={12} xs={12} md={12} lg={12} xl={12}>
                                    <Assessement/>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={12} xs={12} md={12} lg={12} xl={12}>
                                    <Attendance/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Maincomponent>    
            </Col>
        </Row>
    </Container>
    </Dashboard>
  )
}
