import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import RobotOverview from "./RobotOverview";
import RobotStatus from "./RobotStatus";
import { runRobot, getAllRobots, getCurrentErrors } from "../../api/robots"

function RobotCockpit() {
  const [robotList, setRobotList] = useState([]);
  const [errorList, setErrorList] = useState("default");

  useEffect(() => {
    // get robots api call
    console.log("get robots useEffect")
    getAllRobots()
      .then((res) => {
        let robots = []
        res.data.forEach(
          robot => {
            robots.push(JSON.parse(robot))
          }
        )
        setRobotList(robots)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const executeRobot = (robotName) => {
    // runRobot({robotName: robotName})
    // // api call to run robot
    // const response = {
    //   robot: "Payroll",
    //   error: {
    //     application_name: "Email App",
    //     page_name: "Login Page",
    //     element_name: "Login Button",
    //     failed_locator: "text",
    //     reasons_for_failure: ["Label of element changed"]
    //   }
    // }
    
    getCurrentErrors()
      .then((res) => {
        let errors = []
        let errorData = res.data
        console.log(errorData)
        errorData.forEach(
          error => {
            errors.push(error)
          }
        )
        console.log("errors " + errors)
        setErrorList(errors)
      })
      .catch((err) => {
        console.log(err)
      })
  };

  return (
    <div className="coreWrapper">
      <RobotOverview robotList={robotList} executeRobot={executeRobot} />
      <RobotStatus errorList={errorList}></RobotStatus>
    </div>
  )
}
export default RobotCockpit;