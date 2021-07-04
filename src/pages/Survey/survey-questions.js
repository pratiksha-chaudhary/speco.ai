import DefaultChoiceForm from '../../templates/DefaultChoiceForm';
import Email from '../../templates/Email';
import DefaultMultipleChoiceForm from '../../templates/DefaultMultipleChoiceForm';
import MultipleYesNoChoiceForm from '../../templates/MultipleYesNoChoiceForm';
import PhoneNumber from '../../templates/PhoneNumber';

export const doctorSurveyQuestions = [
  {
    question: 'Please provide us your contact number',
    id: '100',
    template: PhoneNumber,
  },
  {
    question: 'Please provide us your email',
    id: '101',
    template: Email,
  },
  {
    question: 'Is your practice automated?',
    id: '102',
    description:
      'Are you using technology solution or manual as of today at your clinic?',
    options: ['Automated', 'Manual'],
    template: DefaultChoiceForm,
  },
  {
    question: 'Do you use these applications?',
    id: '103',
    options: ['Practo', 'Clinisea', 'EasyClinic', 'Visual Doctor', 'Other'],
    template: MultipleYesNoChoiceForm,
  },
  {
    question: 'Are you happy with your current solution?',
    id: '104',
    options: ['Yes', 'No'],
    template: DefaultChoiceForm,
  },
  {
    question: 'What is your biggest concern?',
    id: '105',
    options: ['Revenue', 'Cost', 'Patient satisfaction'],
    template: DefaultChoiceForm,
  },
  {
    question:
      'If you are using technology solutions or packages, do you get the following?',
    id: '106',
    options: ['Option 1', 'Option 2', 'Option 3'],
    template: DefaultChoiceForm,
  },
  {
    question: 'What would you like to improve?',
    id: '107',
    options: [
      'An honest feedback of your performance and patient satisfaction.',
      'Help in making decisions / Optimize your consultation and spending the right amount of time with patients.',
      'Consultation that is powered by data and information.',
      'Get 360-degree patient medical information',
      'Telemedicine / remote consultation - both in terms of clinical and service quality - just a suggestion box',
      'Better user experience / Ease of use',
      'Price points',
      'Smooth transition between system and manual interventions when needed.',
      'Repeat patients / Improve patient retention',
      'With your existing system and models, are you able to create an integrated and seamless care for your patients? (in like dislike point)',
    ],
    template: DefaultChoiceForm,
  },
  {
    question:
      'Is your time being wasted on mundane / admin tasks rather than focusing on the patients?',
    id: '108',
    options: ['Yes', 'No'],
    template: DefaultChoiceForm,
  },
  {
    question:
      'Would you prefer patient sending his details beforehand for you to judge the acuity of case?',
    id: '109',
    options: ['Yes', 'No'],
    template: DefaultChoiceForm,
  },
  {
    question: 'Is your patient journey fragmented or smooth?',
    id: '110',
    options: ['Yes', 'No'],
    template: DefaultChoiceForm,
  },
  {
    question:
      'Do you feel based on acuity of cases; you can actually focus on patients who are in more need of care?',
    id: '111',
    options: ['Yes', 'No'],
    template: DefaultChoiceForm,
  },
  {
    question: 'Do you get effective feedback from your patients?',
    id: '112',
    options: ['Yes', 'No'],
    template: DefaultChoiceForm,
  },
  {
    question: 'Do you feel money is being left on the table?',
    id: '113',
    options: ['Yes', 'No'],
    template: DefaultChoiceForm,
  },
];

export const patientSurveyQuestions = [
  {
    question: 'Please provide us your contact number',
    id: '114',
    template: PhoneNumber,
  },
  {
    question: 'Please provide us your email',
    id: '115',
    template: Email,
  },
  {
    question: 'What concerns you most when accessing care',
    id: '116',
    options: [
      { name: 'Type', id: 1 },
      { name: 'Credibility of doctors', id: 2 },
      { name: 'Right doctor', id: 3 },
      { name: 'Location', id: 4 },
      { name: 'Price', id: 5 },
      { name: 'Past experience', id: 6 },
      { name: 'Diagnostic labs', id: 7 },
    ],
    template: DefaultMultipleChoiceForm,
  },
  {
    question:
      'If you have availed of telemedicine / virtual consultation, do you experience the same level of care as you would expect?',
    id: '117',
    options: ['Yes', 'No'],
    template: DefaultChoiceForm,
  },
  {
    question: 'If you want to avail virtual consultation, what do you expect?',
    id: '118',
    options: [
      'Does the app that you use conveniently and quickly guide you to your search and make the right appointment choices?',
      'Do you get follow up messages and reminders after the initial consultation?',
      'Does your app or Doctor conveniently offer you flexibility on accessing services such as diagnostic facilities, home care other than accessing doctors and receiving treatment?',
    ],
    template: DefaultChoiceForm,
  },
  {
    question: 'What do you look for when you search for a doctor?',
    id: '119',
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    template: DefaultChoiceForm,
  },
  {
    question:
      'Will you be comfortable with tele care if it is provided with the same level of comfort?',
    id: '120',
    options: ['Yes', 'No'],
    template: DefaultChoiceForm,
  },
  {
    question: 'What concerns you more while you look for service providers',
    id: '121',
    options: ['Doctors', 'Diagnostic labs', 'Pharmacies'],
    template: DefaultChoiceForm,
  },
  {
    question:
      'Is your doctor following up with you post consultation or treatment? ',
    id: '122',
    options: ['Yes', 'No'],
    template: DefaultChoiceForm,
  },
  {
    question:
      'Do you mind to pay more if care is delivered at your home with the same level of quality?',
    id: '123',
    options: ['Yes', 'No'],
    template: DefaultChoiceForm,
  },
  {
    question: 'Would you like to receive consulted medicines at your doorstep?',
    id: '124',
    options: ['Yes', 'No'],
    template: DefaultChoiceForm,
  },
];
