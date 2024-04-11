# Plant Monitor
This repository focuses on providing a comprehensive plant monitoring system designed to assist farmers in maintaining healthy crops.

## About the Project
This project empowers efficient crop management with real-time insights on disease, soil moisture, irrigation scheduling, and farming best practices.

## Getting started with the project
Follow these instructions to set up this project on your system.

### Prerequisites

Follow these steps to install ROS Humble and OpenCV
* ROS Humble
Refer to the official [ROS 2 installation guide](https://docs.ros.org/en/humble/Installation.html)

* OpenCV
  ```bash
  pip install opencv-contrib-python
  ```
* MediaPipe
  ```bash
  pip install mediapipe
  ```
* npm and node
  Refer to the official [https://nodejs.org/en/download]
  Once you've installed Node.js, open your terminal and type:
  ```bash
  node -v
  npm -v
  ```
* vite
  Follow the official guide [https://vitejs.dev/guide/]
* Arduino IDE
  Follow the official website [https://www.arduino.cc/en/software]

### Installation

1. Make a new workspace
    ```bash
    mkdir -p plant_monitor/src
    ```

2. Clone the ROS-Perception-Pipeline repository

    Now go ahead and clone this repository inside the "src" folder of the workspace you just created.

      ```bash
      cd plant_monitor/src
      git clone git@github.com:pragyajhaa/plant_monitor.git
      ```

3. Compile the package

    Follow this execution to compile your ROS 2 package
  
      ```bash
      colcon build --symlink-install
      ```

4. Source your workspace
      ```bash
      source install/local_setup.bash
      ```

## Contributing

We wholeheartedly welcome contributions!  
They are the driving force that makes the open-source community an extraordinary space for learning, inspiration, and creativity. Your contributions, no matter how big or small, are **genuinely valued** and **highly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/New-Feature`)
3. Commit your Changes (`git commit -m 'Add some New-Feature'`)
4. Push to the Branch (`git push origin feature/New-Feature`)
5. Open a Pull Request

Please adhere to this project's `code of conduct`.

## License
[MIT](https://choosealicense.com/licenses/mit/)
