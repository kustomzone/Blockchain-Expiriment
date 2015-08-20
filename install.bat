@echo off
npm -v > nul
if %errorlevel%==9009 (echo npm does not exist: exit)
np
node -v > nul
if %errorlevel%==9009 (echo node does not exist: exit)

npm install big-integer
npm install colors
