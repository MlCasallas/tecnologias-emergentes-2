// project imports
import { useState, useEffect } from 'react';
import StudentForm from './components/studentForm';

const Edit = () => {
  const student = {
    name: 'Juan',
    lastName: 'Pérez',
    email: 'juanperez@example.com',
    phone: '1053678901',
    address: 'Calle 456 # 78-90, Barrio La Floresta, Medellín',
    age: 25,
    gender: 'male',
    typeDocument: 'passport',
    typeSubject: 'machine_learning',
    numberDocument: '1053678901',
    dateBirth: '1999-03-21'
  };

  return <StudentForm student={student} isEdit />;
};

export default Edit;
