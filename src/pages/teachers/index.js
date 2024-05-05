import React from 'react';
import { Button, Grid, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import MainCard from 'components/MainCard';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import TeacherActions from './components/TeacherActions';

const createData = (document, name, lastName, address, age) => {
  return { document, name, lastName, address, age };
};

const rows = [
  createData(1053123456, 'Sofía', 'Gómez Ramírez', 'Calle 12 # 34-56, Barrio El Centro, Medellín', 35),
  createData(1053234567, 'Juan', 'Sánchez Rojas', 'Carrera 20 # 45-67, Barrio Belén, Bogotá', 29),
  createData(1053345678, 'Camila', 'Hernández López', 'Avenida Primera # 23-45, Conjunto Residencial Los Laureles, Cali', 45),
  createData(1053456789, 'Diego', 'Martínez González', 'Carrera 10 # 30-45, Barrio Las Delicias, Barranquilla', 26),
  createData(1053567890, 'Valentina', 'Rodríguez Díaz', 'Calle 80 # 12-34, Conjunto Residencial El Prado, Cartagena', 38),
  createData(1053678901, 'Mateo', 'García Pérez', 'Carrera 40 # 30-45, Barrio San Francisco, Bucaramanga', 31)
];

const Teachers = () => {
  return (
    <>
      <Grid container direction="row-reverse">
        <Button size="small" variant="contained" component={Link} to="/teachers/create">
          <PlusOutlined style={{ marginRight: 5 }} /> Add Teacher
        </Button>
      </Grid>
      <MainCard title="Teachers">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Document</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Address</TableCell>
              <TableCell align="right">Year</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.document}>
                <TableCell component="th" scope="row">
                  {row.document}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.address}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">
                  <TeacherActions teacherId={row.document} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </MainCard>
    </>
  );
};

export default Teachers;
