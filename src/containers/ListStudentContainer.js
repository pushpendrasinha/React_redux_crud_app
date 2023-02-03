import { connect } from "react-redux";
import ListStudentComponent from "../components/ListStudentComponent";
import { getStudents, deleteStudent } from "../services/Actions/actions";


const mapDispatchToProps = (dispatch) => {
    return {
        getStudents: () => dispatch(getStudents()),
        deleteStudent : id => dispatch(deleteStudent(id))   
    }
}

export default connect(null, mapDispatchToProps)(ListStudentComponent);