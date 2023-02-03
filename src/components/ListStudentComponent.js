import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ListStudentComponent = (props) => {
    const [students, setStudents] = useState([]);

    useEffect( () => {
        getStudents();
    },[]);

    const getStudents = () => {
        props.getStudents().then(res => {
            setStudents(res.payload.students);
            // console.log(res.payload.students, "Redux working");
        })
    }

    const removeStudent = (id) => {
        console.log(props.deleteStudent(id));
        // // studentService.delete(id).then( res => {
        // //     setStudents(students => students.filter(student => student.id != id));
        // //     console.log(res.data);
        // // }).then(() => {
        // //     getStudents();
        // // }).catch(error => {
        // //     console.log(error);
        // // });
        // props.deleteStudent(id).then(() => {
            getStudents();
        // })
        
    }

    return (
        <div className="container">
        <h2 className="text-center mt-2">Student Details</h2>
        <hr />
        <div className="text-left">
            <Link to={"/add"} className="btn btn-primary btn-left">Add Student</Link>
        </div>
        <table className="table table-bordered table-striped" style={{ marginTop: "5%" }} >
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>{
                students.map(
                    student =>
                        <tr key={student.id}>
                            <td>{student.firstname}</td>
                            <td> {student.email} </td>
                            <td> {student.mobile} </td>
                            <td>
                                 <Link to={"/update" + "/" + student.id } className="btn btn-sm btn-primary">Edit</Link>
                                <button type="button" className="btn btn-sm btn-danger button-space" 
                                onClick={ () => removeStudent(student.id) } > Delete </button>
                                <Link to={"/view" + "/" + student.id } className="btn btn-sm btn-info button-space">View</Link>
                            </td>
                        </tr>
                )
            }
            </tbody>
        </table>
    </div>
    )

}

export default ListStudentComponent;