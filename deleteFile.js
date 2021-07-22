import fs from "fs";

fs.unlink ("HelloWorld.txt", (error) =>
{
    if(error)
    {
        console.log(error);
    }else {
        console.log("Things were deleted");
    }
});
