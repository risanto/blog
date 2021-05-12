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
                <div className={"flex mt-4 relative top-1 dark:bg-white dark:rounded-tl-lg dark:rounded-br-lg mr-2 h-10"}>
                    <div
                        className={"border border-indigo-50 bg-indigo-50 dark:bg-white dark:border-none dark:self-start z-10 px-2 rounded-tl-lg rounded-br-lg h-10 flex"}
                    >
                        <h3 className={"place-self-center text-lg dark:text-gray-700"}>{name}</h3>
                    </div>

                    <TechList names={techList} />
                </div>

                <div className={"px-5 pt-7 pb-4 border rounded-lg relative -top-4 ml-2 dark:border-gray-700"}>
                    {description.map((desc, idx) => {
                        let classes = ""

                        if (idx != 0) {
                            classes += "mt-4"
                        }

                        return <p key={idx} className={classes}>{desc}</p>
                    })}

                    <ProjectLinks items={links} />
                </div>
            </div>
        </article>
    )
}