#!/bin/bash
# Script for setting up a virtual environment using pyenv
# More info: https://realpython.com/intro-to-pyenv/

# Setting up local environment
pyenv install 3.11.1
pyenv virtualenv 3.11.1 CASA
pyenv local CASA

# Libraries
pip install pymongo pandas
