#!/bin/bash

REPO_ROOT="$(git rev-parse --show-toplevel)"

cd $REPO_ROOT/final-deliverable
zip -v -r "$REPO_ROOT/CASA-CS464-SP2023.zip" ./*