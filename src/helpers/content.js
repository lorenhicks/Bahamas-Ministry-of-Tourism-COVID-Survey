export const tripSurveyContent = {
  title: "Bahamas Ministry of Tourism | Bahamas Ministry of Health",
  sub_title: "Bahamas Health Travel Visa Survey",
  info_parapgraphs: [
    "The Islands of The Bahamas has implemented a series of public health measures to protect the wellbeing of all citizens, residents and visitors. The following health survey is an important part of preventing the spread of COVID-19 and ensuring The Bahamas is safe for all to enjoy. ",
    "All travelers are required to complete this short survey each day of their trip, starting on their arrival date (Day 1) or a maximum of 14-days."
  ],
  commitLabel: "I commit to completing this survey every day of my trip",
  verifyTravelerInformatiionLabel:
    "I verify that the above information is correct"
};

export const tripSurveyQuestions = {
  closeContact: {
    fieldKey: "closeContact",
    label:
      "1. Within the past 24-hours, did you have close contact with anyone who has tested positive or has shown symptoms of COVID-19? (Close contact is defined as contact for more than 15 minutes and within less than 6 feet)",
    required: true
  },
  symptoms: {
    fieldKey: "symptoms",
    label:
      "2. Within the past 24-hours have you experienced any of the following symptoms? Please select all that apply.",
    required: true
  },
  certifySigns: {
    fieldKey: "certifySigns",
    label:
      "3. I certify that I do not currently have COVID-19 symptoms and, in the last 24 hours, have not had close contact with anyone showing signs of COVID-19.",
    required: true
  },
  abideHealthMeasures: {
    fieldKey: "abideHealthMeasures",
    label:
      "4. I will continue to abide by The Bahamas' public health measures, including wearing a face mask, regularly washing and sanitizing hands, and following physical distancing protocols.",
    required: true
  }
};

export const symptomList = {
  fever: {
    fieldKey: "fever",
    label: "Fever (>100.4° F) or Chills"
  },
  chills: {
    fieldKey: "chills",
    label: "Chills"
  },
  cough: {
    fieldKey: "cough",
    label: "Dry cough"
  },
  shortnessBreath: {
    fieldKey: "shortnessBreath",
    label: "Shortness of breath of difficulty breathing"
  },
  fatigue: {
    fieldKey: "fatigue",
    label: "Fatigue"
  },
  bodyAches: {
    fieldKey: "bodyAches",
    label: "Muscle and body aches"
  },
  headache: {
    fieldKey: "headache",
    label: "Headache"
  },
  tasteLoss: {
    fieldKey: "tasteLoss",
    label: "Loss of taste"
  },
  smellLoss: {
    fieldKey: "smellLoss",
    label: "Loss of smell"
  },
  soreThoat: {
    fieldKey: "soreThoat",
    label: "Sore throat"
  },
  congestion: {
    fieldKey: "congestion",
    label: "Congestion or runny nose"
  },
  nausea: {
    fieldKey: "nausea",
    label: "Nausea"
  },
  vomiting: {
    fieldKey: "vomiting",
    label: "Vomiting"
  },
  diarrhea: {
    fieldKey: "diarrhea",
    label: "Diarrhea"
  },
  abPain: {
    fieldKey: "abPain",
    label: "Abdominal pain"
  },
  none: {
    fieldKey: "none",
    label: "None of the above"
  }
};

export const documentationContent = {
  title: "Think Simple: Survey Tech Challenge",
  subtitle:
    "Implement the COVID-19 travel survey (images below) to be issued to travelers while in the Bahamas. After the traveler submits their responses, update the interface to show a high or low risk message.",
  tip_list: [
    "All fields are required before allowing the traveler to submit",
    "Use a combination of Class and Function Components",
    "Mobile responsiveness will be tested",
    "Design/branding can be improved",
    "Make sure traveler can restart survey"
  ],
  resource_title: "Resources",
  resource_list: [
    {
      label: "Semantic UI",
      link: "https://react.semantic-ui.com"
    }
  ]
};
