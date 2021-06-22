import './index.scss';

const Email = ({ setResponse }) => {
  return (
    <div className="Email">
      <input onChange={setResponse} placeholder="Enter your email address"/>
    </div>
  );
};

export default Email;