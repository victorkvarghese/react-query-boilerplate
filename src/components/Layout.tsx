import { Header } from './Header';

export const Layout: React.FC = (props) => (
  <>
    <Header />
    {props.children}
  </>
);
