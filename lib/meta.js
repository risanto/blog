import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'

export function getYmlFileContents(fileName) {
    const filePath = path.join(process.cwd(), '/meta/' + fileName)
    return fs.readFileSync(filePath, 'utf8')
}

export async function getAuthor(slug) {
    try {
        const fileContents = getYmlFileContents('authors.yml')
        const { authors } = yaml.load(fileContents)

        return authors.filter(author => {
            return author.slug === slug
        })[0]

    } catch (error) {
        console.log(error)
    }
}

export async function getAllLanguages() {
    try {
        const fileContents = getYmlFileContents('languages.yml')
        const { languages } = yaml.load(fileContents)

        return languages

    } catch (error) {
        console.log(error)
    }
}

export async function getLanguage(slug) {
    try {
        const fileContents = getYmlFileContents('languages.yml')
        const { languages } = yaml.load(fileContents)

        return languages.filter(language => {
            return language.slug === slug
        })[0]

    } catch (error) {
        console.log(error)
    }
}

export async function getAllTags(slugs) {
    try {
        const fileContents = getYmlFileContents('tags.yml')
        const { tags } = yaml.load(fileContents)

        return tags

    } catch (error) {
        console.log(error)
    }
}

export async function getTags(slugs) {
    try {
        const fileContents = getYmlFileContents('tags.yml')
        const { tags } = yaml.load(fileContents)

        return slugs.map(slug => {
            return tags.filter(tag => {
                return tag.slug === slug
            })[0]
        })

    } catch (error) {
        console.log(error)
    }
}

