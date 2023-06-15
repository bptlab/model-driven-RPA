const getAllUiModels = async () => {
    // const requestString = `http://localhost:8000/get-models}`;
    // const response = await fetch(requestString);
    const uiModelList = []
    return uiModelList;
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