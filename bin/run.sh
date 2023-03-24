#!/bin/bash

REPO_ROOT="$(git rev-parse --show-toplevel)"
LOGGING=1 #true
LOG_LOCATION="runlog.log"
CLIENT_PORT=11111
SERVER_PORT=22222

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

kill_proc_listing_on_port(){
  if [ $# -ne 0 ]; then
    PROC=$(lsof -t -i ":$1")
    # Replace any new line with space
    PROC_STRIP=$(echo "$PROC" | tr '\n' ' ')
    if [ -n "$PROC_STRIP" ]; then
      for process in $PROC_STRIP; do
        kill "$process"
        print_success "Killed $process listening on port $1."
      done
    else
      print_error "No process found on port $1. Maybe it wasn't running?"
    fi
  else
     print_error "Error, no port specified to kill."
 fi
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
  print_log "Running npm install for client."
  cd "$REPO_ROOT"/client && npm install
  print_log "Running npm install for server."
  cd "$REPO_ROOT"/server && npm install
}

run_stop(){
  print_header "Running Stop"
  kill_proc_listing_on_port "$SERVER_PORT"
  kill_proc_listing_on_port "$CLIENT_PORT"
}


# RUN and parse arguments
if  [ $# -eq 0 ] || [ $1 == "dev" ]; then
  run_dev
elif [ $1 == "init" ]; then
  run_init
elif [ $1 == "stop" ]; then
  run_stop
fi

