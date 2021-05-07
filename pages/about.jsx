import Layout from '../components/Layout'
import TechPill from '../components/TechPill'
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

            <p className={"mt-4"}>I enjoy using <span className={"bg-indigo-50 dark:text-gray-500"}>Node.js / Express / PostgreSQL / Sequelize</span> on the backend and <span className={"bg-indigo-50 dark:text-gray-500"}>React / Next.js</span> on the frontend.</p>

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
                            <h3 className={"border border-indigo-50 bg-indigo-50 self-start z-10 px-1 text-lg relative top-1"}>Cooken</h3>

                            <div className={"flex flex-row items-center justify-center flex-grow relative top-1"}>
                                <img className={"transform transition hover:-translate-y-1 hover:duration-500 z-10"} src={"/img/react.png"} width={30} />

                                <img className={"transform transition hover:-translate-y-1 hover:duration-500 z-10 bg-white p-1"} src={"/img/expressjs.png"} width={80} />

                                <img className={"transform transition hover:-translate-y-1 hover:duration-500 z-10 p-1"} src={"/img/postgres.png"} width={30} />

                                <img className={"transform transition hover:-translate-y-1 hover:duration-500 z-10 p-1"} src={"/img/sequelize.svg"} width={30} />
                            </div>
                        </div>

                        <div className={"p-3 border rounded-lg relative -top-3 ml-2"}>
                            <p>An application where users can search for recipes based on the the ingredients they have, using a third-party API to fetch the data.</p>

                            <ul className={"mt-2 text-sm float-right"}>
                                <a
                                    className={"hover:bg-indigo-50 px-1"}
                                    target={"_blank"}
                                    href={"https://s4.gifyu.com/images/cooken.gif"}
                                >GIF</a>
                                <a
                                    className={"ml-3 hover:bg-indigo-50 px-1"}
                                    target={"_blank"}
                                    href={"https://cooken.netlify.app"}
                                >Live site</a>
                                <a
                                    className={"ml-3 hover:bg-indigo-50 px-1"}
                                    target={"_blank"}
                                    href={"https://github.com/risanto/cooken"}
                                >Github</a>
                                <a
                                    className={"ml-3 hover:bg-indigo-50 px-1"}
                                    target={"_blank"}
                                    href={"https://www.risan.dev/posts/3-konsep-yang-bisa-membantumu-ketika-stuck-ngoding"}
                                >Blog</a>
                            </ul>
                        </div>

                    </div>
                </article>
            </section>
        </Layout>
    )
}