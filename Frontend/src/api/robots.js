import axios from 'axios';

const runRobot = async () => {
    const response = axios.post("http://localhost:8000/run-robot")
    return response;
};

export {
    runRobot
};