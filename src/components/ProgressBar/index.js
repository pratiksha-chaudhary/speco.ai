import './index.scss';

const ProgressBar = ({ currentProgress, total }) => {
  return (
    <div className="ProgressBar">
      {Array(currentProgress).fill(true).map(() => (
        <div className="current-progress" />
      ))}
      {Array(total - currentProgress).fill(true).map(() => (
        <div className="left-progress" />
      ))}
    </div>
  );
};

export default ProgressBar;
