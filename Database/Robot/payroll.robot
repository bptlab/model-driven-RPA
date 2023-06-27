*** Settings ***
Documentation     Payroll Automation using RPA
Library    RPA.Browser.Selenium  auto_close=${FALSE}
Library    RPA.HTTP
Library    RPA.Email.ImapSmtp    smtp_server=smtp.gmail.com    smtp_port=587
Library    OperatingSystem
Library    RPA.Excel.Files
Library    RPA.Excel.Application
Library    BuiltIn
Library    RPA.JSON
Library    RPA.Desktop
Library    RPA.FileSystem
Library    DateTime
Library    Collections
Resource   CustomFunctions/customFunctions.robot





*** Variables ***
${json_dict}    ${EMPTY}
${MONTH}        June
${RECIPIENT}    bptlab.mdrpa@gmail.com
${USERNAME}     bptlab.mdrpa
${PASSWORD}     yeuionpvtsxnxyfq


*** Keywords ***

Run Payroll
    Authorize    account=${USERNAME}    password=${PASSWORD}
    ${attachments}    Save Attachments    SUBJECT Payroll_${MONTH}
    ...    target_folder=${CURDIR}${/}Payrolls    overwrite=${True}
    Load JSON Data
    Iterate through all files
    Send Report to UI Modeler

Load JSON Data
    ${json_data}=    Get File    ../Database/UiModel/Payroll.json
    ${json_dict}=    Evaluate    ${json_data}    json
    Set Suite Variable    ${json_dict}
    log  ${json_dict} 


Iterate through all files
    Open Available Browser    http://localhost:3001/
    ${files}    List files in directory    ${CURDIR}${/}Payrolls
    FOR    ${file}    IN    @{FILES}
        RPA.Excel.Application.Open Workbook    ${file}
        ${FIRSTNAME}    Read From Cells    row=3    column=5
        ${LASTNAME}    Read From Cells    row=4    column=5
        ${EMAIL}    Read From Cells    row=2    column=5
        ${SALARY}    Read From Cells    row=42    column=9
        Add payroll entry    ${FIRSTNAME}    ${LASTNAME}    ${EMAIL}    ${SALARY}
        Sleep    1s
    END


Add payroll entry
    [Arguments]    ${FIRSTNAME}    ${LASTNAME}    ${EMAIL}    ${SALARY}
    Click Button Model   ${json_dict["pages"][0]["ui_elements"][0]}    ${json_dict["application_name"]}   ${json_dict["pages"][0]["page_name"]}    
    Input Field Model    ${json_dict["pages"][1]["ui_elements"][0]}    ${json_dict["application_name"]}   ${json_dict["pages"][1]["page_name"]}   ${FIRSTNAME} 
    Input Field Model    ${json_dict["pages"][1]["ui_elements"][1]}    ${json_dict["application_name"]}   ${json_dict["pages"][1]["page_name"]}    ${LASTNAME} 
    Input Field Model    ${json_dict["pages"][1]["ui_elements"][2]}    ${json_dict["application_name"]}   ${json_dict["pages"][1]["page_name"]}   ${EMAIL} 
    Select Value from Dropdown Model   ${json_dict["pages"][1]["ui_elements"][3]}    ${json_dict["application_name"]}   ${json_dict["pages"][1]["page_name"]}    ${MONTH}   
    Input Field Model    ${json_dict["pages"][1]["ui_elements"][4]}    ${json_dict["application_name"]}   ${json_dict["pages"][1]["page_name"]}   ${SALARY}
    Select Checkbox Model   ${json_dict["pages"][1]["ui_elements"][6]}    ${json_dict["application_name"]}   ${json_dict["pages"][1]["page_name"]}    
    Click Button Model   ${json_dict["pages"][1]["ui_elements"][7]}    ${json_dict["application_name"]}   ${json_dict["pages"][0]["page_name"]}    
    Close Workbook


