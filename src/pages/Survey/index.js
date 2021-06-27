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
import BackButton from '../../components/BackButton';

function Survey() {
  const [response, setResponse] = useState();
  const { pageIndex } = useParams();
  const { user } = useContext(UserContext);
  const questions =
    user === userType.PATIENT ? patientSurveyQuestions : doctorSurveyQuestions;
  const id = parseInt(pageIndex);

  const TemplateComponent = questions[id].template;

  return (
    <>
      <h2 className="question">{questions[id].question}</h2>
      <p className="description">{questions[id].description}</p>
      {pageIndex < questions.length && (
        <>
          <TemplateComponent
            setResponse={setResponse}
            options={questions[id].options}
          />

          <div className="navigation">
            {id === 0 && <BackButton nextRoute={`/register`} />}
            {id > 0 && <BackButton nextRoute={`/survey/${id - 1}`} />}
            <SubmitButton
              text="Next"
              nextRoute={
                id === questions.length - 1 ? '/submit' : `/survey/${id + 1}`
              }
              disabled={!response}
            />
          </div>
        </>
      )}
    </>
  );
}
export default Survey;
