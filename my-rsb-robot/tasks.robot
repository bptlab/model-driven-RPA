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
    Click Button Model
    Sleep    2 seconds

*** Keywords ***
Load JSON Data
    ${json_data}=    Get File    test.json
    ${json_dict}=    Evaluate    json.loads('''${json_data}''')
    Set Suite Variable    ${json_dict}
    log  ${json_dict} 
Open the website
    ${link}    Set Variable    ${json_dict["Link"]}
    Log To Console     ${link} 
    Open Available Browser    ${link}  
 
Click Button Model
    ${element}    Set Variable    ${json_dict["pages"]["Home"]["elements"][0]}
    Set Suite Variable    ${id}  ${element["id"]}
    Set Suite Variable    ${path}  ${element["path"]}
    Set Suite Variable    ${image}  ${element["image"]}
    Set Suite Variable  ${id_status}  ${True} 
    log    The Status Coming from ID is ${id_status}
    Run Keyword If    '${id_status}' == 'True'   Click Button By ID    ${id}   
    Run Keyword If    '${id_status}' == 'False'  Click Button By Path    ${path}
    Run Keyword If    '${id_status}' == 'False'  Click Button By OCR    ${image}
    Run Keyword If    '${id_status}' == 'True'  Log    Button clicked successfully using ID
        
  

Click Button By ID
    [Arguments]    ${id}
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    id=${id}
    Run Keyword If    '${element_exists}' == 'True'  Click Element    id=${id}  
    ...  ELSE   Set Suite Variable    ${id_status}   ${False}
    Run Keyword If    '${element_exists}' == 'True'  Set Suite Variable    ${id_status}  ${True}


Click Button By Path
    [Arguments]    ${id}
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    id=${id}
    Run Keyword If    '${element_exists}' == 'True'  Click Element    id=${id}  
    ...  ELSE   Set Suite Variable    ${id_status}  ${False}
    Run Keyword If    '${element_exists}' == 'True'  Set Suite Variable    ${id_status}  ${True}
     

Click Button By OCR
    [Arguments]    ${image}
    #Run Keyword And Return Status    Perform OCR    ${image}
    #...    AND    Click Button By OCR    ${element} 
