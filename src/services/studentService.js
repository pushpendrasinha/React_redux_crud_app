import axios from "axios";

const API_URL = "http://localhost:5000/students";

class StudentService{

    getALL(){
        return axios.get(API_URL);
    }

    add(student){
        return axios.post(API_URL, student);
    }

    getById(id){
        return axios.get(API_URL + "/" + id);
    }

    delete(id){
        return axios.delete(API_URL +  "/" + id);
    }

    update(id, student){
        return axios.put(API_URL +  "/" + id, student);
    }



}

export default new StudentService;