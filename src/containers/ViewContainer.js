import { connect } from "react-redux";
import ViewStudentComponent from "../components/ViewStudentComponent";
import { getById } from "../services/Actions/actions";

const mapDispatchToProps = (dispatch) => ({
    getStudent : id => dispatch(getById(id))
})

export default connect( null, mapDispatchToProps ) (ViewStudentComponent);