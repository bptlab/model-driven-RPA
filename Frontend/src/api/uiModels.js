const getAllUiModels = async () => {
    // const requestString = `/get-models}`;
    // const response = await fetch(requestString);
    const uiModelList = []
    return uiModelList;
};

const saveCurrentUiModels = async (currentUiModelList) => {
    const requestStringSsot = `/receive-ui-model`;
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