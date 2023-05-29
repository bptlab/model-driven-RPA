*** Settings ***
Documentation     Get Data from JSON and use that in robot.
Library    RPA.Browser.Selenium  auto_close=${FALSE}
Library           RPA.HTTP
Library           OperatingSystem
Library    BuiltIn
Library    RPA.JSON



*** Tasks ***
Get Data from JSON and use that in robot
    Open the website
    Sleep    5 seconds
    Go to Register Page
    Sleep    2 seconds
    Input Data for Register Page and Submit
    Sleep    2 seconds
    Input Data for Login Page and Submit

   
*** Keywords ***
Open the website
    ${json_data}=    Get File    test.json
    ${json_dict}=    Evaluate    json.loads('''${json_data}''')
    ${link}    Set Variable    ${json_dict["Link"]}
    Log To Console     ${link} 
    Open Available Browser    ${link}     

Go to Register Page
    ${json_data}=    Get File    test.json
    ${json_dict}=    Evaluate    json.loads('''${json_data}''')
    ${register_button}    Set Variable    ${json_dict["elements"][0]["homePageRegister"]}
    Wait Until Page Contains Element    id=${register_button}    timeout=10s
    Click Element      ${register_button}
   
Input Data for Register Page and Submit
    ${json_data}=    Get File    test.json
    ${json_dict}=    Evaluate    json.loads('''${json_data}''')
    ${first_name}    Set Variable    ${json_dict["elements"][1]["firstNameSignup"]}
    Wait Until Page Contains Element    id=${first_name}    timeout=10s
    Input Text   ${first_name}    ali
    Sleep  2 seconds
    ${last_name}    Set Variable    ${json_dict["elements"][1]["lastNameSignup"]}
    Wait Until Page Contains Element    id=${last_name}    timeout=10s
    Input Text   ${last_name}    kazmi
    Sleep    2 seconds
    ${password}    Set Variable    ${json_dict["elements"][1]["passwordSignup"]}
    Wait Until Page Contains Element    id=${password}    timeout=10s
    Input Password   ${password}    123456789
    Sleep    2 seconds
    ${confirm_password}    Set Variable    ${json_dict["elements"][1]["confirmPasswordSignup"]}
    Wait Until Page Contains Element    id=${confirm_password}    timeout=10s
    Input Password   ${confirm_password}    123456789
    Sleep    2 seconds
    ${male_signup}    Set Variable    ${json_dict["elements"][1]["maleSignup"]}
    Wait Until Page Contains Element    id=${male_signup}    timeout=10s
    Click Element  ${male_signup}   
    Sleep    2 seconds
    ${email}    Set Variable    ${json_dict["elements"][1]["emailSignup"]}
    Wait Until Page Contains Element    id=${email}    timeout=10s
    Input Text   ${email}    alikazmi187248@gmail.com
    Sleep    2 seconds
    ${contact}    Set Variable    ${json_dict["elements"][1]["contactSignup"]}
    Wait Until Page Contains Element    id=${contact}    timeout=10s
    Input Text   ${contact}    +4900000000000000
    Sleep    2 seconds
   ${type_signup}    Set Variable    ${json_dict["elements"][1]["typeSignup"]}
    Wait Until Page Contains Element    id=${type_signup}    timeout=10s
    Click Element  ${type_signup}   
    Sleep    2 seconds
   ${property_signup}    Set Variable    ${json_dict["elements"][1]["propertySignup"]}
    Wait Until Page Contains Element    id=${property_signup}    timeout=10s
    Click Element  ${property_signup}   
    Sleep    2 seconds
    ${submit}    Set Variable    ${json_dict["elements"][1]["submitSignup"]}
    Wait Until Page Contains Element    id=${submit}    timeout=10s
    Click Element  ${submit}   
    Sleep    2 seconds
Input Data for Login Page and Submit
    ${json_data}=    Get File    test.json
    ${json_dict}=    Evaluate    json.loads('''${json_data}''')
    ${username}    Set Variable    ${json_dict["elements"][2]["usernameLogin"]}
    Wait Until Page Contains Element    id=${username}    timeout=10s
    Input Text   ${username}    alikazmi
    Sleep  2 seconds
    ${password}    Set Variable    ${json_dict["elements"][2]["passwordLogin"]}
    Wait Until Page Contains Element    id=${password}    timeout=10s
    Input Password   ${password}    123456789
    Sleep    2 seconds
    ${radio}    Set Variable    ${json_dict["elements"][2]["signInRadioStudent"]}
    Wait Until Page Contains Element    id=${radio}    timeout=10s
    Click Element  ${radio}   
    Sleep    2 seconds
    ${remember}    Set Variable    ${json_dict["elements"][2]["rememberLogin"]}
    Wait Until Page Contains Element    id=${remember}    timeout=10s
    Click Element  ${remember}   
    Sleep    2 seconds
    ${submit}    Set Variable    ${json_dict["elements"][2]["loginButton"]}
    Wait Until Page Contains Element    id=${submit}    timeout=10s
    Click Element  ${submit}   
    Sleep    2 seconds