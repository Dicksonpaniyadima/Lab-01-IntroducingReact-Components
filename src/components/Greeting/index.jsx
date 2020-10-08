import React from 'react';
import {Container, Jumbotron} from 'react-bootstrap';
import './index.css';

const Greeting = ({name}) => {
  if (name.length > 0) {
    return (
      <div class ="container">
      <Jumbotron>

        <h1>Hey,{name} !  How are you doing today?</h1>
      </Jumbotron>
      </div>
    );
  } else {
    return (
      <Container>
        <Jumbotron>
          <h1>Hey, ! How are you doing today?</h1>
        </Jumbotron>
      </Container>
    );
  }
};

export default Greeting;
