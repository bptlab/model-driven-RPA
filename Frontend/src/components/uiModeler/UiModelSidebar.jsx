import React, { useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import styles from './UiModelSidebar.module.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


function UiModelSidebar({handleModelInterfaceChange, uiModelList, addToUiModel, setCurrentUiModel, setCurrentUiModelPage}) {

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
                <MenuItem >
                        <p style={{fontSize: '30px', textAlign: 'center', fontFamily: 'helvetica', margin: '0', fontWeight:'bold'}}>MdRPA</p>
                </MenuItem>
                <MenuItem onClick={() => {addToUiModel("model")}}>
                        <h5 className={styles.addButton}>+ Add Model</h5>
                </MenuItem>
                <>
                    {uiModelList.map((uiModel) => {                    
                    return (
                    <SubMenu label={"Model: " + uiModel.application_name} onClick={() => {setCurrentUiModel(uiModel.application_name)}}>
                        <MenuItem onClick={() => {addToUiModel("page")}}>
                            <h5 className={styles.addButton}>+ Add Page</h5>
                        </MenuItem>
                        <>
                        {uiModel.pages.map((page) => {                    
                        return (
                            <SubMenu label={"Page: " + page.page_name} onClick={() => {
                                setCurrentUiModel(uiModel.application_name)
                                setCurrentUiModelPage(page.page_name)}}>
                                <MenuItem onClick={() => {addToUiModel("element")}} >
                                    <h5 className={styles.addButton}>+ Add Element</h5>
                                </MenuItem>
                                <> {page.ui_elements.map((uiElement) => {
                                        return(  
                                            <MenuItem onClick={() => {
                                                setCurrentUiModel(uiModel.application_name)
                                                setCurrentUiModelPage(page.page_name)
                                                handleModelInterfaceChange(uiElement)}}>{uiElement.element_name}</MenuItem>
                                        )
                                    })}
                                </>
                            </SubMenu>
                        )})}
                        </>
                    </SubMenu>
                    )})}
                </>
            </Menu>
        </Sidebar>;
    </div>
  )
}
export default UiModelSidebar;