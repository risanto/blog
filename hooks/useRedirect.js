import { useRouter } from 'next/router'

export default function useRedirect() {
    const router = useRouter()
    
    return function redirect(pathname, newQueries) {
        let query = router.query

        for (let key in newQueries) query[key] = newQueries[key].join(',')

        router.push({
            pathname, query
        })
    }
}