import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import RobotOverview from "./RobotOverview";
import RobotStatus from "../errorOverview/ErrorOverview";
import { runRobot, getAllRobots } from "../../api/robots";


function RobotCockpit() {
  const [robotList, setRobotList] = useState([]);

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
      runRobot({robotName: robotName})
  };

  return (
    <div className="coreWrapper">
      <RobotOverview robotList={robotList} executeRobot={executeRobot} />
    </div>
  )
}
export default RobotCockpit;