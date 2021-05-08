import Layout from '../components/Layout'
import ProjectItem from '../components/ProjectItem'
import Link from 'next/link'

export default function About() {
    const projects = [
        {
            imgSrc: "/img/cooken-project.png",
            name: "Cooken",
            description: "An application where users can search recipes based on the ingredients that they have. I use a third-party API to fetch the recipes data.",
            techList: ["react", "expressjs", "postgres", "sequelize"],
            links: [
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
            ],
        }
    ]

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
                    <a
                        target={"_blank"}
                        className={"hover:cursor-pointer hover:-translate-y-1 transform transition hover:duration-300 bg-indigo-50 rounded p-1"}
                    >
                        <img
                            src="/img/github.svg" height={17} width={17}
                        />
                    </a>
                </Link>
                <Link href={"https://www.linkedin.com/in/risantomulyo/"}>
                <a
                        target={"_blank"}
                        className={"hover:cursor-pointer hover:-translate-y-1 transform transition hover:duration-300 bg-indigo-50 rounded p-1 ml-2"}
                    >
                        <img
                            src="/img/linkedin.svg" height={17} width={17}
                        />
                    </a>
                </Link>
            </div>

            <p className={"mt-10"}>Some of the projects I made:</p>

            {/* Projects */}
            <section className={"mb-4"}>
                {projects.map(project => {
                    return (
                        <ProjectItem
                            key={project.name}
                            imgSrc={project.imgSrc}
                            name={project.name}
                            description={project.description}
                            techList={project.techList}
                            links={project.links}
                        />
                    )
                })}
            </section>
        </Layout>
    )
}