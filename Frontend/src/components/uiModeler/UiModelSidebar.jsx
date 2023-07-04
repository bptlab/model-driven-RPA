import React, { useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import styles from './UiModelSidebar.module.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'


function UiModelSidebar({handleModelInterfaceChange, uiModelList, addToUiModel, setCurrentUiModel, setCurrentUiModelPage, saveCurrentUiModels, removeFromUiModel, updateName}) {

  return (
    <div className="sidebarWrapper">
        <Sidebar rootStyles={{backgroundColor: '#ebf1f4', height: '100%', width: '100%'}}>
            <Menu menuItemStyles={{
                root: ({ level, active}) => {
                    return {
                        color: 'black',
                        backgroundColor: '#f5f7f7'
                    };
                }
                }}
            >
                {/* <MenuItem >
                        <p style={{fontSize: '30px', textAlign: 'center', fontFamily: 'helvetica', margin: '0', fontWeight:'bold'}}>MdRPA</p>
                </MenuItem> */}
                <div style={{padding: "20px"}}>
                    <button onClick={() => {saveCurrentUiModels()}} style={{backgroundColor: "#8231ff", borderRadius: "5px", borderColor:"white", borderStyle: "solid", color: "white", width: "100%"}}>SAVE UI MODELS</button>
                </div>
                <MenuItem onClick={() => {addToUiModel("model")}}>
                        <h5 className={styles.addButton}>+ Add Model</h5>
                </MenuItem>
                <>
                    {uiModelList.map((uiModel) => {                    
                    return (
                    <div className={styles.wrapper}>
                        <FontAwesomeIcon icon={faTrash} style={{color: "#8231ff", marginLeft: "20px", marginTop: "18px"}} onClick={() => {removeFromUiModel("model", uiModel.application_name, "")}} />
                        <FontAwesomeIcon icon={faEdit} style={{color: "#8231ff", marginLeft: "10px", marginTop: "18px"}} onClick={() => {updateName("model", uiModel.application_name, "")}}/>
                        <SubMenu label={uiModel.application_name} onClick={() => {setCurrentUiModel(uiModel.application_name)}}>
                            <MenuItem style={{paddingLeft: "20px"}} onClick={() => {addToUiModel("page")}}>
                                <h5 className={styles.addButton} >+ Add Page</h5>
                            </MenuItem>
                            <>
                            {uiModel.pages.map((page) => {                    
                                return (
                                    <div className={styles.wrapper} style={{backgroundColor: "#f5f7f7"}}>
                                        <FontAwesomeIcon icon={faTrash} style={{color: "#8231ff", marginLeft: "20px", marginTop: "18px"}} onClick={() => {removeFromUiModel("page", uiModel.application_name, page.page_name)}} />
                                        <FontAwesomeIcon icon={faEdit} style={{color: "#8231ff", marginLeft: "10px", marginTop: "18px"}} onClick={() => {updateName("page", uiModel.application_name, page.page_name)}}/>
                                        <SubMenu label={page.page_name} onClick={() => {
                                            setCurrentUiModel(uiModel.application_name)
                                            setCurrentUiModelPage(page.page_name)}}>
                                        <MenuItem onClick={() => {addToUiModel("element")}} >
                                            <h5 className={styles.addButton}>+ Add Element</h5>
                                        </MenuItem>
                                        <> {page.ui_elements.map((uiElement) => {
                                            return(
                                                <div className={styles.wrapper} style={{backgroundColor: "#f5f7f7"}}>
                                                    <FontAwesomeIcon icon={faTrash} style={{color: "#8231ff", marginLeft: "20px", marginTop: "18px"}} onClick={() => {removeFromUiModel("element", uiModel.application_name, page.page_name, uiElement.element_name)}} />
                                                    <MenuItem onClick={() => {
                                                        setCurrentUiModel(uiModel.application_name)
                                                        setCurrentUiModelPage(page.page_name)
                                                        handleModelInterfaceChange(uiElement)}}>{uiElement.element_name}</MenuItem>
                                                    </div>
                                                    )
                                                })}
                                        </>
                                        </SubMenu>
                                    </div>
                                
                            )})}
                            </>
                        </SubMenu>
                    </div>
                    )})}
                </>
            </Menu>
        </Sidebar>;
    </div>
  )
}
export default UiModelSidebar;