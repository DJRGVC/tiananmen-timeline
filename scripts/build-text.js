import {convertToHtml} from "mammoth"
import {DomHandler,Parser} from "htmlparser2"
import archieml from "archieml"
import {writeFileSync, existsSync, mkdirSync} from 'fs'
import { source_dir, data_file, files_to_copy } from "../src/app.config.js";

// Create the output directories (if they don't exist)
let dir = "./static/data";
if (!existsSync(dir)){
    mkdirSync(dir, { recursive: true });
}

function extractText(elements) {
    let text = "";
    for (const element of elements) {
        if (element.type === "text") {
            text += element.data;
        } else if (element.type === "tag" && element.name !== "a") {
            const childText = extractText(element.children);
            // Add a line break after child text, except for the first element
            if (text.length > 0) {
                text += "\n";
            }
            text += childText;
        } else if (element.type === "tag" && element.name === "a") {
            text += `<a${stringifyAttributes(element.attribs)}>${extractText(element.children)}</a>`;
        }
    }
    return text;
  }
  
  function stringifyAttributes(attribs) {
    return Object.entries(attribs)
        .map(([key, value]) => ` ${key}="${value}"`).join("");
  }
  
  const handler = new DomHandler((error,dom)=>{
    if (error){
      console.log(error)
    }else{
      const extractedText = extractText(dom);
    //   console.log(archieml.load(extractedText)); 
      writeFileSync('./static/data/text.json',JSON.stringify({text:archieml.load(extractedText)}),(err)=>{
        if(err){
          console.error("error saving file:",err)
        } else {
          console.log("text saved to text.json")
        }
      })
    }
  })
  
  const parser2 = new Parser(handler)
  
  convertToHtml({ path: `${source_dir}/${data_file}` })
    .then((result) => {
      parser2.write(result.value)
      parser2.end()
    })

// Copy other files from source
files_to_copy.forEach(file => {
    const path = `./static/data/${file}`;
    copyFileSync(`${source_dir}/${file}`, path);
    console.log(`Copied ${path}`);
});