const FAMILY_SUBSTANCES = [
  { name: "family_alcohol", label: "Alcohol" },
  { name: "family_illegal_drugs", label: "Illegal Drugs" },
  { name: "family_prescription_drugs", label: "Prescription Drugs" },
];

const PERSONAL_SUBSTANCES = [
  { name: "personal_alcohol", label: "Alcohol" },
  { name: "personal_illegal_drugs", label: "Illegal Drugs" },
  { name: "personal_presription_drugs", label: "Prescription Drugs" },
];

const DISORDERS = [
  { name: "attention_deficit_disorder", label: "Attention Deficit Disorder" },
  { name: "bipolar", label: "Bipolar Disorder" },
  { name: "schizophrenia", label: "Schizophrenia" },
  {
    name: "obsessive_compulsive_disorder",
    label: "Obsessive Compulisize Disorder",
  },
  { name: "ptsd", label: "PTSD" },
  { name: "depression", label: "Depression" },
];

const questions = [
  {
    id: "family_history",
    text: "Do you have a family history of substance abuse?",
    choices: FAMILY_SUBSTANCES,
  },
  {
    id: "personal_history",
    text: "Do you have a personal history of substance abuse?",
    choices: PERSONAL_SUBSTANCES,
  },
  {
    id: "psychological_history",
    text: "Have you been diagnosed with any of the following Psychological diseases?",
    choices: DISORDERS,
  },
];

export default questions;
