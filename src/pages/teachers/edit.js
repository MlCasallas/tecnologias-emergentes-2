// project imports
import TeacherForm from './components/teacherForm';

const Edit = () => {
  const teacher = {
    name: 'Juan',
    lastName: 'Pérez',
    email: 'juanperez@example.com',
    phone: '1098123456',
    address: 'Calle 456 # 78-90, Barrio La Floresta, Medellín',
    age: 35,
    gender: 'male',
    typeDocument: 'passport',
    typeSubject: 'mathematics',
    numberDocument: '1098123456',
    dateBirth: '1989-07-15'
  };

  return <TeacherForm teacher={teacher} isEdit />;
};

export default Edit;
