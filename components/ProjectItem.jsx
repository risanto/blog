import TechList from '../components/TechList'
import ProjectLinks from '../components/ProjectLinks'
import Image from 'next/image'

export default function ProjectItem({ imgSrc, name, description, techList, links }) {
    return (
        <article className={"mt-8"} key={name}>
            <div
                className={"transform transition hover:-translate-y-2 hover:duration-500"}
            >
                <Image
                    width={640}
                    height={393}
                    alt={name + ' project'}
                    src={imgSrc}
                />
            </div>

            <div className={"transform transition hover:-translate-y-1 hover:duration-500 flex flex-col"}>
                <div className={"flex mt-4"}>
                    <h3
                        className={"border border-indigo-50 bg-indigo-50 self-start z-10 px-1 text-lg relative top-1 dark:text-gray-700 rounded-tl rounded-br"}
                    >{name}</h3>

                    <TechList names={techList} />
                </div>

                <div className={"px-4 pt-5 pb-4 border rounded-lg relative -top-3 ml-2 dark:border-gray-700"}>
                    <p>{description}</p>

                    <ProjectLinks items={links} />
                </div>
            </div>
        </article>
    )
}