import Layout from '../components/Layout'
import Link from 'next/link'

export default function About() {
    return (
        <Layout
            pageTitle={"About Risan"}
            description={"A full stack developer who loves to learn and exercise both his analytical and creative muscles."}
            // previewImage={}
            // siteName={}
        >
            <p className={"mt-4"}>I'm Risan, a full stack developer who loves to learn and exercise both my analytical and creative muscles. I'm comfortable using <span className={"bg-indigo-50 dark:text-gray-500"}>Node.js / Express / PostgreSQL / Sequelize</span> on the backend and <span className={"bg-indigo-50 dark:text-gray-500"}>React / Next.js</span> on the frontend.</p>

            <p className={"mt-4"}>I started this personal site to write about programming, personal development, and also showcase my personal projects.</p>

            <div className={"mt-8 flex"}>
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