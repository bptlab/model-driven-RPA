*** Settings ***
Documentation     Get Data from JSON and use that in robot.
Library    RPA.Browser.Selenium  auto_close=${FALSE}
Library    RPA.HTTP
Library    OperatingSystem
Library    BuiltIn
Library    RPA.JSON
Library    RPA.Desktop
Resource   CustomFunctions/customFunctions.robot
Library    OCR


*** Variables ***
${json_dict}    ${EMPTY}

*** Tasks ***
Get Data from JSON and use that in robot
    log  Robot is running 
    Load JSON Data
    Open the website
    Sleep    5 seconds
    Click Button Model    ${json_dict["pages"]["Home"]["elements"][0]}
    Sleep    2 seconds

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
 