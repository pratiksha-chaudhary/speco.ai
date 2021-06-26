import './index.scss';

const Option = ({ onClick, selected, children }) => {
  return <div className={`Option ${selected && 'selected'}`} onClick={onClick}>{children}</div>;
};

export default Option;
