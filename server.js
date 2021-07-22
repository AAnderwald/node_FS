import {createServer} from "http";
import {readFile} from "fs";
import path from "path";

createServer ((request, response)  =>   
{
    const {url, method} = request; 
    
    let filePath = "404.html";
    let status = 200;   

    if (url == "/")
    {
        filePath = "homePage.html";
    } else if(url == "/about") {
        filePath = "aboutMe.html";  
     
    } else {
        status = 404;
    }
    
    readFile (
        path.join(process.cwd(), "./pages/" + filePath),
        "utf8",
        (error, contents) =>
        {
            if (error) 
            {
                console.error(error);
                status = 500;
                content = "Server issues, please try again.";
            }
            
            console.log(method, url, status, new Date().toLocaleTimeString());
            
            response.writeHead(status, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        }
    );
})

.listen(3000, () => console.log (" Server listening on port 3000 . ."));
