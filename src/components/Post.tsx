interface IProps {
  name: string;
}
export const Post: React.FC<IProps> = (props) => (
  <div
    style={{
      width: '100%',
      height: 240,
      backgroundColor: 'rgb(60, 62, 68)',
      boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px',
      fontSize: '1.5rem',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 600,
    }}
  >
    {props.name}
  </div>
);
