import axios from "axios";

export const getSecretWord = () => {
    //Return Response from server
    // Todo: Add the exact functionality later
    return axios.get('http://localhost:3030')
        .then(response => response.data);
}