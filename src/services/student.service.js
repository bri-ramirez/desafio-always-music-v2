import pool from "../configs/db.js";
import studentQuerys from './student.query.json' assert { type: "json" };

export const insertStudent = async () => {

  try {
    // verifica si existe
    const exist = await pool.query(studentQuerys.selectStudentByRut);

    if(exist.rowCount > 0) {
      throw new Error('¡Ya existe un estudiante con esos datos!');
    }
  
    const result = await pool.query(studentQuerys.createNewStudent);
  
    if(result.rowCount === 0) {
      throw new Error('¡No se ha podido insertar el estudiante!');
    }
    
    return true;

  } catch (error) {
    // duplicate key
    if(error.code === '23505') {
      throw new Error('¡Ya existe un estudiante con esos datos!');
    }

    throw error;
  }
}

export const deleteStudent = async () => {
  
  try {
    const result = await pool.query(studentQuerys.selectStudentByRut);

    if(result.rowCount === 0) {
      throw new Error('¡No se ha encontrado el estudiante!');
    }

    const resultDelete = await pool.query(studentQuerys.deleteStudent);
    if(resultDelete.rowCount === 0) {
      throw new Error('¡No se ha podido insertar el estudiante!');
    }
  } catch (error) {
    throw error;
  }
}

export const updateStudent = async () => {
  try {
    const exist = await pool.query(studentQuerys.selectStudentByRut);
    if(exist.rowCount === 0) {
      throw new Error('¡No se ha encontrado el estudiante!');
    }

    const result = await pool.query(studentQuerys.updateStudent);
    
    if(result.rowCount === 0) {
      throw new Error('¡No se ha podido actualizar el estudiante!');
    }

    return true;

  } catch (error) {
    throw error;
  }
}

export const listStudents = async () => {
  try {
    const results =  await pool.query(studentQuerys.selectAllStudent);
    return results.rows;
  } catch (error) {
    throw error;
  }
}

// buscar por rut
export const searchStudent = async () => {
  try {
    const result = await pool.query(studentQuerys.selectStudentByRut);

    if(result.rowCount === 0) {
      throw new Error('¡No se ha encontrado el estudiante!');
    }

    return result.rows;
  } catch (error) {
    throw error;
  }
}

export default {
  insertStudent,
  deleteStudent,
  updateStudent,
  listStudents,
  searchStudent
}