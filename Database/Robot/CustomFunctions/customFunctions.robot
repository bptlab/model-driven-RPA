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



*** Variables ***
${HTTP_LOCAL_SERVER}   http://localhost:8000/Robot/error-handling
${report}     
@{error_list} 


*** Keywords ***

    #####  Input Field Custom Function #####





Click Button Model
    [Arguments]    ${element}  ${application_name}  ${page_nam}      
    Set Suite Variable  ${model_name}    ${application_name} 
    Set Suite Variable  ${page_name}    ${page_nam} 
    Set Suite Variable  ${element_name}   ${element[" element_name"]} 
    Set Suite Variable  ${current_mode}   ${element["current_mode"]} 
    Set Suite Variable  ${element_locators}     ${element["element_locators"]} 
    @{keyword_list}=    Create List    Click Button By ID    Click Button By Path    Click Button By Label   Click Button By Image

   
    ${id}=   Get ID From Attributes  ${element_locators["dom"]["attributes"]}
    Set Suite Variable  ${id}
    Set Suite Variable  ${path}   ${element_locators["dom"]["path"]}
    Set Suite Variable  ${text}   ${element_locators["dom"]["text"]}
    Set Suite Variable  ${image}  ${element_locators["surface"]["image"]}

    
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
    ...  ELSE    Run Keywords   Set Status Fail ID  AND  Create Error  ${model_name}  ${page_name}  ${element_name}  'id'
    

Click Button By Path
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    xpath=${path}
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Status Pass ID  AND  Click Element    xpath=${path}
    ...  ELSE  Run Keywords   Set Status Fail ID  AND  Create Error  ${model_name}  ${page_name}  ${element_name}  'path'

Click Button By Label
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    xpath=//a[text()='${text}']
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Status Pass ID  AND  Click Element   xpath=//a[text()='${text}']
    ...  ELSE    Run Keywords   Set Status Fail ID  AND  Create Error  ${model_name}  ${page_name}  ${element_name}  'text'


Click Button By Image
    ${text_image}=       Perform OCR      ${image}   ${text} 
    log    ${text_image}
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    xpath=//a[text()='${text_image}']
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Status Pass ID  AND  Click Element   xpath=//a[text()='${text_image}']
    ...  ELSE   Run Keywords   Set Status Fail ID  AND  Create Error  ${model_name}  ${page_name}  ${element_name}  'image'

    




    #####  Input Field Custom Function #####





Input Field Model
    [Arguments]    ${element}  ${application_name}  ${page_nam}  ${value}
    Set Suite Variable  ${model_name}    ${application_name} 
    Set Suite Variable  ${page_name}    ${page_nam} 
    Set Suite Variable  ${element_name}   ${element[" element_name"]} 
    Set Suite Variable  ${current_mode}   ${element["current_mode"]} 
    Set Suite Variable  ${element_locators}     ${element["element_locators"]} 
    @{keyword_list}=    Create List     Input Field By ID    Input Field By Path    Input Field By Label   Input Field By Image

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

Input Field By ID
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    id=${id}
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Status Pass ID  AND    Input Text  id=${id}    ${value}     
    ...  ELSE   Run Keywords   Set Status Fail ID  AND  Create Error  ${model_name}  ${page_name}  ${element_name}  'id'
    

Input Field By Path
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    xpath=${path}
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Status Pass ID  AND   Input Text  xpath=${path}    ${value}      
    ...  ELSE   Run Keywords   Set Status Fail ID  AND  Create Error  ${model_name}  ${page_name}  ${element_name}  'path'

Input Field By Label
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    xpath=//a[text()='${text}']
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Status Pass ID  AND   Input Text   xpath=//a[text()='${text}']  ${value} 
    ...  ELSE   Run Keywords   Set Status Fail ID  AND  Create Error  ${model_name}  ${page_name}  ${element_name}  'text'


Input Field By Image
    ${text_image}=       Perform OCR      ${image}   ${text} 
    log    ${text_image}
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    xpath=//a[text()='${text_image}']
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Status Pass ID  AND   Input Text    xpath=//a[text()='${text_image}']  ${value}
    ...  ELSE   Run Keywords   Set Status Fail ID  AND  Create Error  ${model_name}  ${page_name}  ${element_name}  'image'
    


    #####  Custom Function for Dropdown Menu #####



Select Value from Dropdown
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
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Status Pass ID  AND    Select From List by Value  id=${id}    ${value}     
    ...  ELSE   Run Keywords   Set Status Fail ID  AND  Create Error  ${model_name}  ${page_name}  ${element_name}  'id'
    

Select Value By Path
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    xpath=${path}
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Status Pass ID  AND   Select From List by Value  xpath=${path}    ${value}      
    ...  ELSE   Run Keywords   Set Status Fail ID  AND  Create Error  ${model_name}  ${page_name}  ${element_name}  'path'

Select Value By Label
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    xpath=//a[text()='${text}']
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Status Pass ID  AND   Select From List by Value   xpath=//a[text()='${text}']  ${value} 
    ...  ELSE   Run Keywords   Set Status Fail ID  AND  Create Error  ${model_name}  ${page_name}  ${element_name}  'text'


Select Value By Image
    ${text_image}=       Perform OCR      ${image}   ${text} 
    log    ${text_image}
    ${element_exists}    Run Keyword And Return Status    Element Should Be Visible    xpath=//a[text()='${text_image}']
    Run Keyword If    '${element_exists}' == 'True'  Run Keywords    Set Status Pass ID  AND   Select From List by Value    xpath=//a[text()='${text_image}']  ${value}
    ...  ELSE   Run Keywords   Set Status Fail ID  AND  Create Error  ${model_name}  ${page_name}  ${element_name}  'image'



 

    #####  Handling Interactuon Status Variable for Custom Functions #####



Set Status Pass ID
   Set Suite Variable    ${interaction_status}  Pass

Set Status Fail ID
   Set Suite Variable    ${interaction_status}  Fail




    #####  Getting Id from all DOM attributes #####




Get ID From Attributes
    [Arguments]   ${attributes}
    ${id}    ${EMPTY}
    FOR    ${attribute}    IN    @{attributes}
        ${name}    Set Variable    ${attribute["name"]}
        ${value}    Set Variable    ${attribute["value"]}
        Run Keyword If    '${name}' == 'id'    Set Variable    ${id}    ${value}
    END
    [Return]    ${id}






    #####  Creating List of Dictionaries of Error Objects and Call API  #####

Create Error
    [Arguments]    ${model_name}    ${page_name}    ${element_name}    ${locator}
    &{element}    Create Dictionary     model_name=${model_name}      page_name=${page_name}    element_name=${element_name}    locator=${locator}
    Append To List    ${error_list}    ${element}


Send Report to UI Modeler
    Set Suite Variable   ${report}    ${error_list}
    ${resp}=    POST    ${HTTP_LOCAL_SERVER}    json=${report}
    Status Should Be    OK    ${resp}