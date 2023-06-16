*** Settings ***
Documentation     Get Data from JSON and use that in robot.
Library    RPA.Browser.Selenium  auto_close=${FALSE}
Library    RPA.HTTP
Library    OperatingSystem
Library    BuiltIn
Library    RPA.JSON
Library    RPA.Desktop
Library    Collections
Library    OCR.py





*** Keywords ***

Click Button Model
    [Arguments]    ${json_dict} 
    Set Suite Variable  ${current_mode}   ${json_dict["pages"][0]["ui_elements"][0]["current_mode"]} 
    Set Suite Variable  ${element}     ${json_dict["pages"][0]["ui_elements"][0]["element_locators"]} 
    @{keyword_list}=    Create List    Click Button By ID    Click Button By Path    Click Button By Label   Click Button By Image

   
    ${id}=   Get ID From Attributes  ${element["dom"]["attributes"]}
    Set Suite Variable  ${path}   ${element["dom"]["path"]}
    Set Suite Variable  ${text}   ${element["dom"]["text"]}
    Set Suite Variable  ${image}  ${element["surface"]["image"]}

    
  ${removed_keyword}=    Run Keyword If    '${current_mode}' == 'ID'    Remove From List    ${keyword_list}    0
...    ELSE IF    '${current_mode}' == 'PATH'    Remove From List    ${keyword_list}    1
...    ELSE IF    '${current_mode}' == 'LABEL'    Remove From List    ${keyword_list}    2
...    ELSE IF    '${current_mode}' == 'OCR'    Remove From List    ${keyword_list}    3


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


Click Button By Image
    ${text_image}=       Perform OCR      ${image}   ${text} 
    log    ${text_image}
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    xpath=//a[text()='${text_image}']
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Status Pass ID  AND  Click Element   xpath=//a[text()='${text_image}']
    ...  ELSE   Set Status Fail ID

    

Input Field Model
    [Arguments]    ${element}  ${image_path}   ${text}
    @{keyword_list}=    Create List     Input Field By ID    Input Field By Path    Input Field By Label   Input Field By Image

    Set Suite Variable  ${id}   ${element["id"]}
    Set Suite Variable  ${path}   ${element["path"]}
    Set Suite Variable  ${text}   ${element["text"]}
    Set Suite Variable  ${image}   ${image_path}
    Set Suite Variable  ${value}   ${text}

    
  ${removed_keyword}=    Run Keyword If    '${element["current_mode"]}' == 'ID'    Remove From List    ${keyword_list}    0
...    ELSE IF    '${element["current_mode"]}' == 'PATH'    Remove From List    ${keyword_list}    1
...    ELSE IF    '${element["current_mode"]}' == 'LABEL'    Remove From List    ${keyword_list}    2
...    ELSE IF    '${element["current_mode"]}' == 'OCR'    Remove From List    ${keyword_list}    3


    Set Suite Variable  ${interaction_status}   ${EMPTY} 

    Run Keyword    ${removed_keyword}    

    FOR    ${keyword}    IN    @{keyword_list}
       Run Keyword If    '${interaction_status}' == 'Fail'    ${keyword}    
    END

Input Field By ID
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    id=${id}
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Status Pass ID  AND    Input Text  id=${id}    ${value}     
    ...  ELSE   Set Status Fail ID
    

Input Field By Path
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    xpath=${path}
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Status Pass ID  AND   Input Text  xpath=${path}    ${value}      
    ...  ELSE   Set Status Fail ID

Input Field By Label
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    xpath=//a[text()='${text}']
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Status Pass ID  AND   Input Text   xpath=//a[text()='${text}']  ${value} 
    ...  ELSE   Set Status Fail ID


Input Field By Image
    ${text_image}=       Perform OCR      ${image}   ${text} 
    log    ${text_image}
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    xpath=//a[text()='${text_image}']
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Status Pass ID  AND   Input Text    xpath=//a[text()='${text_image}']  ${value}
    ...  ELSE   Set Status Fail ID

Set Status Pass ID
   Set Suite Variable    ${interaction_status}  Pass

Set Status Fail ID
   Set Suite Variable    ${interaction_status}  Fail




Get ID From Attributes
    [Arguments]   ${attributes}
    ${id}    ${EMPTY}
    FOR    ${attribute}    IN    @{attributes}
        ${name}    Set Variable    ${attribute["name"]}
        ${value}    Set Variable    ${attribute["value"]}
        Run Keyword If    '${name}' == 'Id'    Set Variable    ${id}    ${value}
    END
    [Return]    ${id}