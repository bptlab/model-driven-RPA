*** Settings ***
Documentation     Get Data from JSON and use that in robot.
Library    RPA.Browser.Selenium  auto_close=${FALSE}
Library    RPA.HTTP
Library    OperatingSystem
Library    BuiltIn
Library    RPA.JSON
Library    RPA.Desktop
Library    Collections



*** Keywords ***

Click Button Model
    [Arguments]    ${element}
    @{keyword_list}=    Create List    Click Button By ID    Click Button By Path    Click Button By Label   Click Button By Image


    Set Suite Variable  ${id}   ${element["id"]}
    Set Suite Variable  ${path}   ${element["path"]}
    Set Suite Variable  ${text}   ${element["text"]}
    Set Suite Variable  ${image}   ${element["image"]}

    
  ${removed_keyword}=    Run Keyword If    '${element["current_mode"]}' == 'ID'    Remove From List    ${keyword_list}    0
...    ELSE IF    '${element["current_mode"]}' == 'PATH'    Remove From List    ${keyword_list}    1
...    ELSE IF    '${element["current_mode"]}' == 'LABEL'    Remove From List    ${keyword_list}    2
...    ELSE IF    '${element["current_mode"]}' == 'OCR'    Remove From List    ${keyword_list}    3




   
   
    Set Suite Variable  ${interaction_status}   ${EMPTY} 

    Run Keyword    ${removed_keyword}    

    FOR    ${keyword}    IN    @{keyword_list}
       Run Keyword If    '${interaction_status}' == 'Fail'    ${keyword}    
    END
   
    
Click Button By ID
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    id=${id}
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Status Pass ID  AND  Click Element    id=${id}
    ...  ELSE   Set Status Fail ID
    

Click Button By Path
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    xpath=${path}
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Status Pass ID  AND  Click Element    xpath=${path}
    ...  ELSE   Set Status Fail ID

Click Button By Label
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    xpath=//a[text()='${text}']
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Status Pass ID  AND  Click Element   xpath=//a[text()='${text}']
    ...  ELSE   Set Status Fail ID


Set Status Pass ID
   Set Suite Variable    ${interaction_status}  Pass

Set Status Fail ID
   Set Suite Variable    ${interaction_status}  Fail



    

