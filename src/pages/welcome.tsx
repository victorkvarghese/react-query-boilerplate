import styled from '@emotion/styled';
import { Grid, Progress } from '@chakra-ui/react';
import { Post } from '../components/Post';
import { Layout } from '../components/Layout';
import { queryAllPosts } from '../services/queries';

const Welcome: React.FC = () => {
  const { isLoading, data } = queryAllPosts();

  return (
    <Layout>
      <Container>
        <div className="heading">
          <div className="heading-text">React BoilerPlate</div>
        </div>
        {isLoading && <Progress hasStripe isIndeterminate />}

        <div className="content">
          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            {data?.slice(0, 6).map((item: any) => (
              <Post key={item.id} name={item.title} />
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
