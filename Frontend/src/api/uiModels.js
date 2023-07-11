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

const getAllErrors = async () => {
  const response = axios.get("http://localhost:8000/all-errors")
  return response;
};

const setAllErrors = async (currentErrors) => {
  const response = axios.post("http://localhost:8000/all-errors", JSON.stringify(currentErrors), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  return response;
};


export {
    getAllUiModels,
    setAllUiModels,
    getAllErrors,
    setAllErrors
};