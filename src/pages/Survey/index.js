import React, { useContext } from 'react';
import SubmitButton from '../../components/SubmitButton';
import { useParams } from 'react-router-dom';
import UserContext from '../../context/userContext';
import userType from '../../constants/user-type';
import {
  doctorSurveyQuestions,
  patientSurveyQuestions,
} from './survey-questions';
import './index.scss';

function Survey() {
  const { pageIndex } = useParams();
  const { user } = useContext(UserContext);
  const targetQuestions =
    user === userType.PATIENT ? patientSurveyQuestions : doctorSurveyQuestions;
  const id = parseInt(pageIndex);
  return (
    <div className="Survey">
      <h1>Survey {user}</h1>
      <div>{targetQuestions[pageIndex].question}</div>
      {pageIndex < targetQuestions.length - 1 && (
        <SubmitButton text="Next" nextRoute={`/survey/${id + 1}`} />
      )}
      {pageIndex >= targetQuestions.length - 1 && (
        <SubmitButton text="Next" nextRoute="/submit" />
      )}
    </div>
  );
}
export default Survey;
