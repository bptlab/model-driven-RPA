# MdRPA

Introduce a UI model as an abstraction layer between the UI and the RPA bots.
For detailed documentation, please refer to [Wiki]().

## Installation

#### Our recommendation: Robocorp RPA Software Installation Guide

To build, test, and run your robot, we recommend using Visual Studio Code with the Robocorp Code extension. This integrated development environment (IDE) provides all the necessary tools for creating software robots using human-readable syntax. Make sure you have the following:

- Visual Studio Code installed on your machine. You can download it from the [official website](https://code.visualstudio.com/download).
- Robocorp Code extension and the Robot Framework Language Server extension. These can be installed from within Visual Studio Code itself.

1.  Download and install Visual Studio Code from the [official website](https://code.visualstudio.com/download). Choose the version compatible with your operating system.
2.  Launch Visual Studio Code and install the required extensions:
    - Robocorp Code extension: Open VS Code, go to the Extensions view (Ctrl+Shift+X), and search for "Robocorp Code." Click on the extension and click "Install."
    - Robot Framework Language Server extension: Similarly, search for "Robot Framework Language Server" in the Extensions view and install the extension.
3.  With the extensions installed, you're ready to start running the robot using Visual Studio Code with the Robocorp Code extension!

#### Prerequisites
- Python: make sure you have [python](https://www.python.org/downloads/) installed 
- Robot Framework: make sure you have [robot framework](https://robotframework.org/?tab=1#getting-started) installed
- RPA Framework: make sure you have [rpa framework](https://rpaframework.org/#installation) installed
- [MdRPA Library](https://github.com/bptlab/MdRPA_Library): in order to execute robot framework bots using the UI Models please execute the following command in you cmd "pip install mdrpaLibrary" 
 

#### Installation Steps
- In the backend folder run the command "npm i"
- In the frontend folder run the command "npm i"

Addition: If you want to try out our given example (payroll robot) please also navigate to the folder "Examples/payroll-system" and run the command "npm i"

## Usage
- To start the frontend navigate to the "Frontend" folder and execute the command "npm start"
- To start the backend navigate to the "Backend" folder and execute the command "npm run start"

Addition: If you want to try out our given example (payroll robot) please also navigate to the folder "Examples/payroll-system" and run the command "npm start"

## Contributing

Just follow the following recommended process:

- Fork it
- Create your feature branch (`git checkout -b my-new-feature`)
- Ensure your new code is tested thoroughly
- Commit your changes (`git commit -am 'Add some feature'`)
- Push to the branch (`git push origin my-new-feature`)
- Create new Pull Request

## License
