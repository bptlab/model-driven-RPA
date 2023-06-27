import axios from 'axios';
import Request from 'axios-request-handler';

const runRobot = async (robot) => {
    const response = await axios.post("http://localhost:8000/run-robot", JSON.stringify(robot), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log('Gett Responsee Runn ===>>>', response)
    return response;
};

const getAllRobots = async () => {
    const response = axios.get("http://localhost:8000/all-robots")
    return response;
};
export {
    runRobot,
    getAllRobots
};