#Development friendly
The project can be extended further with some minor changes.This is development friendly project where all the configs are done to avoid re running of files if there are any changes. In backend if developer have made any changes the ts file is automatically converted to js and deployed. Hot module replacement happens. so that developer can see the changes live with no commads.we are using nodemon and written configs to generate js from ts when here are any changes. The same is the case with frontend we are using parcel here to track live changes.

#Steps to run
clone the git reository
 open the folder in vs code
 open backend->.env and change the environment variables accoring to you

 >cd Crypto
 >npm install   to install necessary node_modules
 >npm run start:backend   to start the backend server
 >npm run start:frontend  to start the frontend at endpoint using parcel

 the UI initially shows table with crypto table names and prices live the UI loads every 15seconds
 If user clicks on the crypto element name that particular elements page opens and user can see all the data related to that element live