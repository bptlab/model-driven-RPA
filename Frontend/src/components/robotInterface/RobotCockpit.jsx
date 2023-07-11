import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import RobotOverview from "./RobotOverview";
import RobotStatus from "../errorOverview/ErrorOverview";
import { runRobot, getAllRobots, setRobotsPath, getRobotsPath } from "../../api/robots";


function RobotCockpit() {
  const [robotList, setRobotList] = useState([]);
  const [currentPath, setCurrentPath] = useState("C:/Users/exampleUser/OneDrive/XYZ/ProjectX/RobotsFolder");

  useEffect(() => {
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
      getRobotsPath()
      .then((res) => {
        setCurrentPath(res.data.robotsPath)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const executeRobot = (robotName) => {
      runRobot({robotName: robotName})
  };

  const setPath = (path) => {
    setRobotsPath({robotsPath: path})
};

  return (
    <div className="coreWrapper">
      <RobotOverview currentPath={currentPath} robotList={robotList} executeRobot={executeRobot} setPath={setPath} />
    </div>
  )
}
export default RobotCockpit;