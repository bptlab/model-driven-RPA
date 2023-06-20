import axios from 'axios';

const runRobot = async () => {
    const response = axios.post("http://localhost:8000/run-robot")
    return response;
};

const getAllRobots = async () => {
    const response = axios.get("http://localhost:8000/get-all-robots")
    return response;
};

export {
    runRobot,
    getAllRobots
};