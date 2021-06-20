import styled from '@emotion/styled';
import { Grid, Progress } from '@chakra-ui/react';
import { Character } from '../components/Character';
import { Layout } from '../components/Layout';
import { queryAllCharacters } from '../services/queries';

const Welcome: React.FC = () => {
  // TODO: Enforce types and format function output
  const { isLoading, data } = queryAllCharacters();
  // eslint-disable-next-line no-console
  console.log('res', isLoading, data);

  return (
    <Layout>
      <Container>
        <div className="heading">
          <div className="heading-text">React BoilerPlate</div>
        </div>
        {isLoading && <Progress hasStripe isIndeterminate />}

        <div className="content">
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {data?.results.slice(0, 6).map((item: any) => (
              <Character key={item.id} name={item.name} />
            ))}
          </Grid>
        </div>
      </Container>
    </Layout>
  );
};
const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow-y: auto;
  background: rgb(36, 40, 47);
  min-height: 100vh;
  .heading {
    min-height: calc(50vh - 60px);
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
  }
  .heading-text {
    color: rgb(32, 35, 41);
    border: none;
    font-weight: 900;
    z-index: 1;
    font-size: 5.625rem;
  }
  .content {
    min-height: calc(50vh - 60px);
    padding: 60px 120px;
  }
  .each-section {
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
  }
`;

export default Welcome;
