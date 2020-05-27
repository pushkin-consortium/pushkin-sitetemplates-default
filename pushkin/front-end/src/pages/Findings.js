import React from 'react';

import FindingsCard from '../components/Findings/FindingsCard';
import FindingsData from '../components/Findings/FindingsData';

import { Container, CardGroup } from 'react-bootstrap';

const FindingsPage = () => {
  return (
    <Container fluid className="text-center">
      <CardGroup className="m-5 d-block">
        {FindingsData.map(f => {
          return (
            <FindingsCard
              title={f.title}
              image={require('../assets/images/findingsPage/' + f.image)}
              description={f.description}
              link={f.link}
              url={f.url}
            />
          );
        })}
      </CardGroup>
    </Container>
  );
};

export default FindingsPage;
