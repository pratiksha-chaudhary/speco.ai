import React, { useCallback, useContext, useState } from 'react';
import SubmitButton from '../../components/SubmitButton';
import BackButton from '../../components/BackButton';
import { useParams } from 'react-router-dom';
import UserContext from '../../context/userContext';
import USER_TYPE from '../../constants/user-type';
import {
  doctorSurveyQuestions,
  patientSurveyQuestions,
} from './survey-questions';
import './index.scss';
import ProgressBar from '../../components/ProgressBar';

function Survey() {
  const [surveyData, fillSurveyData] = useState({});
  const { pageIndex } = useParams();
  const { userType } = useContext(UserContext);
  const questions =
    userType === USER_TYPE.PATIENT
      ? patientSurveyQuestions
      : doctorSurveyQuestions;
  const id = parseInt(pageIndex);
  const questionId = questions[id].id;

  const setResponse = useCallback(
    (res) => {
      fillSurveyData((prev) => {
        const updated = { ...prev };
        updated[questionId] = res;
        return updated;
      });
    },
    [questionId, fillSurveyData]
  );
  const TemplateComponent = questions[id].template;

  return (
    <>
      <ProgressBar currentProgress={id} total={questions.length} />
      <h2 className="question">{questions[id].question}</h2>
      <p className="description">{questions[id].description}</p>
      {pageIndex < questions.length && (
        <>
          <TemplateComponent
            key={id}
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
              disabled={!surveyData[questionId]}
            />
          </div>
        </>
      )}
    </>
  );
}
export default Survey;
