const fs = require('fs'); // fs- filesystem

//read file
fs.readFile('./welcome.txt',"utf-8", (err,data)=>{
    console.log(data);
});

const quote = "No beauty shines brighter than that of a good heart 🥳!!!"
const niceQuote = "\nMake everyday a little less ordinarily 🗼 ";
//write file
//fs.appendFile('./awesome.txt', niceQuote, (err)=>{
//    console.log("Complete writing!!!");
//});

fs.writeFile("./awesome.txt", quote, (err)=>{
    console.log("Completed writing!!!");
});
//fs.writeFileSync("./awesome.txt", quote);

fs.unlink("./awesome.txt",(err)=>{
    console.log("Delete successfully!");
});


const quote2 ="Live more, worry less 🌴🦚🏍";
//setTimeout
function createQuotes(noOfFiles, quote){
    for (let i =1; i<=noOfFiles; i++){
        fs.writeFile(`./backup/text-${i}.txt`, quote2,(err)=>{
            console.log("Complete writing!!!", i);
        });
    }
    
}

const [, , noOfFiles] = process.argv;
createQuotes(noOfFiles,quote2);

//readdir - readdirectly
fs.readdir("./backup", (err,files)=>{
    if(err){
        console.log(err);
    }
    console.log(files);
});