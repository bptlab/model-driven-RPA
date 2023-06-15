import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import RobotOverview from "./RobotOverview";
import RobotStatus from "./RobotStatus";
import { getAllUiModels } from "../../api/uiModels.js"

function RobotCockpit() {
  const [robotList, setRobotList] = useState([]);
  const [error, setError] = useState("default");

  useEffect(() => {
    // get robots api call
    setRobotList([
      {name: "Payroll"}
    ])
  }, [])

  const executeRobot = (robotName) => {
    // api call to run robot
    const response = {
      robot: "Payroll",
      error: {
        application_name: "Email App",
        page_name: "Login Page",
        element_name: "Login Button",
        failed_locator: "text",
        reasons_for_failure: ["Label of element changed"]
      }
    }
    setError(response.error)
    console.log(robotName)
  };

  return (
    <div className="coreWrapper">
      <RobotOverview robotList={robotList} executeRobot={executeRobot} />
      <RobotStatus error={error}></RobotStatus>
    </div>
  )
}
export default RobotCockpit;