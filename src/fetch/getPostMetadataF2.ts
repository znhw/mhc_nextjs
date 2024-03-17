import fs from "fs"
import matter from "gray-matter"
import { PostMetadata } from './PostMetadata';
import path from "path";

// Get a list of content from folder with the file name
const getPostMetadata = (): PostMetadata[] => {
    const folder = "public/lessons/math-form-2/"
    const files = fs.readdirSync(folder)
    // const files = fs.readdirSync(path.join('./lessons/math-form-2'))
    const markdownPosts = files.filter((file) => file.endsWith(".md"))
  
    //Get gray-matter data from each file
    const lessons = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`public/lessons/math-form-2/${fileName}`, "utf8")
      const matterResult = matter(fileContents)
      return {
        title: matterResult.data.title,
        date: matterResult.data.date,
        slug: fileName.replace(".md", "")
      }
    })
  
    return lessons
}

export default getPostMetadata;
