import studentService from "../studentService";
import { ADD_STUDENT, RETRIEVE_STUDENT, UPDATE_STUDENT, DELETE_STUDENT, ADD_STUDENT_FAILED, RETRIEVE_SINGLE_STUDENT } from "../Constants/constants";
import axios from "axios";

export const getStudents = () =>  async (dispatch)  => {
  try{
    const res = await studentService.getALL();
    return dispatch({
      type : RETRIEVE_STUDENT,
      payload :  {students: res.data},
    })
    console.log(res.data)
  }catch (err) {
          console.log(err);
        } 
      }
//         // return studentService.getALL().then(
//         //     (res) => {
//         //         dispatch({
//         //             type: RETRIEVE_STUDENT,
//         //             payload: {students: res.data}
                    
//         //         });console.log(res.data)
//         //         return Promise.resolve();
//         //     }
//         // )
//         // const request = studentService.getALL()
//         // return{
//         //   type: RETRIEVE_STUDENT,
//         //   payload : request
//         // }
// }
       
    

    // export const getStudents = () => async (dispatch) => {
    //     try {
    //       const res = await studentService.getALL();
      
    //       dispatch({
    //         type: RETRIEVE_STUDENT,
    //         payload: {students: res.data},
    //       }); 
    //       console.log(res.data)
    //     } catch (err) {
    //       console.log(err);
    //     }        
    //   };

// const fetchPostsSuccess = students => ({
//   type: RETRIEVE_STUDENT,
//   payload: { students }
// })

// /*asynchronous thunk action creator
// calls the api, then dispatches the synchronous action creator
// */
// export const getStudents =  () => {
//   return async dispatch => {
//       try {
//           let students = await axios.get("http://localhost:5000/students");
//           dispatch(fetchPostsSuccess(students.data.splice(0, 5))) //store first five posts
//           console.log(students.data.splice(0, 5))
//       }
//       catch(e){
//           console.log(e)
//       }
//   }
// }

    export const addStudent = (student) => (dispatch) => {
      return studentService.add(student).then((res) => {
          dispatch({
            type: ADD_STUDENT,
            payload : res.data,
          });
          return Promise.resolve();
        },(error) =>{
          dispatch({
            type: ADD_STUDENT_FAILED
          });
          console.log(error, "ADD_STUDENT_FAILED" );
          return Promise.reject();
        }
      )
    }

    export const getById = (id) =>  async (dispatch)  => {
      try{
        const res = await studentService.getById(id);
        return dispatch({
          type : RETRIEVE_SINGLE_STUDENT,
          payload :  {student: res.data},
        })
        console.log(res.data)
      }catch (err) {
              console.log(err);
            } 
          }

    // export const removeSelectedProduct = (id) => {
    //   return {
    //     type: DELETE_STUDENT,
    //     payload: id,
    //   };
    // };

    // export const deleteStudent = (id) => {
    //   return async (dispatch) => {
    //     dispatch(removeSelectedProduct(id));
    //     try {
    //       console.log(id); // this is for test, and i see in console that proper id is printed
    //       await studentService.delete(id);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };
    // };

    export const deleteStudent = (id) => (dispatch)  => {
      try{
        const res = studentService.delete(id);
        return dispatch({
          type : DELETE_STUDENT,
          payload :  id
        })
      }catch (err) {
              console.log(err);
            } 
          }

    export const updateStudent = (id, student) => async (dispatch) => {
      try{
        const res = await studentService.update(id, student);
         dispatch({
          type: UPDATE_STUDENT,
          payload: student
        })
        return Promise.resolve(student);
        console.log(res.data);
      }catch(err){
        return Promise.reject(err);
      }
    }

   