import Nav from './Nav'

export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <div className={"px-4 pt-4 pb-16 max-w-screen-md mx-auto"}>
                {children}
            </div>
        </>
    )
}
