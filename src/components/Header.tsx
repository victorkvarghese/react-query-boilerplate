import { Button } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import logo from '../assets/images/logo.svg';

export const Header: React.FC = () => (
  <Container>
    <div className="logo-view">
      <NavLink to="/">
        <img src={logo} className="app-logo" alt="logo" />
      </NavLink>
    </div>

    <NavLink to="/docs" activeClassName="active-link">
      <Button className="btn" variant="ghost">
        Docs
      </Button>
    </NavLink>

    <NavLink to="/about" activeClassName="active-link">
      <Button className="btn" variant="ghost">
        About
      </Button>
    </NavLink>

    <NavLink to="/help" activeClassName="active-link">
      <Button className="help-btn" variant="outline">
        HELP US
      </Button>
    </NavLink>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 12px;
  align-items: center;
  height: 60px;
  .logo-view {
    width: 100%;
  }
  .btn {
    margin: 0px 8px;
  }
  .help-btn {
    margin: 0px 18px;
  }
  .app-logo {
    width: 60px;
    height: 60px;
  }
  .active-link {
    color: #ed8936;
  }
`;
