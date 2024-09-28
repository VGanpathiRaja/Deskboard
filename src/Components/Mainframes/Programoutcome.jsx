import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge';
import ProgressBar from 'react-bootstrap/ProgressBar';
const Topcontent =styled.div`
  background-color: #fff;
  padding: 10px;
  border: 1px solid #fff3;
  .badge-info{
    background-color: #2f6896 !important;
    } 
   .progbar{
    height: 4px;
    margin: 6px 0
    } 
`;
const Progtitle =styled.h5`
    font-weight: 900;
    font-size: 14px;
    color:#1a3d76;
`;

export default function Topcontens() {
  return (
    <Topcontent>
        <h4>Program Outcomes</h4>
        <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
          <Accordion.Header>
           <Badge bg="info" className='mx-1 badge-info'>PO1 </Badge>
            <span className='text-muted'>Evalution<b>  5 out 12 </b></span>
          </Accordion.Header>
        <Accordion.Body>
        <Progtitle>Desicion Making Skill</Progtitle>
        <ProgressBar variant="warning" className='progbar'  now={60} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
      <Accordion.Header>
           <Badge bg="info" className='mx-1 badge-info'>PO1 </Badge>
            <span className='text-muted'>Evalution<b>  5 out 12 </b></span>
          </Accordion.Header>
        <Accordion.Body>
        <Progtitle>Desicion Making Skill</Progtitle>
        <ProgressBar variant="warning" className='progbar' now={60} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
      <Accordion.Header>
           <Badge bg="info" className='mx-1 badge-info'>PO1 </Badge>
            <span className='text-muted'>Evalution<b>  5 out 12 </b></span>
          </Accordion.Header>
        <Accordion.Body>
        <Progtitle>Desicion Making Skill</Progtitle>
        <ProgressBar variant="warning" className='progbar' now={60} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
      <Accordion.Header>
           <Badge bg="info" className='mx-1 badge-info'>PO1 </Badge>
            <span className='text-muted'>Evalution<b>  5 out 12 </b></span>
          </Accordion.Header>
        <Accordion.Body>
        <Progtitle>Desicion Making Skill</Progtitle>
        <ProgressBar variant="warning" className='progbar' now={60} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
      <Accordion.Header>
           <Badge bg="info" className='mx-1 badge-info'>PO1 </Badge>
            <span className='text-muted'>Evalution<b>  5 out 12 </b></span>
          </Accordion.Header>
        <Accordion.Body>
        <Progtitle>Desicion Making Skill</Progtitle>
        <ProgressBar variant="warning" className='progbar' now={60} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
      <Accordion.Header>
           <Badge bg="info" className='mx-1 badge-info'>PO1 </Badge>
            <span className='text-muted'>Evalution<b>  5 out 12 </b></span>
          </Accordion.Header>
        <Accordion.Body>
        <Progtitle>Desicion Making Skill</Progtitle>
        <ProgressBar variant="warning" className='progbar' now={60} />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Topcontent>
  )
}
