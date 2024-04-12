import { errorMessage, successMessage, tableMessage, titleMessage } from '../helpers/message.js';

import studentService from '../services/student.service.js';

export const insertStudent = async (req, res) => {
  try {
    await studentService.insertStudent()

    successMessage('¡Estudiante insertado correctamente!');
    res.json({
      message: '¡Estudiante insertado correctamente!'
    });
  } catch (error) {
    errorMessage('¡No se ha podido insertar el estudiante!');
    res.status(400).json({
      message: '¡No se ha podido insertar el estudiante!'
    })
  }
}

export const listStudents = async (req, res) => {
  try {
    const result = await studentService.listStudents()

    titleMessage('Listado de estudiantes');
    tableMessage(result);
    res.json(result)
  } catch (error) {
    errorMessage('¡No se han podido listar los estudiante!');

    res.status(400).json({
      message: '¡No se han podido listar los estudiante!'
    })
  }
}

export const updateStudent = async (req, res) => {
  try {
    await studentService.updateStudent()

    successMessage('¡Estudiante actualizado correctamente!')
    res.json({
      message: '¡Estudiante actualizado correctamente!'
    })

  } catch (error) {
    errorMessage('¡No se ha podido actualizar el estudiante!')
    res.status(400).json({
      message: '¡No se ha podido actualizar el estudiante!'
    })
  }
}

export const deleteStudent = async (req, res) => {
  try {
    await studentService.deleteStudent()

    successMessage('¡Estudiante eliminado correctamente!')
    res.json({
      message: '¡Estudiante eliminado correctamente!'
    });

  } catch (error) {
    errorMessage('¡No se ha podido eliminar el estudiante!')

    res.status(400).json({
      message: '¡No se ha podido eliminar el estudiante!'
    })
  }
}

export const searchStudent = async (req, res) => {
  try {
    const result = await studentService.searchStudent();

    titleMessage('Estudiante encontrado');
    tableMessage(result);
    res.json(result)
  } catch (error) {
    errorMessage('¡No se ha podido encontrar el estudiante!')

    res.status(400).json({
      message: '¡No se ha podido encontrar el estudiante!'
    })
  }
}