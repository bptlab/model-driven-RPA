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
Library    mdrpaLibrary.modelDrivenRpa.ModelDrivenRpa




*** Variables ***
${json_dict}    ${EMPTY}
${MONTH}        June
${RECIPIENT}    bptlab.mdrpa@gmail.com
${USERNAME}     bptlab.mdrpa
${PASSWORD}     yeuionpvtsxnxyfq

*** Tasks ***

Run Payroll Robot
    Run Payroll

*** Keywords ***

Run Payroll
    Authorize    account=${USERNAME}    password=${PASSWORD}
    ${attachments}    Save Attachments    SUBJECT Payroll_${MONTH}
    ...    target_folder=${CURDIR}${/}payrolls    overwrite=${True}
    Load JSON Data
    Iterate through all files

Load JSON Data
    ${uiModels}=    Get Ui Models    http://localhost:8000/all-models
    Set Suite Variable     ${uiModels}
    log  ${uiModels}


Iterate through all files
    Open Available Browser    http://localhost:3001/
    ${files}    List files in directory    ${CURDIR}${/}payrolls
    FOR    ${file}    IN    @{files}
        RPA.Excel.Application.Open Workbook    ${file}
        ${FIRSTNAME}    Read From Cells    row=3    column=5
        ${LASTNAME}    Read From Cells    row=4    column=5
        ${EMAIL}    Read From Cells    row=2    column=5
        ${SALARY}    Read From Cells    row=42    column=9
        Add payroll entry    ${FIRSTNAME}    ${LASTNAME}    ${EMAIL}    ${SALARY}
        Sleep    1s
        Close Document
    END


Add payroll entry
    [Arguments]    ${FIRSTNAME}    ${LASTNAME}    ${EMAIL}    ${SALARY}
    Click Button Model    Payroll    payroll_homepage    addButton    ${uiModels} 
    Input Field Model     Payroll    add_payroll    firstName    ${uiModels}    ${FIRSTNAME}
    Input Field Model    Payroll    add_payroll    lastName    ${uiModels}    ${LASTNAME} 
    Input Field Model    Payroll    add_payroll    email    ${uiModels}    ${EMAIL}  
    Select From Dropdown Model    Payroll    add_payroll    month    ${uiModels}    ${MONTH}   
    Input Field Model    Payroll    add_payroll    salary    ${uiModels}    ${SALARY}
    Select Checkbox Model    Payroll    add_payroll    terms    ${uiModels}  
    Click Button Model    Payroll    add_payroll    addButton    ${uiModels}
    Close Workbook

