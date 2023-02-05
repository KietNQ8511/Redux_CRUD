import * as types from './actionType'
import * as api from '../api/studentApi'
import axios from 'axios'

export const getStudents = (students) => ({
    type: types.GET_STUDENTS,
    payload: students
})

export const deleteStudents = (studentId) => ({
    type: types.DELETE_STUDENT,
    payload: studentId
})

export const save = (student) => ({
    type: types.SAVE_STUDENT,
    payload: student
})

export const add = (student) => ({
    type: types.ADD_STUDENT,
    payload: student
})


export const apiGetStudents = () => {
    return function(dispatch) {
        axios
            .get(api.GET_STUDENT_LIST, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                dispatch(getStudents(response.data))
            })
            .catch((error) => console.log(`error:  ${error}`))
    }
}

export const apiSaveStudent = (student) => {
    return function(dispatch) {
        axios
            .post(api.SAVE_STUDENT, student ,{
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                dispatch(save(student));
                console.log(`response: ${response}`);
            })
            .catch((error) => console.log(`error: ${error}`))
    }
}

export const apiDeleteStudent = (studentId) => {
    console.log(studentId);
    return function(dispatch) {
        axios
            .delete(`${api.DELETE_STUDENT}/${studentId}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                dispatch(deleteStudents(studentId));
                console.log(`StudentId ${studentId} was delete`);
            })
            .catch((error) => console.log(`error: ${error}`))
    }
}

export const apiAddStudent = (student) => {
    return function(dispatch) {
        axios
            .post(api.ADD_STUDENT, student ,{
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                dispatch(add(student));
                console.log(`response: ${response}`);
            })
            .catch((error) => console.log(`error: ${error}`))
    }
}