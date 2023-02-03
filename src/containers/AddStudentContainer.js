import { connect } from "react-redux";
import AddStudentComponent from "../components/AddStudentComponent";
import { addStudent, updateStudent, getById } from "../services/Actions/actions";

const mapDispatchToProps = (dispatch) => ({
    getStudent : id => dispatch(getById(id)),
    addStudent: student => dispatch(addStudent(student)),
    updateStudent : (id,student) => dispatch(updateStudent(id, student))
});

export default connect (null,mapDispatchToProps) (AddStudentComponent);