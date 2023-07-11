import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import UiModelSidebar from "./UiModelSidebar";
import UiModelElement from "./UiModelElement";
import Popup from "./Popup";
import { getAllUiModels, setAllUiModels, getAllErrors } from "../../api/uiModels.js"

function UiModeler() {
  const [currentUiModelElement, setCurrentUiModelElement] = useState("default");
  const [uiModelList, setUiModelList] = useState([]);
  const [currentApplication, setCurrentApplication] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState();
  const [currentErrors, setCurrentErrors] = useState();
  const [inputValues, setInputValues] = useState({
    applicationId: "",
    applicationName: "",
    pageId: "",
    pageName: "",
    elementName: ""
  });
  const [updatedName, setUpdatedName] = useState('')

  useEffect(() => {
    setCurrentUiModelElement(currentUiModelElement)
  }, [currentUiModelElement])

  useEffect(() => {
    console.log(uiModelList)
  }, [uiModelList])

  useEffect(() => {
    getAllUiModels()
      .then((res) => {
        setUiModelList(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
    getAllErrors()
    .then((res) => {
      setCurrentErrors(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  const handleModelInterfaceChange = (updatedCurrentUiModel) => {
    setCurrentUiModelElement(updatedCurrentUiModel);
  };
  const addToUiModel = (type) => {
    setPopupType(type);
    setShowPopup(true);
  };

  const removeFromUiModel = (type, applicationName, pageName, elementName) => {
    if (type == "model") {
      let newUiModelList = uiModelList.filter((uiModel) => {
        return uiModel.application_name !== applicationName
      })
      setUiModelList(newUiModelList);
    } else if (type == "page") {
      let newUiModelList = uiModelList.map((uiModel) => {
        if (uiModel.application_name == applicationName) {
          let newPages = uiModel.pages.filter((page) => {
            return page.page_name !== pageName
          })
          uiModel = { ...uiModel, pages: newPages };
        }
        return uiModel
      })
      setUiModelList(newUiModelList);
    } else if (type == "element") {
      let newUiModelList = uiModelList.map((uiModel) => {
        if (uiModel.application_name == applicationName) {
          let newPages = uiModel.pages.map((page) => {
            if (page.page_name == pageName) {
              let newElements = page.ui_elements.filter((element) => {
                return element.element_name !== elementName
              })
              page = { ...page, ui_elements: newElements}
            }
            return page
          })
          uiModel = { ...uiModel, pages: newPages };
        }
        return uiModel
      })
      setUiModelList(newUiModelList);
    }
  };

  const updateName = (type, applicationName, pageName) => {
    if (type == "model") {
      console.log("model " + applicationName)
      setPopupType({type: "updateModelName", name: applicationName});
      setShowPopup(true);
      setCurrentApplication(applicationName);
    } else if (type == "page") {
      setPopupType({type: "updatePageName", name: pageName});
      setShowPopup(true);
      setCurrentApplication(applicationName);
      setCurrentPage(pageName);
    }
  };

  const updateModelName = (newModelName) => {
    let newUiModelList = uiModelList.map((uiModel) => {
      if (uiModel.application_name == currentApplication) {
        uiModel = {...uiModel, application_name: newModelName}
      }
      return uiModel
    })
    setUiModelList(newUiModelList);
  };

  const updatePageName = (newPageName) => {
    let newUiModelList = uiModelList.map((uiModel) => {
      if (uiModel.application_name == currentApplication) {
        let newPages = uiModel.pages.map((page) => {
          if (page.page_name == currentPage) {
            page = {...page, page_name: newPageName}
          }
          return page
        })
        uiModel = { ...uiModel, pages: newPages };
      }
      return uiModel
    })
    setUiModelList(newUiModelList);
  };



  const createUiModel = (applicationName, pageName) => {
    const newUiModel = {
      application_id: "",
      application_name: applicationName,
      pages: [{
        page_id: "",
        page_name: pageName,
        ui_elements: []
      }]
    }
    const newUiModelList = [...uiModelList, newUiModel];
    setUiModelList(newUiModelList)
  }

  const createUiModelPage = (pageName) => {
    const newUiModelList = uiModelList.map((uiModel) => {
      if (uiModel.application_name == currentApplication) {
        const updatedPages = [
          ...uiModel.pages, {
            page_id: "",
            page_name: pageName,
            ui_elements: []
          }
        ]
        uiModel.pages = updatedPages
      }
      return uiModel
    })
    setUiModelList(newUiModelList)
  }

  const createUiModelElement = (elementName) => {
    const newUiModelList = uiModelList.map((uiModel) => {
      if (uiModel.application_name == currentApplication) {
        uiModel.pages.map((page) => {
          if (page.page_name == currentPage) {
            const updatedElements = [
              ...page.ui_elements, {
                element_id: "",
                element_name: elementName,
                current_mode: "",
                element_locators: {
                  dom: {
                    text: "",
                    attributes: [],
                    tag: "",
                    path: ""
                  },
                  surface: {
                    point: {
                      absolute_coordinates: {
                        x: "",
                        y: ""
                      },
                      relative_coordinates: {
                        x: "",
                        y: ""
                      }
                    },
                    region: {
                      absolute_coordinates: {
                        one: {
                          x: "",
                          y: ""
                        },
                        two: {
                          x: "",
                          y: ""
                        },
                        three: {
                          x: "",
                          y: ""
                        },
                        four: {
                          x: "",
                          y: ""
                        },
                      },
                      relative_coordinates: {
                        one: {
                          x: "",
                          y: ""
                        },
                        two: {
                          x: "",
                          y: ""
                        },
                        three: {
                          x: "",
                          y: ""
                        },
                        four: {
                          x: "",
                          y: ""
                        },
                      }
                    },
                    image: ""
                  },
                  other: {
                    keyboard_shortcut: ""
                  }
                }
              }
            ]
            page.ui_elements = updatedElements
          }
        })
      }
      return uiModel
    })
    setUiModelList(newUiModelList)
  }

  const createUiModelElementLocatorAttribute = (attributeName) => {
    const newUiModelList = uiModelList.map((uiModel) => {
      if (uiModel.application_name == currentApplication) {
        uiModel.pages.map((page) => {
          if (page.page_name == currentPage) {
            page.ui_elements.map((element) => {
              if (element.element_name == currentUiModelElement.element_name) {
                const updatedAttributes = [
                  ...element.element_locators.dom.attributes, {
                    name: attributeName,
                    value: ""
                  }
                ]
                element.element_locators.dom.attributes = updatedAttributes
              }
            })
          }
        })
      }
      return uiModel
    })
    setUiModelList(newUiModelList)
  }

  const setCurrentUiModel = (applicationName) => {
    console.log("updated application " + applicationName)
    setCurrentApplication(applicationName)
  }

  const setCurrentUiModelPage = (pageName) => {
    setCurrentPage(pageName)
  }

  const saveCurrentUiModels = () => {
    setAllUiModels(uiModelList)
  }

  const updateUiModelElement = (uiModelListWithUpdatedElement) => {
    setUiModelList(uiModelListWithUpdatedElement)
  }

  const closePopup = () => {
    setShowPopup(false);
    setInputValues({
      applicationId: "",
      applicationName: "",
      pageId: "",
      pageName: "",
      elementName: ""
    });
  };

  return (
    <div className="coreWrapper">
      <UiModelSidebar 
        handleModelInterfaceChange={handleModelInterfaceChange} 
        uiModelList={uiModelList} 
        addToUiModel={addToUiModel} 
        setCurrentUiModel={setCurrentUiModel} 
        setCurrentUiModelPage={setCurrentUiModelPage}
        saveCurrentUiModels={saveCurrentUiModels}
        removeFromUiModel={removeFromUiModel}
        updateName={updateName}
        currentErrors={currentErrors}
      />
      <UiModelElement
        currentUiModelElement={currentUiModelElement}
        uiModelList={uiModelList}
        currentApplication={currentApplication}
        currentPage={currentPage}
        updateUiModelElement={updateUiModelElement}
        addToUiModel={addToUiModel}
      >
      </UiModelElement>
      {showPopup && (
        <Popup
          createUiModel={createUiModel}
          createUiModelPage={createUiModelPage}
          createUiModelElement={createUiModelElement}
          createUiModelElementLocatorAttribute={createUiModelElementLocatorAttribute}
          closePopup={closePopup}
          inputValues={inputValues}
          setInputValues={setInputValues}
          popupType={popupType}
          updatedName={updatedName}
          setUpdatedName={setUpdatedName}
          updateModelName={updateModelName}
          updatePageName={updatePageName}
        />
      )}
    </div>
  )
}
export default UiModeler;