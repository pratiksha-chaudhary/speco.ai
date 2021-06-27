import './index.scss';

const Option = ({ onClick, selected, children, className }) => {
  return (
    <div
      className={`Option ${selected && 'selected'} ${className}`}
      onClick={onClick || (() => {})}
    >
      {children}
    </div>
  );
};

export default Option;
