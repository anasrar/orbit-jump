import fileSystem from "fs";

const fileTarget = "./dist/index.html";

fileSystem.readFile(fileTarget, "utf-8", (err, data) => {
    if (err) throw err;

    fileSystem.writeFile(fileTarget, data.replace(` type="module"`, ""), "utf-8", (err, data) => {
        if (err) throw err;
        console.log("Remove Module Attribute Success");
    })
});