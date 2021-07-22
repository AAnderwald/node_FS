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

// or take line 3 out and change line 5 to: fs.appendFile("HelloWorld.txt", "Hello Word! If you want to survive out here, you've got to know where your towel is", (error) =>