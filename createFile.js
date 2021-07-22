import fs from "fs";

fs.writeFile("HelloWorld.txt", "Hello World!", (error) => 
{ 
    if (error) 
    {
        console.log(error);
        return;
    } else {
        console.log ( "Text Hello World");
    }
})