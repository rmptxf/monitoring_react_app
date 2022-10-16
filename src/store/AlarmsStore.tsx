import create from 'zustand';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import patients from '../data/patients';
import Alarm from '../types/AlarmEntryType';
import Patient from '../types/PatientType';

interface AlarmState {
  correspondingPatient: null | object;
  patients: Patient[];
  alarms: Alarm[];
  findPatient: (id: number) => void;
  closeAlarm: (id: number) => void;
}

const useAlarmsStore = create<AlarmState>((set) => ({
  correspondingPatient: null,
  alarms: [
    {
      id: 1,
      patient_id: 1,
      level: 1,
      alarm: 'Acoustic',
      patient_name: 'Tyrion Lannister',
      time: '12:01',
      status: true,
      room: '21',
    },
    {
      id: 2,
      patient_id: 2,
      level: 2,
      alarm: 'Fire',
      patient_name: 'Danaerys Targaryan',
      time: '12:02',
      status: false,
      room: '36',
    },
    {
      id: 3,
      patient_id: 3,
      level: 2,
      alarm: 'Faulty Sensor',
      patient_name: 'Jon Snow',
      time: '12:02',
      status: false,
      room: '07',
    },
    {
      id: 4,
      patient_id: 4,
      level: 3,
      alarm: 'Patient up',
      patient_name: 'Eddard Stark',
      time: '12:05',
      status: false,
      room: '14',
    },
    {
      id: 5,
      patient_id: 5,
      level: 1,
      alarm: 'Acoustic',
      patient_name: 'Cercei Lanister',
      time: '12:01',
      status: true,
      room: '21',
    },
    {
      id: 6,
      patient_id: 6,
      level: 2,
      alarm: 'Fire',
      patient_name: 'Tywin Lannister',
      time: '12:02',
      status: false,
      room: '36',
    },
    {
      id: 7,
      patient_id: 7,
      level: 2,
      alarm: 'Faulty Sensor',
      patient_name: 'Samwell Tarly',
      time: '12:02',
      status: false,
      room: '07',
    },
    {
      id: 8,
      patient_id: 8,
      level: 3,
      alarm: 'Patient up',
      patient_name: 'Catelyn Stark',
      time: '12:05',
      status: false,
      room: '14',
    },
    {
      id: 9,
      patient_id: 9,
      level: 1,
      alarm: 'Acoustic',
      patient_name: 'Brandon Stark',
      time: '12:01',
      status: true,
      room: '21',
    },
    {
      id: 10,
      patient_id: 10,
      level: 2,
      alarm: 'Fire',
      patient_name: 'Viserys Targaryan',
      time: '12:02',
      status: false,
      room: '36',
    },
    {
      id: 11,
      patient_id: 11,
      level: 2,
      alarm: 'Faulty Sensor',
      patient_name: 'Khal Drogo',
      time: '12:02',
      status: false,
      room: '07',
    },
    {
      id: 12,
      patient_id: 12,
      level: 3,
      alarm: 'Patient up',
      patient_name: 'Sansa Stark',
      time: '12:05',
      status: false,
      room: '14',
    },
    {
      id: 13,
      patient_id: 13,
      level: 1,
      alarm: 'Acoustic',
      patient_name: 'Stannis Baratheon',
      time: '12:01',
      status: true,
      room: '21',
    },
    {
      id: 14,
      patient_id: 2,
      level: 2,
      alarm: 'Fire',
      patient_name: 'Danaerys Targaryan',
      time: '12:02',
      status: false,
      room: '36',
    },
    {
      id: 15,
      patient_id: 3,
      level: 2,
      alarm: 'Faulty Sensor',
      patient_name: 'Jon Snow',
      time: '12:02',
      status: false,
      room: '07',
    },
    {
      id: 16,
      patient_id: 4,
      level: 3,
      alarm: 'Patient up',
      patient_name: 'Eddard Stark',
      time: '12:05',
      status: false,
      room: '14',
    },
    {
      id: 17,
      patient_id: 14,
      level: 2,
      alarm: 'Fire',
      patient_name: 'Robb Stark',
      time: '12:02',
      status: false,
      room: '36',
    },
    {
      id: 18,
      patient_id: 3,
      level: 2,
      alarm: 'Faulty Sensor',
      patient_name: 'Jon Snow',
      time: '12:02',
      status: false,
      room: '07',
    },
    {
      id: 19,
      patient_id: 4,
      level: 3,
      alarm: 'Patient up',
      patient_name: 'Eddard Stark',
      time: '12:05',
      status: false,
      room: '14',
    },
    {
      id: 21,
      patient_id: 1,
      level: 1,
      alarm: 'Acoustic',
      patient_name: 'Tyrion Lannister',
      time: '12:01',
      status: true,
      room: '21',
    },
    {
      id: 22,
      patient_id: 2,
      level: 2,
      alarm: 'Fire',
      patient_name: 'Danaerys Targaryan',
      time: '12:02',
      status: false,
      room: '36',
    },
    {
      id: 23,
      patient_id: 11,
      level: 2,
      alarm: 'Faulty Sensor',
      patient_name: 'Khal Drogo',
      time: '12:02',
      status: false,
      room: '07',
    },
    {
      id: 24,
      patient_id: 4,
      level: 3,
      alarm: 'Patient up',
      patient_name: 'Eddard Stark',
      time: '12:05',
      status: false,
      room: '14',
    },
    {
      id: 25,
      patient_id: 5,
      level: 1,
      alarm: 'Acoustic',
      patient_name: 'Cercei Lanister',
      time: '12:01',
      status: true,
      room: '21',
    },
    {
      id: 26,
      patient_id: 6,
      level: 2,
      alarm: 'Fire',
      patient_name: 'Tywin Lannister',
      time: '12:02',
      status: false,
      room: '36',
    },
    {
      id: 27,
      patient_id: 7,
      level: 2,
      alarm: 'Faulty Sensor',
      patient_name: 'Samwell Tarly',
      time: '12:02',
      status: false,
      room: '07',
    },
    {
      id: 28,
      patient_id: 8,
      level: 3,
      alarm: 'Patient up',
      patient_name: 'Catelyn Stark',
      time: '12:05',
      status: false,
      room: '14',
    },
    {
      id: 29,
      patient_id: 9,
      level: 1,
      alarm: 'Acoustic',
      patient_name: 'Brandon Stark',
      time: '12:01',
      status: true,
      room: '21',
    },
    {
      id: 30,
      patient_id: 10,
      level: 2,
      alarm: 'Fire',
      patient_name: 'Viserys Targaryan',
      time: '12:02',
      status: false,
      room: '36',
    },
    {
      id: 31,
      patient_id: 11,
      level: 2,
      alarm: 'Faulty Sensor',
      patient_name: 'Khal Drogo',
      time: '12:02',
      status: false,
      room: '07',
    },
    {
      id: 32,
      patient_id: 12,
      level: 3,
      alarm: 'Patient up',
      patient_name: 'Sansa Stark',
      time: '12:05',
      status: false,
      room: '14',
    },
  ],
  patients,
  findPatient: (id: number) =>
    set((state: AlarmState) => ({
      correspondingPatient: state.patients.filter(
        (patient: Patient) => patient.profile.id === id
      ),
    })),
  closeAlarm: (id: number) =>
    set((state: AlarmState) => ({
      alarms: state.alarms.filter((alarm: Alarm) => alarm.id !== id),
      correspondingPatient: null,
    })),
}));

export default useAlarmsStore;
