import React, { useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import styles from './RobotOverview.module.css';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


function RobotOverview({ robotList, executeRobot}) {

  return (
    <div className="robotOverviewWrapper">
        <Sidebar rootStyles={{backgroundColor: '#ebf1f4', height: '100%', width: '100%'}}>
            <Menu menuItemStyles={{
                root: ({ level, active}) => {
                    return {
                        color: 'black',
                        backgroundColor: 'transparent',
                    };
                }
                }}
            >
                <h4 style={{ padding: "5vh", width: "50vw", textAlign: "center"}}>Your Robots</h4>
                <>
                    {robotList.map((robot) => {                    
                    return (
                        <div style={{margin: "20px", alignContent: "center"}}>
                            <MenuItem  style={{borderRadius: "5px", borderColor:"#8231ff", borderWidth: "1px", borderStyle: "solid", width: "100%"}}>
                                <div className={styles.robotWrapper}>
                                    <p style={{margin: "0"}}>{robot.name}</p>
                                    <button onClick={() => {executeRobot(robot.name)}} style={{color: "white", backgroundColor: '#8231ff', borderColor: '#8231ff', borderRadius: "5px"}}>Start</button>
                                </div>
                            </MenuItem>
                        </div>
                    )})}
                </>
            </Menu>
        </Sidebar>;
    </div>
  )
}
export default RobotOverview;