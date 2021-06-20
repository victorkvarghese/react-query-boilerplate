import { Button } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import styled from '@emotion/styled';

import { ApiRequestService } from '../services/api-service';
import { useCountStore } from '../store/count-store';

const PageOne: React.FC = () => {
  const apiRequestService = ApiRequestService.createInstance();

  const { isLoading, data } = useQuery('fetchCharacters', apiRequestService.fetchCharacters);

  const count = useCountStore((state) => state.count);
  const increment = useCountStore((state) => state.increment);

  // eslint-disable-next-line no-console
  console.log('Called', isLoading, data);

  const onClick = () => {
    increment();
  };

  return (
    <Container>
      <div>PageOne {count}</div>
      <Button colorScheme="teal" onClick={onClick}>
        Click Me {3 - count} times
      </Button>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  background-color: white;
`;

export default PageOne;
