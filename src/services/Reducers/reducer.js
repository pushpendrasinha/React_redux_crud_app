import { useState } from "react";
import { ADD_STUDENT, RETRIEVE_STUDENT, UPDATE_STUDENT, DELETE_STUDENT, ADD_STUDENT_FAILED, RETRIEVE_SINGLE_STUDENT } from "../Constants/constants";
import studentService from "../studentService";

let initialState = [];

export default function(state = initialState, action ){
    const { type, payload } = action;

    switch(action){
        case RETRIEVE_STUDENT: return payload.students

        case ADD_STUDENT: return {
            ...state,
            payload
        }

        case RETRIEVE_SINGLE_STUDENT: return payload.student

        case DELETE_STUDENT: return state.filter((id) => id !== payload.id )

        case ADD_STUDENT_FAILED: return null

        case UPDATE_STUDENT: return state.map((student) => {
            if (student.id === payload.id){
                return {
                    ...state,
                    ...payload,
                }
            }else{
                return state;
            }
        })

        default: return state;
    }

}