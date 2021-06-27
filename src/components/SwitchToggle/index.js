import './index.scss';

const ParentContainer = ({ className, overrideLabel, children }) => {
  if (overrideLabel) {
    return <div className={`SwitchToggle ${className}`}>{children}</div>;
  }

  return <label className={`SwitchToggle ${className}`}>{children}</label>;
};

const SwitchToggle = ({ className, overrideLabel, onClick }) => {
  return (
    <ParentContainer className={className} overrideLabel={overrideLabel}>
      <input
        type="checkbox"
        name={className}
        id={className}
        onChange={onClick}
      />
      <span className="slider">
        <span className="toggle-on">Yes</span>
        <span className="toggle-off">No</span>
      </span>
    </ParentContainer>
  );
};

export default SwitchToggle;
