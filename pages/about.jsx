import Layout from '../components/Layout'
import Link from 'next/link'

export default function About() {
    return (
        <Layout pageTitle={"About | Risan's Blog"}>
            <p className={"mt-4"}>A full stack developer who loves to learn and exercise both his analytical and creative muscles. Comfortable using <span className={"bg-indigo-50"}>Node.js, Express, PostgreSQL, Sequelize</span> on the backend and <span className={"bg-indigo-50"}>React, Next.js</span> on the frontend.</p>

            <div className={"mt-4 flex"}>
                <Link href={"https://github.com/risanto"}>
                    <a target={"_blank"}>
                        <img
                            className={"hover:cursor-pointer hover:-translate-y-1 transform transition hover:duration-300 bg-indigo-50 rounded p-1"}
                            src="/img/github.svg" height={25} width={25}
                        />
                    </a>
                </Link>
                <Link href={"https://www.linkedin.com/in/risantomulyo/"}>
                    <a target={"_blank"}>
                        <img
                            className={"ml-2 hover:cursor-pointer hover:-translate-y-1 transform transition hover:duration-300 bg-indigo-50 rounded p-1"}
                            src="/img/linkedin.svg" height={25} width={25}
                        />
                    </a>
                </Link>
            </div>
        </Layout>
    )
}