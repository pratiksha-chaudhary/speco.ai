import './index.scss';

const ProgressBar = ({ currentProgress, total }) => {
  return (
    <div className="ProgressBar">
      {Array(currentProgress)
        .fill(true)
        .map((cur, i) => (
          <div className="current-progress" key={i} />
        ))}
      {Array(total - currentProgress)
        .fill(true)
        .map((cur, i) => (
          <div className="left-progress" key={i} />
        ))}
    </div>
  );
};

export default ProgressBar;
