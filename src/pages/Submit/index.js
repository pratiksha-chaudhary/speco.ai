import SubmitButton from '../../components/SubmitButton';
import ThanksIcon from '../../assets/images/icons/icon-thankyou.svg';
import './index.scss';

const Submit = () => {
  return (
    <>
      <img className="done" src={ThanksIcon} alt="check mark" />
      <div className="heading">Thank you</div>
      <SubmitButton text="Back Home" nextRoute="/"></SubmitButton>
    </>
  );
};

export default Submit;
