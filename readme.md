Exercise:
Create a new project folder called node_fs
Inside of node_fs, create the 4 following js files:
createFile.js
readFile.js
updateFile.js
deleteFile.js
Inside of createFile.js:
Require the fs module
Implement the fs.writeFile() function, creating a txt file called HelloWorld.txt, with Hello, World! inside
Use the async version
Run node createFile.js to create the file
Inside of readFile.js:
Require the fs module
Implement the fs.readFile()
You can either read the contents of the HelloWorld.txt file, or any other file you create in your project
Run node readFile.js to read the file to the console
Inside of updateFile.js
Require the fs module
Using the appendFile() function, append some text to the end of your HelloWorld.txt
Run node update.js
Inside of deleteFile.js
Require the fs module
Implement the fs.unlink()
Run node deleteFile.js

BONUS

Part 1: Using both the http and fs module, create a server that sends an html page back to the client upon request. You must have at minimum two html pages with corresponding routes, and a 404 not found page.
Part 2: Create a custom logger for accounting for requests to your server. Each time a request event is emitted by your server, send the appropriate html file back, but also log the following information to a file: Request method, url, response status code, and timestamp
The timestamp can be any format you like, but it a least should show the time of day that the request was made
