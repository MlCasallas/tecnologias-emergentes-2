import { useRoutes } from 'react-router-dom';

// project import
import MainRoutes from './MainRoutes';

//Students
import StudentsRoutes from './StudentsRoutes';
import TeachersRoutes from './TeachersRoutes';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([MainRoutes, StudentsRoutes, TeachersRoutes]);
}
