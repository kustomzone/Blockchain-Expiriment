if npm; then
  echo npm exists
else 
  echo npm does not exist.
fi
if node -v; then
  echo node exists
else 
  echo node does not exist
fi
npm install colors
npm install big-integer
