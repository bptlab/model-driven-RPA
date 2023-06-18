*** Settings ***
Documentation     Get Data from JSON and use that in robot.
Library    RPA.Browser.Selenium  auto_close=${FALSE}
Library    RPA.HTTP
Library    OperatingSystem
Library    BuiltIn
Library    RPA.JSON
Library    RPA.Desktop
Resource   CustomFunctions/customFunctions.robot

Library    Collections


*** Variables ***
${json_dict}    ${EMPTY}

*** Tasks ***
Get Data from JSON and use that in robot
    #Load JSON Data
    #Open the website
    #Sleep    3 seconds
    #Click Button Model    ${json_dict["pages"][0]["ui_elements"][0]}    ${json_dict["application_name"]}   ${json_dict["pages"][0]["page_name"]}    
    #Sleep    2 seconds
    Send Report to UI Modeler
    


*** Keywords ***
Load JSON Data
    ${json_data}=    Get File    test.json
    ${json_dict}=    Evaluate    ${json_data}    json
    Set Suite Variable    ${json_dict}
    log  ${json_dict} 
Open the website
    ${link}=    Set Variable    ${json_dict["Link"]}
    Log To Console     ${link} 
    Log   ${link} 
    Open Available Browser    ${link}  


