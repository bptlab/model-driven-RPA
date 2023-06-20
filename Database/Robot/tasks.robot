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
${USERNAME}     MdRPA
${PASSWORD}     wdanyckqieooxell


*** Tasks ***
Get Data from JSON and use that in robot
Download payrolls
    Authorize    account=${USERNAME}    password=${PASSWORD}
    ${attachments}    Save Attachments    SUBJECT Payroll_${MONTH}
    ...    target_folder=${CURDIR}${/}Payrolls    overwrite=${True}

Put salaries in payroll system
    # Open the payroll System
    Iterate through all files

    #Load JSON Data
    #Open the website
    #Sleep    3 seconds
    #Click Button Model    ${json_dict["pages"][0]["ui_elements"][0]}    ${json_dict["application_name"]}   ${json_dict["pages"][0]["page_name"]}    
    #Sleep    2 seconds
    #Input Field  Model    ${json_dict["pages"][0]["ui_elements"][0]}    ${json_dict["application_name"]}   ${json_dict["pages"][0]["page_name"]}   ${value} 
    #Sleep    2 seconds
    #Select Value from Dropdown Model   ${json_dict["pages"][0]["ui_elements"][0]}    ${json_dict["application_name"]}   ${json_dict["pages"][0]["page_name"]}   ${value}     
    Send Report to UI Modeler
    


*** Keywords ***
Load JSON Data
    ${json_data}=    Get File    test.json
    ${json_dict}=    Evaluate    ${json_data}    json
    Set Suite Variable    ${json_dict}
    log  ${json_dict} 


Iterate through all files
    Open Available Browser    http://localhost:3000/
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
Open the website
    ${link}=    Set Variable    ${json_dict["Link"]}
    Log To Console     ${link} 
    Log   ${link} 
    Open Available Browser    ${link}  

Add payroll entry
    [Arguments]    ${FIRSTNAME}    ${LASTNAME}    ${EMAIL}    ${SALARY}
    Click Button    //*[@id="addButton"]
    Input Text    //*[@id="firstName"]    ${FIRSTNAME}
    Input Text    //*[@id="lastName"]    ${LASTNAME}
    Input Text    //*[@id="email"]    ${EMAIL}
    Select From List By Value    //*[@id="month"]    ${MONTH}
    Input Text    //*[@id="salary"]    ${SALARY}
    ${DATE}    Get Current Date
    Log    ${DATE}
    Execute Javascript    return document.getElementById('date').value = '${DATE}';
    Select Checkbox    //*[@id="terms"]
    Click Button    //*[@id="addButton"]
    Close Workbook


