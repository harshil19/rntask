import {ICONS} from '../assets';

const UpcomingConsultationsData = [
  {id: 1, title: 'Dr.Marta Juarez'},
  {id: 2, title: 'Dr.Hans Gerhoff'},
];
const MedicalFilesData = [
  {id: 1, title: 'Blood tests.pdf'},
  {id: 2, title: 'Cardiology results.pdf'},
  {id: 3, title: 'Blood tests 20-02-2024.pdf'},
  {id: 4, title: 'MRI results.pdf'},
  {id: 5, title: 'Urine tests.pdf'},
  {id: 6, title: 'CT scan result.pdf'},
  {id: 7, title: 'Genetic testing.pdf'},
];
const MoreOptionData = [
  {id: 1, title: 'Settings', icon: ICONS.setting},
  {id: 2, title: 'Logout', icon: ICONS.logout},
];
const SpecialtyData = [
  {label: 'Cardiology', value: 'cardiology'},
  {label: 'Neurology', value: 'neurology'},
  {label: 'Pediatrics', value: 'pediatrics'},
];
export {
  MedicalFilesData,
  MoreOptionData,
  UpcomingConsultationsData,
  SpecialtyData,
};
