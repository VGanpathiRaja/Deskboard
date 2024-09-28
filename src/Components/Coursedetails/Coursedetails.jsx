import React from 'react';
import styled from 'styled-components'
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
const Courseinfo = styled.div`
    padding: 10px 5px;
    .badge-info{
    background-color: #2f6896 !important;
    } 
    .badge-success{
        background-color: #91b07c !important;
    }  
`;
const Coursetitle =styled.h6` 
    font-weight: 900;
    font-size: 16px;
    color:#1a3d76;
`;
const Courseinfos =styled.h6`
    font-weight: 200;
    font-size: 14px;
    color:#1a3d76;
`;

function Coursedetails() {
  return (
    <Courseinfo>
         <ListGroup>
            <ListGroup.Item>
                <Coursetitle>Course Code</Coursetitle>
                <Courseinfos>BA3102</Courseinfos>
            </ListGroup.Item>
            <ListGroup.Item>
                <Coursetitle>Course Name</Coursetitle>
                <Courseinfos>Quantiative Techniques</Courseinfos>
            </ListGroup.Item>
            <ListGroup.Item>
                <Coursetitle>Course Type</Coursetitle>
                <Courseinfos>Program Elective</Courseinfos>
            </ListGroup.Item>
            <ListGroup.Item>
                <Coursetitle>Course Periods</Coursetitle>
                <Courseinfos>Semester -1</Courseinfos>
            </ListGroup.Item>
            <ListGroup.Item>
                <Coursetitle>Credits(4)</Coursetitle>
                <Courseinfos>Lecture - 1</Courseinfos>
                <Courseinfos>Tutorial- 3</Courseinfos>
                <Courseinfos>Practical - 2</Courseinfos>
                <Courseinfos>Project - 0</Courseinfos>
            </ListGroup.Item>
            <ListGroup.Item>
                <Coursetitle>Course Outcomes(COs)</Coursetitle>
                <Badge bg="success" className='mx-1 badge-success'>CO2</Badge>
                <Badge bg="success" className='mx-1 badge-success'>CO3</Badge>
                <Badge bg="success" className='mx-1 badge-success'>CO4</Badge>
                <Badge bg="success" className='mx-1 badge-success'>CO7</Badge>
                <Badge bg="success" className='mx-1 badge-success'>CO13</Badge>
                <Badge bg="success" className='mx-1 badge-success'>CO17</Badge>
            </ListGroup.Item>
            <ListGroup.Item>
                <Coursetitle>Mapped to the Course</Coursetitle>
                <Badge bg="info" className='mx-1 badge-info'>CO2</Badge>
                <Badge bg="info" className='mx-1 badge-info'>CO3</Badge>
                <Badge bg="info" className='mx-1 badge-info'>CO4</Badge>
                <Badge bg="info" className='mx-1 badge-info'>CO7</Badge>
                <Badge bg="info" className='mx-1 badge-info'>CO13</Badge>
            </ListGroup.Item>
        </ListGroup>
    
    </Courseinfo>
  )
}

export default Coursedetails