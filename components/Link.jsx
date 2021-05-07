import { Link as NextLink } from 'next/link'

export default function Link({ children, href }) {
    if (href.startsWith('/')) {
        return <NextLink to={href}>{children}</NextLink>
    }

    // Check if the link is for a section on the page
    // We don't want to add the attributes for the on page links
    const onPage = href.startsWith('#')

    return (
        <a
            href={href}
            // Open the link in a new page
            target={onPage ? null : '_blank'}
            // Add noopener and noreferrer for security reasons
            rel={onPage ? null : 'noopener noreferrer'}
        >
            {children}
        </a>
    )
}