const Patients = [
  {
    profile: {
      id: 1,
      name: 'Tyrion Lannister',
      room: '1',
      date_of_birth: '11-11-2000',
      age: 20,
      gender: 'male',
      enroll_date: '11-11-2000',
      diagnosis: '',
    },
    emergency_contact: {
      name: 'Jaime Lannister',
      relation: 'Brother',
      address: "King's Landing",
      phone_number: '1234567',
      work_phone_number: '1234568',
    },
    healthcare: {
      plan: 'None',
      provider: 'None',
    },
  },
  {
    profile: {
      id: 2,
      name: 'Danaerys Targaryan',
      room: '2',
      date_of_birth: 'XX-XX-XXXX',
      age: 10,
      gender: 'female',
      enroll_date: 'XX-XX-XXXX',
      diagnosis: 'tuberculosis',
    },
    emergency_contact: {
      name: 'Jane Doe',
      relation: 'Sister',
      address: 'Average',
      phone_number: '1234567',
      work_phone_number: '1234567',
    },
    healthcare: {
      plan: 'TBC care',
      provider: 'EBA',
    },
  },
  {
    profile: {
      id: 3,
      name: 'Jon Snow',
      room: '2',
      date_of_birth: '11-11-2001',
      age: 10,
      gender: 'female',
      enroll_date: '11-11-2001',
      diagnosis: 'tuberculosis',
    },
    emergency_contact: {
      name: 'Sansa Stark',
      relation: 'Sister',
      address: "King's Landing",
      phone_number: '1234567',
      work_phone_number: '1234567',
    },
    healthcare: {
      plan: 'TBC care',
      provider: 'EBA',
    },
  },
  {
    profile: {
      id: 4,
      name: 'Eddard Stark',
      room: '2',
      date_of_birth: 'XX-XX-XXXX',
      age: 10,
      gender: 'female',
      enroll_date: 'XX-XX-XXXX',
      diagnosis: 'tuberculosis',
    },
    emergency_contact: {
      name: 'Jane Doe',
      relation: 'Sister',
      address: 'Average',
      phone_number: '1234567',
      work_phone_number: '1234567',
    },
    healthcare: {
      plan: 'TBC care',
      provider: 'EBA',
    },
  },
  {
    profile: {
      id: 5,
      name: 'Cercei Lannister',
      room: '2',
      date_of_birth: 'XX-XX-XXXX',
      age: 10,
      gender: 'female',
      enroll_date: 'XX-XX-XXXX',
      diagnosis: 'tuberculosis',
    },
    emergency_contact: {
      name: 'Jane Doe',
      relation: 'Sister',
      address: 'Average',
      phone_number: '1234567',
      work_phone_number: '1234567',
    },
    healthcare: {
      plan: 'TBC care',
      provider: 'EBA',
    },
  },
  {
    profile: {
      id: 6,
      name: 'Tywin Lannister',
      room: '2',
      date_of_birth: 'XX-XX-XXXX',
      age: 10,
      gender: 'female',
      enroll_date: 'XX-XX-XXXX',
      diagnosis: 'tuberculosis',
    },
    emergency_contact: {
      name: 'Jane Doe',
      relation: 'Sister',
      address: 'Average',
      phone_number: '1234567',
      work_phone_number: '1234567',
    },
    healthcare: {
      plan: 'TBC care',
      provider: 'EBA',
    },
  },
  {
    profile: {
      id: 7,
      name: 'Samwell Tarly',
      room: '2',
      date_of_birth: 'XX-XX-XXXX',
      age: 10,
      gender: 'female',
      enroll_date: 'XX-XX-XXXX',
      diagnosis: 'tuberculosis',
    },
    emergency_contact: {
      name: 'Jane Doe',
      relation: 'Sister',
      address: 'Average',
      phone_number: '1234567',
      work_phone_number: '1234567',
    },
    healthcare: {
      plan: 'TBC care',
      provider: 'EBA',
    },
  },
  {
    profile: {
      id: 8,
      name: 'Catelyn Stark',
      room: '2',
      date_of_birth: 'XX-XX-XXXX',
      age: 10,
      gender: 'female',
      enroll_date: 'XX-XX-XXXX',
      diagnosis: 'tuberculosis',
    },
    emergency_contact: {
      name: 'Jane Doe',
      relation: 'Sister',
      address: 'Average',
      phone_number: '1234567',
      work_phone_number: '1234567',
    },
    healthcare: {
      plan: 'TBC care',
      provider: 'EBA',
    },
  },
  {
    profile: {
      id: 9,
      name: 'Brandon Stark',
      room: '2',
      date_of_birth: 'XX-XX-XXXX',
      age: 10,
      gender: 'female',
      enroll_date: 'XX-XX-XXXX',
      diagnosis: 'tuberculosis',
    },
    emergency_contact: {
      name: 'Jane Doe',
      relation: 'Sister',
      address: 'Average',
      phone_number: '1234567',
      work_phone_number: '1234567',
    },
    healthcare: {
      plan: 'TBC care',
      provider: 'EBA',
    },
  },
  {
    profile: {
      id: 10,
      name: 'Viserys Targaryan',
      room: '2',
      date_of_birth: 'XX-XX-XXXX',
      age: 10,
      gender: 'female',
      enroll_date: 'XX-XX-XXXX',
      diagnosis: 'tuberculosis',
    },
    emergency_contact: {
      name: 'Jane Doe',
      relation: 'Sister',
      address: 'Average',
      phone_number: '1234567',
      work_phone_number: '1234567',
    },
    healthcare: {
      plan: 'TBC care',
      provider: 'EBA',
    },
  },
  {
    profile: {
      id: 11,
      name: 'Khal Drogo',
      room: '2',
      date_of_birth: 'XX-XX-XXXX',
      age: 10,
      gender: 'female',
      enroll_date: 'XX-XX-XXXX',
      diagnosis: 'tuberculosis',
    },
    emergency_contact: {
      name: 'Jane Doe',
      relation: 'Sister',
      address: 'Average',
      phone_number: '1234567',
      work_phone_number: '1234567',
    },
    healthcare: {
      plan: 'TBC care',
      provider: 'EBA',
    },
  },
  {
    profile: {
      id: 12,
      name: 'Sansa Stark',
      room: '2',
      date_of_birth: 'XX-XX-XXXX',
      age: 10,
      gender: 'female',
      enroll_date: 'XX-XX-XXXX',
      diagnosis: 'tuberculosis',
    },
    emergency_contact: {
      name: 'Jane Doe',
      relation: 'Sister',
      address: 'Average',
      phone_number: '1234567',
      work_phone_number: '1234567',
    },
    healthcare: {
      plan: 'TBC care',
      provider: 'EBA',
    },
  },
  {
    profile: {
      id: 13,
      name: 'Stannis Baratheon',
      room: '2',
      date_of_birth: 'XX-XX-XXXX',
      age: 10,
      gender: 'female',
      enroll_date: 'XX-XX-XXXX',
      diagnosis: 'tuberculosis',
    },
    emergency_contact: {
      name: 'Jane Doe',
      relation: 'Sister',
      address: 'Average',
      phone_number: '1234567',
      work_phone_number: '1234567',
    },
    healthcare: {
      plan: 'TBC care',
      provider: 'EBA',
    },
  },
  {
    profile: {
      id: 14,
      name: 'Robb Stark',
      room: '2',
      date_of_birth: 'XX-XX-XXXX',
      age: 10,
      gender: 'female',
      enroll_date: 'XX-XX-XXXX',
      diagnosis: 'tuberculosis',
    },
    emergency_contact: {
      name: 'Jane Doe',
      relation: 'Sister',
      address: 'Average',
      phone_number: '1234567',
      work_phone_number: '1234567',
    },
    healthcare: {
      plan: 'TBC care',
      provider: 'EBA',
    },
  },
];

export default Patients;
