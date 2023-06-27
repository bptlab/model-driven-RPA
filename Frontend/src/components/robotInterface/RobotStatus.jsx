import React, { useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import styles from './RobotStatus.module.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


function RobotStatus({errorList}) {
  return (
    <>
    {errorList == 'default' && (
        <div className={styles.defaultScreen}>
            <h4 style={{textAlign: 'center'}}>When a robot operation failed, you will see the reason here</h4>
        </div>
    )}
    {errorList !== "default" && (
        <div className={styles.errorScreen}>
            <h4 style={{paddingBottom: "5vh"}}>Current Errors</h4>
            <>
            {errorList.map((error) => {
                return (
                    <>
                    {/* <h5 className={styles.errorReport}> Running Bot:  {error.failed_bot}</h5> */}
                    <hr style={{width: "100%", margin: "10px"}}/>
                    <p className={styles.errorReport}>Affected Model: {error.model_name}</p>
                    <p className={styles.errorReport}>Page: {error.page_name}</p>
                    <p className={styles.errorReport}>Element: {error.element_name}</p>
                    <p className={styles.errorReport}>Failed Locator: {error.locator}</p>
                    <p className={styles.errorReport}>Possible Reasons for Failure: {error.reasons_for_failure}</p>
                    {/* <>
                    {error.reasons_for_failure.map((reason) => {
                            return (
                                    <p className={styles.errorReport}>> {reason} </p>
                                )
                            })}
                    </> */}
                    </>
                )})}
            </>
        </div>
    )}
  </>
  )
}
export default RobotStatus;