import DefaultChoiceForm from "../../templates/DefaultChoiceForm";
import Email from "../../templates/Email";
import MultipleYesNoChoiceForm from "../../templates/MultipleYesNoChoiceForm";
import PhoneNumber from "../../templates/PhoneNumber";

export const doctorSurveyQuestions = [
    {
        question: "Please provide us your contact number",
        template: PhoneNumber
    },
    {
        question: "Please provide us your email",
        template: Email
    },
    {
        question:
            "Is your practice automated? Are you using technology solution or manual as of today at your clinic?",
        options: ["Automated", "Manual"],
        template: DefaultChoiceForm
    },
    {
        question: "Do you use these applications?",
        options: ["Practo", "Clinisea", "EasyClinic", "Visual Doctor", "Other"],
        template: MultipleYesNoChoiceForm
    },
    {
        question: "Are you happy with your current solution?",
        options: ["Yes", "No"],
        template: DefaultChoiceForm
    },
    {
        question: "What is your biggest concern?",
        options: ["Revenue", "Cost", "Patient satisfaction"],
        template: DefaultChoiceForm
    },
    {
        question:
            "If you are using technology solutions or packages, do you get the following?",
        options: ["Option 1", "Option 2", "Option 3"],
        template: DefaultChoiceForm
    },
    {
        question: "What would you like to improve?",
        options: [
            "An honest feedback of your performance and patient satisfaction.",
            "Help in making decisions / Optimize your consultation and spending the right amount of time with patients.",
            "Consultation that is powered by data and information.",
            "Get 360-degree patient medical information",
            "Telemedicine / remote consultation - both in terms of clinical and service quality - just a suggestion box",
            "Better user experience / Ease of use",
            "Price points",
            "Smooth transition between system and manual interventions when needed.",
            "Repeat patients / Improve patient retention",
            "With your existing system and models, are you able to create an integrated and seamless care for your patients? (in like dislike point)",
        ],
        template: DefaultChoiceForm
    },
    {
        question:
            "Is your time being wasted on mundane / admin tasks rather than focusing on the patients?",
        options: ["Yes", "No"],
        template: DefaultChoiceForm
    },
    {
        question:
            "Will you be more interested if certain parameters of a patient are provided to you before you start your consultation so better diagnosis can be achieved leading to satisfied patient care? Would you prefer patient sending his details beforehand for you to judge the acuity of case?",
        options: ["Yes", "No"],
        template: DefaultChoiceForm
    },
    {
        question:
            "Is your patient journey fragmented or smooth? Is your patient happy with the entire experience?",
        options: ["Yes", "No"],
        template: DefaultChoiceForm
    },
    {
        question:
            "Do you feel based on acuity of cases; you can actually focus on patients who are in more need of care?",
        options: ["Yes", "No"],
        template: DefaultChoiceForm
    },
    {
        question:
            "Do you feel your current system effectively takes feedback from patients?",
        options: ["Yes", "No"],
        template: DefaultChoiceForm
    },
    {
        question: "Do you feel money is being left on the table?",
        options: ["Yes", "No"],
        template: DefaultChoiceForm
    },
];

export const patientSurveyQuestions = [
    {
        question: "Please provide us your contact number",
        template: PhoneNumber
    },
    {
        question: "Please provide us your email",
        template: Email
    },
    {
        question: "What concerns you most when accessing care",
        options: [
            "Type",
            "Credibility of doctors",
            "Right doctor",
            "Location",
            "Price",
            "Past experience",
            "Diagnostic labs",
        ],
        template: DefaultChoiceForm
    },
    {
        question:
            "If you have availed of telemedicine / virtual consultation, do you experience the same level of care as you would expect?",
        options: ["Yes", "No"],
        template: DefaultChoiceForm
    },
    {
        question:
            "If you want to avail virtual consultation, what do you expect?",
        options: [
            "Does the app that you use conveniently and quickly guide you to your search and make the right appointment choices?",
            "Do you get follow up messages and reminders after the initial consultation?",
            "Does your app or Doctor conveniently offer you flexibility on accessing services such as diagnostic facilities, home care other than accessing doctors and receiving treatment?",
        ],
        template: DefaultChoiceForm
    },
    {
        question: "What do you look for when you search for a doctor?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        template: DefaultChoiceForm
    },
    {
        question:
            "Will you be comfortable with tele care if it is provided with the same level of comfort?",
        options: ["Yes", "No"],
        template: DefaultChoiceForm
    },
    {
        question: "What concerns you more while you look for service providers",
        options: ["Doctors", "Diagnostic labs", "Pharmacies"],
        template: DefaultChoiceForm
    },
    {
        question:
            "Is your doctor following up with you post consultation or treatment? ",
        options: ["Yes", "No"],
        template: DefaultChoiceForm
    },
    {
        question:
            "Do you mind to pay more if care is delivered at your home with the same level of quality?",
        options: ["Yes", "No"],
        template: DefaultChoiceForm
    },
    {
        question:
            "Would you like to receive consulted medicines at your doorstep?",
        options: ["Yes", "No"],
        template: DefaultChoiceForm
    },
];
