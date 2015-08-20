@echo off
where /q npm  || (echo npm does not exist: pause: exit)
where /q node || (echo node does not exist: pause: exit)

npm install big-integer
npm install colors
