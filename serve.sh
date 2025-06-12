#!/bin/bash
# Simple script to serve the Docsify site locally for testing

PORT=3000

if command -v python3 &> /dev/null; then
    echo "Serving on http://localhost:$PORT"
    python3 -m http.server $PORT
else
    echo "Python3 is required to run this script. Please install Python3."
    exit 1
fi
