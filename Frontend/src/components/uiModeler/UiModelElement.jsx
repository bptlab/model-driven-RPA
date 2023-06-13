import React, { useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import styles from './UiModelElement.module.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


function UiModelElement({currentUiModelElement, uiModelList, currentApplication, currentPage, updateUiModelElement, addToUiModel}) {
    const [currentAttribute, setCurrentAttribute] = useState("");
    const handleInputChange = (event) => {
        var { name, value } = event.target;
        console.log(name + value)
        const newUiModelList = uiModelList.map((uiModel) => {
            if(uiModel.application_name == currentApplication) {
                uiModel.pages.map((page) => {
                    if(page.page_name == currentPage) {
                        page.ui_elements.map((element) => {
                            if(element.element_name == currentUiModelElement.element_name) {
                                if (name.includes("element_locators.dom.")) {   
                                    if (name.includes("element_locators.dom.attributes")) {
                                        element.element_locators.dom.attributes.map((attribute, index) => {
                                            if(attribute.name == currentAttribute.name) {
                                                element["element_locators"]["dom"]["attributes"][index][name.replace("element_locators.dom.attributes.", "")] = value
                                            }
                                        })
                                    } else {
                                        element["element_locators"]["dom"][name.replace("element_locators.dom.", "")] = value
                                    }                    
                                } else if (name.includes("element_locators.surface.point.absolute_coordinates.")) {                     
                                    element["element_locators"]["surface"]["point"]["absolute_coordinates"][name.replace("element_locators.surface.point.absolute_coordinates.", "")] = value
                                } else if (name.includes("element_locators.surface.point.relative_coordinates.")) {                  
                                    element["element_locators"]["surface"]["point"]["relative_coordinates"][name.replace("element_locators.surface.point.relative_coordinates.", "")] = value
                                } else if (name.includes("element_locators.surface.region.absolute_coordinates.one.")) { 
                                        element["element_locators"]["surface"]["region"]["absolute_coordinates"]["one"][name.replace("element_locators.surface.region.absolute_coordinates.one.", "")] = value
                                } else if (name.includes("element_locators.surface.region.absolute_coordinates.two.")) {
                                        element["element_locators"]["surface"]["region"]["absolute_coordinates"]["two"][name.replace("element_locators.surface.region.absolute_coordinates.two.", "")] = value
                                } else if (name.includes("element_locators.surface.region.absolute_coordinates.three.")) {
                                        element["element_locators"]["surface"]["region"]["absolute_coordinates"]["three"][name.replace("element_locators.surface.region.absolute_coordinates.three.", "")] = value
                                } else if (name.includes("element_locators.surface.region.absolute_coordinates.four")) {
                                        element["element_locators"]["surface"]["region"]["absolute_coordinates"]["four"][name.replace("element_locators.surface.region.absolute_coordinates.four.", "")] = value
                                } else if (name.includes("element_locators.surface.region.relative_coordinates.")) {
                                    if (name.includes("one")) {
                                        element["element_locators"]["surface"]["region"]["relative_coordinates"]["one"][name.replace("element_locators.surface.region.relative_coordinates.one.", "")] = value
                                    } else if (name.includes("two")) {
                                        element["element_locators"]["surface"]["region"]["relative_coordinates"]["two"][name.replace("element_locators.surface.region.relative_coordinates.two.", "")] = value
                                    } else if (name.includes("three")) {
                                        element["element_locators"]["surface"]["region"]["relative_coordinates"]["three"][name.replace("element_locators.surface.region.relative_coordinates.three.", "")] = value
                                    } else if (name.includes("four")) {
                                        element["element_locators"]["surface"]["region"]["relative_coordinates"]["four"][name.replace("element_locators.surface.region.relative_coordinates.four.", "")] = value
                                    }                         
                                } else if (name.includes("element_locators.surface.image")) {                     
                                    element["element_locators"]["surface"]["image"] = value
                                } else if (name.includes("element_locators.other.keyboard_shortcut")) {
                                    element["element_locators"]["other"]["keyboard_shortcut"] = value
                                } else {
                                    element[name] = value
                                }
                                console.log("final value ", element["element_locators"]["dom"]["attributes"][name.replace("element_locators.dom.attributes.", "")])
                            }
                        })
                    }
                })
            }
            return uiModel
        });
        updateUiModelElement(newUiModelList)
    };

  return (
    <>
    {currentUiModelElement == 'default' && (
        <div className={styles.defaultScreen}>
            <h4 style={{textAlign: 'center'}}>Please select a UI Model Element to update it <br></br>or <br></br>add a UI Model Element</h4>
        </div>
    )}
    {currentUiModelElement !== "default" && (
        <form className={styles.form}>
        <label className={styles.inputWrapper}>
          Element ID:
          <input name={'element_id'} value={currentUiModelElement.element_id} className={styles.input} onChange={handleInputChange} />
        </label>
        <label className={styles.inputWrapper}>
          Element Name:
          <input name={'element_name'} onChange={handleInputChange} value={currentUiModelElement.element_name} className={styles.input}/>
        </label>
        <label className={styles.inputWrapper}>
          Current Mode:
          <input name={'current_mode'} onChange={handleInputChange} value={currentUiModelElement.current_mode} className={styles.input}/>
        </label>
        <label className={styles.inputWrapper}>
            Element Locators:
            <label className={styles.internalInputWrapper}>
                DOM:
                <label className={styles.internalInputWrapper}>
                    Text:
                    <input name={'element_locators.dom.text'} onChange={handleInputChange} value={currentUiModelElement.element_locators.dom.text} className={styles.input}/>
                </label>
                <label className={styles.internalInputWrapper}>
                    Attributes:
                    <>
                    <h5 className={styles.internalInputWrapper} style={{color:"#8230ff", cursor: "pointer"}} onClick={() => {addToUiModel("attribute")}}>+ Add Attribute</h5>
                    {currentUiModelElement.element_locators.dom.attributes.map((attribute) => (
                        <label className={styles.internalInputWrapper} style={{flexDirection: 'row'}}>
                            Name:
                            <input onClick={() => {setCurrentAttribute(attribute)}} name={'element_locators.dom.attributes.name'} onChange={handleInputChange} value={attribute.name} className={styles.input} style={{marginRight: '5%', marginLeft: '10px'}}/>
                            Value:
                            <input onClick={() => {setCurrentAttribute(attribute)}} name={'element_locators.dom.attributes.value'} onChange={handleInputChange} value={attribute.value} className={styles.input} style={{marginLeft: '10px'}}/>
                        </label>
                    ))}
                    </>
                </label>
                <label className={styles.internalInputWrapper}>
                    Tag:
                    <input name={'element_locators.dom.tag'} onChange={handleInputChange} value={currentUiModelElement.element_locators.dom.tag} className={styles.input}/>
                </label>
                <label className={styles.internalInputWrapper}>
                    Path:
                    <input name={'element_locators.dom.path'} onChange={handleInputChange} value={currentUiModelElement.element_locators.dom.path} className={styles.input}/>
                </label>
            </label>
            <label className={styles.internalInputWrapper}>
                Surface:
                <label className={styles.internalInputWrapper}>
                    Point:
                    <label className={styles.internalInputWrapper}>
                        Absolute Coordinates:
                        <label className={styles.internalInputWrapper} style={{flexDirection: 'row'}}>
                            X:
                            <input name={'element_locators.surface.point.absolute_coordinates.x'} onChange={handleInputChange} value={currentUiModelElement.element_locators.surface.point.absolute_coordinates.x} className={styles.input} style={{marginRight: '5%', marginLeft: '10px'}}/>
                            Y:
                            <input name={'element_locators.surface.point.absolute_coordinates.y'} onChange={handleInputChange} value={currentUiModelElement.element_locators.surface.point.absolute_coordinates.y} className={styles.input} style={{marginLeft: '10px'}}/>
                        </label>
                    </label>
                    <label className={styles.internalInputWrapper}>
                        Relative Coordinates:
                        <label className={styles.internalInputWrapper} style={{flexDirection: 'row'}}>
                            X:
                            <input name={'element_locators.surface.point.relative_coordinates.x'} onChange={handleInputChange} value={currentUiModelElement.element_locators.surface.point.relative_coordinates.x} className={styles.input} style={{marginRight: '5%', marginLeft: '10px'}}/>
                            Y:
                            <input name={'element_locators.surface.point.relative_coordinates.y'} onChange={handleInputChange} value={currentUiModelElement.element_locators.surface.point.relative_coordinates.y} className={styles.input} style={{marginLeft: '10px'}}/>
                        </label>
                    </label>
                </label>
                <label className={styles.internalInputWrapper}>
                    Region:
                    <label className={styles.internalInputWrapper}>
                        Absolute Coordinates:
                        <label className={styles.internalInputWrapper}>
                            One:
                            <label className={styles.internalInputWrapper} style={{flexDirection: 'row'}}>
                                X:
                                <input name={'element_locators.surface.region.absolute_coordinates.one.x'} onChange={handleInputChange} value={currentUiModelElement.element_locators.surface.region.absolute_coordinates.one.x} className={styles.input} style={{marginRight: '5%', marginLeft: '10px'}}/>
                                Y:
                                <input name={'element_locators.surface.region.absolute_coordinates.one.y'} onChange={handleInputChange} value={currentUiModelElement.element_locators.surface.region.absolute_coordinates.one.y} className={styles.input} style={{marginLeft: '10px'}}/>
                            </label>
                            Two:
                            <label className={styles.internalInputWrapper} style={{flexDirection: 'row'}}>
                                X:
                                <input name={'element_locators.surface.region.absolute_coordinates.two.x'} onChange={handleInputChange} value={currentUiModelElement.element_locators.surface.region.absolute_coordinates.two.x} className={styles.input} style={{marginRight: '5%', marginLeft: '10px'}}/>
                                Y:
                                <input name={'element_locators.surface.region.absolute_coordinates.two.y'} onChange={handleInputChange} value={currentUiModelElement.element_locators.surface.region.absolute_coordinates.two.y} className={styles.input} style={{marginLeft: '10px'}}/>
                            </label>
                            Three:
                            <label className={styles.internalInputWrapper} style={{flexDirection: 'row'}}>
                                X:
                                <input name={'element_locators.surface.region.absolute_coordinates.three.x'} onChange={handleInputChange} value={currentUiModelElement.element_locators.surface.region.absolute_coordinates.three.x} className={styles.input} style={{marginRight: '5%', marginLeft: '10px'}}/>
                                Y:
                                <input name={'element_locators.surface.region.absolute_coordinates.three.y'} onChange={handleInputChange} value={currentUiModelElement.element_locators.surface.region.absolute_coordinates.three.y} className={styles.input} style={{marginLeft: '10px'}}/>
                            </label>
                            Four:
                            <label className={styles.internalInputWrapper} style={{flexDirection: 'row'}}>
                                X:
                                <input name={'element_locators.surface.region.absolute_coordinates.four.x'} onChange={handleInputChange} value={currentUiModelElement.element_locators.surface.region.absolute_coordinates.four.x} className={styles.input} style={{marginRight: '5%', marginLeft: '10px'}}/>
                                Y:
                                <input name={'element_locators.surface.region.absolute_coordinates.four.y'} onChange={handleInputChange} value={currentUiModelElement.element_locators.surface.region.absolute_coordinates.four.y} className={styles.input} style={{marginLeft: '10px'}}/>
                            </label>
                        </label>
                    </label>
                    <label className={styles.internalInputWrapper}>
                        Relative Coordinates:
                        <label className={styles.internalInputWrapper}>
                            One:
                            <label className={styles.internalInputWrapper} style={{flexDirection: 'row'}}>
                                X:
                                <input name={'element_locators.surface.region.relative_coordinates.one.x'} onChange={handleInputChange} value={currentUiModelElement.element_locators.surface.region.relative_coordinates.one.x} className={styles.input} style={{marginRight: '5%', marginLeft: '10px'}}/>
                                Y:
                                <input name={'element_locators.surface.region.relative_coordinates.one.y'} onChange={handleInputChange} value={currentUiModelElement.element_locators.surface.region.relative_coordinates.one.y} className={styles.input} style={{marginLeft: '10px'}}/>
                            </label>
                            Two:
                            <label className={styles.internalInputWrapper} style={{flexDirection: 'row'}}>
                                X:
                                <input name={'element_locators.surface.region.relative_coordinates.two.x'} onChange={handleInputChange} value={currentUiModelElement.element_locators.surface.region.relative_coordinates.two.x} className={styles.input} style={{marginRight: '5%', marginLeft: '10px'}}/>
                                Y:
                                <input name={'element_locators.surface.region.relative_coordinates.two.y'} onChange={handleInputChange} value={currentUiModelElement.element_locators.surface.region.relative_coordinates.two.y} className={styles.input} style={{marginLeft: '10px'}}/>
                            </label>
                            Three:
                            <label className={styles.internalInputWrapper} style={{flexDirection: 'row'}}>
                                X:
                                <input name={'element_locators.surface.region.relative_coordinates.three.x'} onChange={handleInputChange} value={currentUiModelElement.element_locators.surface.region.relative_coordinates.three.x} className={styles.input} style={{marginRight: '5%', marginLeft: '10px'}}/>
                                Y:
                                <input name={'element_locators.surface.region.relative_coordinates.three.y'} onChange={handleInputChange} value={currentUiModelElement.element_locators.surface.region.relative_coordinates.three.y} className={styles.input} style={{marginLeft: '10px'}}/>
                            </label>
                            Four:
                            <label className={styles.internalInputWrapper} style={{flexDirection: 'row'}}>
                                X:
                                <input name={'element_locators.surface.region.relative_coordinates.four.x'} onChange={handleInputChange} value={currentUiModelElement.element_locators.surface.region.relative_coordinates.four.x} className={styles.input} style={{marginRight: '5%', marginLeft: '10px'}}/>
                                Y:
                                <input name={'element_locators.surface.region.relative_coordinates.four.y'} onChange={handleInputChange} value={currentUiModelElement.element_locators.surface.region.relative_coordinates.four.y} className={styles.input} style={{marginLeft: '10px'}}/>
                            </label>
                        </label>
                    </label>
                </label>
                <label className={styles.internalInputWrapper}>
                    Image:
                    <input name={'element_locators.surface.image'}onChange={handleInputChange} value={currentUiModelElement.element_locators.surface.image} className={styles.input}/>
                </label>
            </label>
            <label className={styles.internalInputWrapper}>
                Other:
                <label className={styles.internalInputWrapper}>
                    Keyboard Shortcut:
                    <input name={'element_locators.other.keyboard_shortcut'} onChange={handleInputChange} value={currentUiModelElement.element_locators.other.keyboard_shortcut} className={styles.input}/>
                </label>
            </label>
        </label>
    </form>
  )}
  </>
  )
}
export default UiModelElement;