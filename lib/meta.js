import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'

export function getYmlFileContents(fileName) {
    const filePath = path.join(process.cwd(), '/meta/' + fileName)
    return fs.readFileSync(filePath, 'utf8')
}

export function getAuthor(slug) {
    const fileContents = getYmlFileContents('authors.yml')
    const { authors } = yaml.load(fileContents)

    return authors.filter(author => {
        return author.slug === slug
    })[0]
}

export function getAllLanguages() {
    const fileContents = getYmlFileContents('languages.yml')
    const { languages } = yaml.load(fileContents)

    return languages
}

export function getLanguage(slug) {
    const fileContents = getYmlFileContents('languages.yml')
    const { languages } = yaml.load(fileContents)

    return languages.filter(language => {
        return language.slug === slug
    })[0]
}

export function getAllTags() {
    const fileContents = getYmlFileContents('tags.yml')
    let { tags } = yaml.load(fileContents)

    return tags
}

export function getTags(slugs) {
    const fileContents = getYmlFileContents('tags.yml')
    const { tags } = yaml.load(fileContents)

    return slugs.map(slug => {
        return tags.filter(tag => {
            return tag.slug === slug
        })[0]
    })
}

