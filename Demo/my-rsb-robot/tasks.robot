*** Settings ***
Documentation       Put the salaries into payroll system from payroll files recieved from employees via email

Library             RPA.Browser.Selenium    auto_close=${FALSE}
Library             RPA.Email.ImapSmtp    smtp_server=smtp.gmail.com    smtp_port=587
Library             RPA.Excel.Files
Library             RPA.Excel.Application
Library             RPA.FileSystem
Library             DateTime


*** Variables ***
${MONTH}        June
${RECIPIENT}    bptlab.mdrpa@gmail.com
${USERNAME}     MdRPA
${PASSWORD}     wdanyckqieooxell


*** Tasks ***
Download payrolls
    Authorize    account=${USERNAME}    password=${PASSWORD}
    ${attachments}    Save Attachments    SUBJECT Payroll_${MONTH}
    ...    target_folder=${CURDIR}${/}Payrolls    overwrite=${True}

Put salaries in payroll system
    # Open the payroll System
    Iterate through all files


*** Keywords ***
# Open the payroll System
#    Open Available Browser    http://localhost:3000/

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
