
#!/bin/bash
   file="package.json"
   if [ -e "$file" ]; then
     npm install
     ls
   echo "configure file exists"
   else
   echo "configure file does not exist"
   exit 1
  fi
