import Nav from './Nav'

export default function Layout({ children }) {
    return (
        <div>
            <div className={"px-8 md:px-16 pt-4 pb-16 max-w-screen-md mx-auto"}>
                <Nav />
                {children}
            </div>
        </div>
    )
}
