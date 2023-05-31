*** Settings ***
Documentation     Get Data from JSON and use that in robot.
Library    RPA.Browser.Selenium  auto_close=${FALSE}
Library    RPA.HTTP
Library    OperatingSystem
Library    BuiltIn
Library    RPA.JSON
Library    RPA.Desktop



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
 
Click Button Model
    [Arguments]    ${element}

    Set Suite Variable  ${interaction_status}   ${EMPTY} 
    Click Button By ID    ${element["id"]}   
    Run Keyword If    '${interaction_status}' == 'Fail'  Click Button By Path    ${element["path"]}
    
Click Button By ID
    [Arguments]    ${id}
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    id=${id}
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Status Pass  AND  Click Element    id=${id}
    ...  ELSE   Set Status Fail
    


Click Button By Path
    [Arguments]     ${path}
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    xpath=${path}
    Run Keyword If    '${element_exists}' == 'True'  Click Element    xpath=${path}
    ...  ELSE   Set Status Fail
    Run Keyword If    '${element_exists}' == 'True'  Set Suite Variable    ${status}  ${True}
     
Set Status Pass
   Set Suite Variable    ${interaction_status}  Pass

Set Status Fail
   Set Suite Variable    ${interaction_status}  Fail

Click Button By OCR
    [Arguments]    ${image}
    #Run Keyword And Return Status    Perform OCR    ${image}
    #...    AND    Click Button By OCR    ${element} 
