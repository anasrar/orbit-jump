import fileSystem from "fs";
import archiver from "archiver";
import chalk from "chalk";

let output = fileSystem.createWriteStream("./build-game.zip");
let archive = archiver("zip", {
    zlib: {
        level: 9
    }
});

output.on("close", () => {
    let size = archive.pointer();
    console.log(chalk.green("Create zip success, output build-game.zip"));
    console.log(`Size ${archive.pointer()} Byte`);
    console.log(size <= 13312 ? chalk.green("Zip file size is qualified for js13kgames") : chalk.red("Zip file size is to big"));
});

archive.on("error", err => {
    throw err;
});

archive.pipe(output);
archive.directory("./dist", false);
archive.finalize();