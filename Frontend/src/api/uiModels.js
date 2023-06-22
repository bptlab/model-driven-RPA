import axios from 'axios';

const getAllUiModels = async () => {
    const response = axios.get("http://localhost:8000/all-models")
    return response;
};

const setAllUiModels = async (currentUiModelList) => {
    const response = axios.post("http://localhost:8000/all-models", JSON.stringify(currentUiModelList), {
        headers: {
          'Content-Type': 'application/json',
        },
      })
    return response;
};

export {
    getAllUiModels,
    setAllUiModels
};