import Layout from '../components/Layout'

export default function Projects() {
    return (
        <Layout>
            <article className={"mt-10"}>
                <img 
                className={"transform transition hover:-translate-y-2 hover:duration-500"}
                src={"/img/cooken-project.png"}
                />
            </article>
        </Layout>
    )
}