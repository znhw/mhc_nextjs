import fs from "fs"
import matter from "gray-matter"
import { PostMetadata } from './PostMetadata';


// Get a list of content from folder with the file name
const getPostMetadata = (): PostMetadata[] => {
    const folder = "src/lessons/math-form-1/"
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter((file) => file.endsWith(".md"))
    // const slugs = markdownPosts.map((file) => file.replace(".md", ""))
    // return slugs
  
    //Get gray-matter data from each file
    const lessons = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`src/lessons/math-form-1/${fileName}`, "utf8")
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
  