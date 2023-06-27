*** Settings ***
Documentation     Get Data from JSON and use that in robot.
Library    RPA.Browser.Selenium  auto_close=${FALSE}
Library    RPA.HTTP
Library    OperatingSystem
Library    BuiltIn
Library    RPA.JSON
Library    RPA.Desktop
Library    Collections
Resource   ../utils/utils.robot
Resource   ClickButtonModel.robot
Resource   InputFieldModel.robot
Resource   SelectCheckboxModel.robot
Resource   SelectFromDropdownModel.robot















