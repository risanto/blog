import { useRouter } from 'next/router'

export default function useRedirect() {
    const router = useRouter()

    /*
    Example:

    pathname: '/'
    newQueries: { tags: 'react', language: 'id' }
    */
    return function redirect(pathname, newQueries) {
        let query = router.query

        for (let key in newQueries) query[key] = newQueries[key]

        router.push({
            pathname, query
        })
    }
}