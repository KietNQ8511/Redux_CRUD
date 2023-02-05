import * as types from './actionType'
const initialState = {
    students: []
}

const studentReducers = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_STUDENTS:
            return {
                ...state,
                students: action.payload
            }
        case types.SAVE_STUDENT:
            return {
                ...state,
                students: state.students.map(obj => obj.studentId === action.payload.studentId ? action.payload : obj)
            }
        case types.DELETE_STUDENT:
            return {
                ...state,
                students: state.students.filter(obj => obj.studentId !== action.payload)
            }
        case types.ADD_STUDENT:
            return {
                ...state,
                students: [...state.students, action.payload]
            }
        default:
            return state;
    }
}

export default studentReducers;
