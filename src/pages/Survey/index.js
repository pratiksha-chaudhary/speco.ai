import React, { useContext } from "react";
import SubmitButton from "../../components/SubmitButton";
import { useParams } from "react-router-dom";
import UserContext from "../../context/userContext";
import {
    doctorSurveyQuestions,
    patientSurveyQuestions,
} from "./survey-questions";
import "./index.scss";

function Survey() {
    const { pageIndex } = useParams();
    const { user } = useContext(UserContext);
    const id = parseInt(pageIndex);
    return (
        <div className="Survey">
            <h1>Survey {user}</h1>
            <SubmitButton text="Next" nextRoute={`/survey/${id + 1}`} />
        </div>
    );
}
export default Survey;
