import { Router } from 'express';
import {
  insertStudent,
  listStudents,
  updateStudent,
  deleteStudent,
  searchStudent,
} from '../controllers/student.controller.js';
const router = Router();

/* RUTAS DE PRODUCTOS */
router.get('/', listStudents);
router.get('/:rut', searchStudent);
router.post('/', insertStudent);
router.patch('/:rut', updateStudent);
router.delete('/:rut', deleteStudent);

export default router;
