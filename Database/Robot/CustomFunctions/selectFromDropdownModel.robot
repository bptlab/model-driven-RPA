*** Settings ***
Documentation     Get Data from JSON and use that in robot.
Library    RPA.Browser.Selenium  auto_close=${FALSE}
Library    RPA.HTTP
Library    OperatingSystem
Library    BuiltIn
Library    RPA.JSON
Library    RPA.Desktop
Library    Collections
Library    ../utils/OCR.py
Resource   ../utils/utils.robot


*** Keywords ***


Select Value from Dropdown Model
    [Arguments]    ${element}  ${application_name}  ${page_nam}  ${value}
    Set Suite Variable  ${model_name}    ${application_name} 
    Set Suite Variable  ${page_name}    ${page_nam} 
    Set Suite Variable  ${element_name}   ${element[" element_name"]} 
    Set Suite Variable  ${current_mode}   ${element["current_mode"]} 
    Set Suite Variable  ${element_locators}     ${element["element_locators"]} 
    @{keyword_list}=    Create List     Select Value By ID     Select Value By Path     Select Value By Label    Select Value By Image

    ${id}=   Get ID From Attributes  ${element_locators["dom"]["attributes"]}
    Set Suite Variable  ${id}
    Set Suite Variable  ${path}   ${element_locators["dom"]["path"]}
    Set Suite Variable  ${text}   ${element_locators["dom"]["text"]}
    Set Suite Variable  ${image}  ${element_locators["surface"]["image"]}
    Set Suite Variable  ${value}
    
    ${removed_keyword}=    Run Keyword If    '${element["current_mode"]}' == 'ID'    Remove From List    ${keyword_list}    0
...    ELSE IF    '${element["current_mode"]}' == 'PATH'    Remove From List    ${keyword_list}    1
...    ELSE IF    '${element["current_mode"]}' == 'LABEL'    Remove From List    ${keyword_list}    2
...    ELSE IF    '${element["current_mode"]}' == 'OCR'    Remove From List    ${keyword_list}    3


    Set Suite Variable  ${interaction_status}   ${EMPTY} 

    Run Keyword    ${removed_keyword}    

    FOR    ${keyword}    IN    @{keyword_list}
       Run Keyword If    '${interaction_status}' == 'Fail'    ${keyword}    
    END



Select Value By ID
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    id=${id}
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Suite Variable  ${interaction_status}  Pass  AND    Select From List by Value  id=${id}    ${value}     
    ...  ELSE   Run Keywords   Set Suite Variable    ${interaction_status}  Fail  AND  Create Error  ${model_name}  ${page_name}  ${element_name}  'id'
    

Select Value By Path
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    xpath=${path}
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Suite Variable    ${interaction_status}  Pass  AND   Select From List by Value  xpath=${path}    ${value}      
    ...  ELSE   Run Keywords   Set Suite Variable    ${interaction_status}  Fail  AND  Create Error  ${model_name}  ${page_name}  ${element_name}  'path'

Select Value By Label
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    xpath=//a[text()='${text}']
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Suite Variable    ${interaction_status}  Pass  AND   Select From List by Value   xpath=//a[text()='${text}']  ${value} 
    ...  ELSE   Run Keywords   Set Suite Variable    ${interaction_status}  Fail  AND  Create Error  ${model_name}  ${page_name}  ${element_name}  'text'


Select Value By Image
    ${text_image}=       Perform OCR      ${image}   ${text} 
    log    ${text_image}
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    xpath=//a[text()='${text_image}']
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Suite Variable    ${interaction_status}  Pass  AND   Select From List by Value    xpath=//a[text()='${text_image}']  ${value}
    ...  ELSE   Run Keywords   Set Suite Variable    ${interaction_status}  Fail  AND  Create Error  ${model_name}  ${page_name}  ${element_name}  'image'


   






