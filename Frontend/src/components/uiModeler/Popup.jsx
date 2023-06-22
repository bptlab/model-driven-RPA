import React from "react";
import styles from "./Popup.module.css"

function Popup({ createUiModel, createUiModelPage, createUiModelElement, createUiModelElementLocatorAttribute, closePopup, inputValues, setInputValues, popupType, updatedName, setUpdatedName, updateModelName, updatePageName }) {
  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleNameChange = (e) => {
    setUpdatedName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(popupType == "model") {
      createUiModel(inputValues.applicationName,inputValues.pageName);
    } else if (popupType == "page") {
      createUiModelPage(inputValues.pageName);
    } else if (popupType == "element") {
      createUiModelElement(inputValues.elementName);
    } else if (popupType == "attribute") {
      createUiModelElementLocatorAttribute(inputValues.attributeName);
    } else if (popupType.type == "updateModelName") {
      console.log(updatedName)
      updateModelName(updatedName)
    } else if (popupType.type == "updatePageName") {
      updatePageName(updatedName)
    }
    
    closePopup();
  };

  return (
    <div className={styles.popup}>
      <div className={styles.popupContent}>
        {popupType.type == "updateModelName" && (
          <>
            <h2>Update Model Name</h2>
            <label className={styles.internalInputWrapper}>
              Application Name:
              <input className={styles.input}
                type="text"
                name="applicationName"
                defaultValue={popupType.name}
                onChange={handleNameChange}
                />
            </label>
          </>
        )}
        {popupType.type == "updatePageName" && (
          <>
            <h2>Update Page Name</h2>
            <label className={styles.internalInputWrapper}>
              Page Name:
              <input className={styles.input}
                type="text"
                name="pageName"
                defaultValue={popupType.name}
                onChange={handleNameChange}
                />
            </label>
          </>
        )}
        {popupType == "model" && (
          <h2>Add New Model</h2>
        )}
        {(popupType == "page") && (
          <h2>Add New Page</h2>
        )}
        {(popupType == "element") && (
          <h2>Add New Element</h2>
        )}
        {popupType == "attribute" && (
          <h2>Add New Attribute</h2>
        )}
        <form className={styles.form} onSubmit={handleSubmit}>
          {popupType == "model" && (
          <label className={styles.internalInputWrapper}>
            Application Name:
            <input className={styles.input}
              type="text"
              name="applicationName"
              value={inputValues.applicationName}
              onChange={handleChange}
            />
          </label>
          )}
          {(popupType == "model" || popupType == "page") && (
          <label className={styles.internalInputWrapper}>
            Page Name:
            <input className={styles.input}
              type="text"
              name="pageName"
              value={inputValues.pageName}
              onChange={handleChange}
            />
          </label>
          )}
          {(popupType == "element") && (
          <label className={styles.internalInputWrapper}>
            Element Name:
            <input className={styles.input}
              type="text"
              name="elementName"
              value={inputValues.elementName}
              onChange={handleChange}
            />
          </label>
          )}
          {(popupType == "attribute") && (
          <label className={styles.internalInputWrapper}>
            Attribute Name:
            <input className={styles.input}
              type="text"
              name="attributeName"
              value={inputValues.attributeName}
              onChange={handleChange}
            />
          </label>
          )}
          <button className={styles.button} type="submit">Add</button>
          <button className={styles.button} type="button" onClick={closePopup}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default Popup;
