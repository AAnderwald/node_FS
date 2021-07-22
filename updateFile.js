import fs from "fs";

let add_onWords = " If you want to survive out here, you've got to know where your towel is "

fs.appendFile("HelloWorld.txt", add_onWords, (error) =>
{
    if (error)
    {
        console.log(error);
        return;
    }
    console.log("this was appended.");
} );