import React, { useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import styles from './RobotStatus.module.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


function RobotStatus({error}) {
  return (
    <>
    {error == 'default' && (
        <div className={styles.defaultScreen}>
            <h4 style={{textAlign: 'center'}}>When a robot operation failed, you will see the reason here</h4>
        </div>
    )}
    {error !== "default" && (
        <div className={styles.errorScreen}>
            <h4 style={{paddingBottom: "5vh"}}>What happened?</h4>
            <h5 className={styles.errorReport}>Running Bot:  TEST</h5>
            <hr style={{width: "100%", margin: "10px"}}/>
            <h5 className={styles.errorReport}>Affected Model: {error.application_name}</h5>
            <h5 className={styles.errorReport}>> Page: {error.page_name}</h5>
            <h5 className={styles.errorReport}>>> Element: {error.element_name}</h5>
            <h5 className={styles.errorReport}>>>> Failed Locator: {error.failed_locator}</h5>
            <hr style={{width: "100%", margin: "10px"}}/>
            <h5 className={styles.errorReport}>Possible Reasons for Failure: </h5>
            <>
            {error.reasons_for_failure.map((reason) => {
                return (
                    <p className={styles.errorReport}>> {reason} </p>
                )
            })}
            </>
        </div>
    )}
  </>
  )
}
export default RobotStatus;