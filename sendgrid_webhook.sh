#!/usr/bin/env bash
function localtunnel {
  lt -s qewmlmlzoxi --port 3001
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done