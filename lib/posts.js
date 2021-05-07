import fs from 'fs'
import path from 'path'
import * as matter from 'gray-matter'
import yaml from 'js-yaml'
import readingTime from 'reading-time'
import { getTags } from './meta'

const postsDirectory = path.join(process.cwd(), "pages/posts")

let postCache = []

export function fetchAllPostContent() {
    if (postCache.length) return postCache

    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory)

    const allPostsData = fileNames
        .filter((it) => it.endsWith(".mdx"))
        .map((fileName) => {

            // Read markdown file as string
            const fullPath = path.join(postsDirectory, fileName);
            const fileContent = fs.readFileSync(fullPath, "utf8")

            // Use gray-matter to parse the post metadata section
            let parsedPost = matter(fileContent, {
                engines: {
                    yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA })
                }
            })

            // Create slug based on file name without .md
            parsedPost.data.slug = fileName.slice(0, fileName.length - 4)
            parsedPost.data.tags = getTags(parsedPost.data.tags)
            parsedPost.data.readingTime = readingTime(parsedPost.content)

            return parsedPost
        })

    // add to cache and sort by date
    postCache = allPostsData.sort((a, b) => {
        return a.date < b.date ? 1 : -1
    })

    return allPostsData
}

export function getAllPostIds() {
    let fileNames = fs.readdirSync(postsDirectory)

    fileNames = fileNames.filter(fileName => fileName.includes('md'))

    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace('.mdx', '')
            }
        }
    })
}

export async function getPostData(slug) {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    // Use gray-matter to parse the post metadata section
    let matterResult = matter(fileContents, {
        engines: {
            yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA })
        }
    })

    matterResult.data.readingTime = readingTime(matterResult.content)
    matterResult.data.content = matterResult.content

    return {
        slug,
        ...matterResult.data
    }
}