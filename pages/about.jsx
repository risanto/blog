import Layout from '../components/Layout'
import TechList from '../components/TechList'
import ProjectLinks from '../components/ProjectLinks'
import Link from 'next/link'

export default function About() {
    return (
        <Layout
            pageTitle={"About Risan"}
            description={"A full stack developer who loves to learn and exercise both his analytical and creative muscles."}
        // previewImage={}
        // siteName={}
        >
            {/* Introduction */}
            <p className={"mt-4"}>I'm Risan, a full stack developer who loves to learn and exercise both my analytical and creative muscles.</p>

            <p className={"mt-4"}>I enjoy using <span className={"bg-indigo-50 dark:text-gray-700"}>Node.js / Express / PostgreSQL / Sequelize</span> on the backend and <span className={"bg-indigo-50 dark:text-gray-700"}>React / Next.js</span> on the frontend.</p>

            <p className={"mt-4"}>I started this personal site to write about programming, personal development, and also showcase my personal projects.</p>

            {/* External sites */}
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

            <p className={"mt-10"}>Some of the projects I made:</p>

            {/* Projects */}
            <section className={"mb-4"}>
                <article className={"mt-8"}>
                    <img
                        className={"transform transition hover:-translate-y-2 hover:duration-500"}
                        src={"/img/cooken-project.png"}
                    />

                    <div className={"transform transition hover:-translate-y-1 hover:duration-500 flex flex-col"}>
                        <div className={"flex mt-4"}>
                            <h3 className={"border border-indigo-50 bg-indigo-50 self-start z-10 px-1 text-lg relative top-1 dark:text-gray-700 rounded-tl rounded-br"}>Cooken</h3>

                            <TechList names={["react", "expressjs", "postgres", "sequelize"]} />
                        </div>

                        <div className={"px-4 pt-5 pb-4 border rounded-lg relative -top-3 ml-2 dark:border-gray-700"}>
                            <p>An application where users can search for recipes based on the the ingredients they have, using a third-party API to fetch the data.</p>

                            <ProjectLinks
                                items={[
                                    {
                                        name: "GIF",
                                        href: "https://s4.gifyu.com/images/cooken.gif"
                                    },
                                    {
                                        name: "Live site",
                                        href: "https://cooken.netlify.app"
                                    },
                                    {
                                        name: "Github",
                                        href: "https://github.com/risanto/cooken"
                                    },
                                    {
                                        name: "Blog",
                                        href: "https://github.com/risanto/cooken"
                                    }
                                ]}
                            />
                        </div>
                    </div>
                </article>
            </section>
        </Layout>
    )
}