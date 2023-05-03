# CASA

## Members

## Videos
Please follow the links below to access videos

### Quick Overview
[Here](https://drive.google.com/file/d/1iaMmqh-mrBZOOPYUfQ1fYrgnWt0neb-W/view?usp=share_link) is a high level overview of our project.
### Code Walk-Through 
[Here](https://drive.google.com/file/d/1kJW_JT9ePeztvR4b3kW1C3PrTd3VkP2c/view?usp=share_link) is a 3-minute code walkthrough.
### Experiment Detail
(link)

## Source Code
Source code is available via: [github](https://github.com/csu-hci-projects/SP23-Context-Awareness-Sound-Alerts).

### Launch Instructions
#### Web App
##### Dependencies
* nodejs 19.3.0
##### How To Run
__IMPORTANT! There is a credential needed for the app to function properly to allow access to the database __
First manually add the file included in this zip called "mongoKey.js" to a new directory `server/creds`.
So the file should be found at `(REPO ROOT)/server/creds/mongoKey.js`
Execute the run script with the arguments `init` first, then `dev`
```
# From the repo root
sh bin/run.sh init && sh bin/run.sh dev
```
This will install all node dependencies and launch the web application in a browser window.
##### Debug Mode
In the very top left corner of the application, there is a hidden button that will activate _debug_ mode. The cursor will turn in to a pointer icon, simply click to toggle.
This will allow extra functionality and the ability to monitor data as it is aggregated during the experiment.
#### Data Analysis via jupyter notebook
#### Dependencies
* python 3.11.1
  * numpy
  * pymongo
  * pandas
  * matplotlib
  * jupyter
#### How To Run
With dependencies installed, use your favorite jupyter notebook client to execute `tools/data-visualization.ipynb`.
