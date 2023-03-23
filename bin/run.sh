#!/bin/bash

REPO_ROOT="$(git rev-parse --show-toplevel)"
LOGGING=1 #true
LOG_LOCATION="runlog.log"

local_log()
{
  if [ $LOGGING -eq 1 ]; then
    echo "$(date) $1" >> "$REPO_ROOT/$LOG_LOCATION"
  fi
}
print_log(){
  echo "$1"
  local_log "$1"
  }

print_error(){
  echo -e "\033[31;1m$1\033[0m"
  local_log "$1"
  }

print_success(){
  echo -e "\033[92;1m$1\033[0m"
  local_log "$1"
  }

print_header(){
  echo -e "\033[37;1;46m$1\033[0m"
  local_log "$1"
  }

# Run arguments
run_dev(){
  print_header "Running Dev"
  print_success "Running Express Server for sounds"
  cd "$REPO_ROOT"/server && node index.js &
  print_success "Running webpack and browser"
  cd "$REPO_ROOT"/client && npm run dev &
}

run_init(){
  print_header "Running Init"
  print_log "Running npm install."
  cd "$REPO_ROOT"/client && npm install
}

run_stop(){
  print_header "Running Stop"
  WEBPACK_PID=$(pgrep webpack)
  if [ "$WEBPACK_PID" != "" ] && [ "$WEBPACK_PID" -gt 0 ]; then
    print_success "Found webpack, pid: $WEBPACK_PID, killing..."
    kill "$WEBPACK_PID"
  else
    print_error "Webpack pid not found, maybe it wasn't running?"
  fi
}


# RUN and parse arguments
if  [ $# -eq 0 ] || [ $1 == "dev" ]; then
  run_dev
elif [ $1 == "init" ]; then
  run_init
elif [ $1 == "stop" ]; then
  run_stop
fi

