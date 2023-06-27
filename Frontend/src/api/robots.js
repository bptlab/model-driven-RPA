import axios from 'axios';
import Request from 'axios-request-handler';

const runRobot = async (robot) => {
    const response = axios.post("http://localhost:8000/run-robot", JSON.stringify(robot), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    return response;
};

const getAllRobots = async () => {
    const response = axios.get("http://localhost:8000/all-robots")
    return response;
};

const getCurrentErrors = async () => {
    const errors = new Request('http://localhost:8000/current-errors');
  
    try {
      const response = await errors.poll(100000).get();
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
};

export {
    runRobot,
    getAllRobots,
    getCurrentErrors
};