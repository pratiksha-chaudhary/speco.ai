import './index.scss';

const Option = ({ onClick, selected, children, className, selectionClass }) => {
  return (
    <div
      className={`Option ${selected && selectionClass} ${className}`}
      onClick={onClick || (() => {})}
    >
      {children}
    </div>
  );
};

export default Option;
