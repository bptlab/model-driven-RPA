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
Resource   ../../Database/Robot/Payroll.robot


*** Tasks ***


Run Payroll Robot
    Run Payroll

*** Keywords ***


