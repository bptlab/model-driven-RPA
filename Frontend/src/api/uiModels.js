import axios from 'axios';

const getAllUiModels = async () => {
    const response = axios.get("http://localhost:8000/get-models")
    return response;
};

const saveCurrentUiModels = async (currentUiModelList) => {
    const requestStringSsot = `http://localhost:8000/receive-ui-model`;
    const response = await fetch(requestStringSsot, {
        body: currentUiModelList,
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json;charset=utf-8',
        },
    });
    return response
};

export {
    getAllUiModels,
    saveCurrentUiModels
};