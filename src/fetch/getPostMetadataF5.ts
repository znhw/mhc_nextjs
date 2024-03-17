import fs from "fs"
import matter from "gray-matter"
import { PostMetadata } from './PostMetadata';


// Get a list of content from folder with the file name
const getPostMetadata = (): PostMetadata[] => {
    const folder = "/lessons/math-form-5/"
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter((file) => file.endsWith(".md"))
  
    //Get gray-matter data from each file
    const lessons = markdownPosts.map((fileName) => {
      const fileContents = fs.readFileSync(`/lessons/math-form-5/${fileName}`, "utf8")
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
  