import React, { useContext, useState } from 'react';
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
  const [response, setResponse] = useState();
  const { pageIndex } = useParams();
  const { user } = useContext(UserContext);
  const targetQuestions =
    user === userType.PATIENT ? patientSurveyQuestions : doctorSurveyQuestions;
  const id = parseInt(pageIndex);

  const TemplateComponent = targetQuestions[id].template;

  return (
    <div className="Survey">
      <h2>{targetQuestions[id].question}</h2>
      {pageIndex < targetQuestions.length - 1 && (
        <>
          {<TemplateComponent setResponse={setResponse} />}
          <SubmitButton
            text="Next"
            nextRoute={`/survey/${id + 1}`}
            disabled={!response}
          />
        </>
      )}
      {pageIndex >= targetQuestions.length - 1 && (
        <SubmitButton text="Next" nextRoute="/submit" />
      )}
    </div>
  );
}
export default Survey;
