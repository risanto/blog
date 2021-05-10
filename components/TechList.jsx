import Image from 'next/image'

export default function TechList({ names }) {
    const defaultClasses = "transform transition hover:-translate-y-1 hover:duration-500 z-10 flex justify-center items-center bg-white "

    const techItems = [
        {
            name: "react",
            classes: defaultClasses,
            imgSrc: "/img/react.png",
            width: 28,
            height: 25
        },
        {
            name: "expressjs",
            classes: defaultClasses + "bg-white ",
            imgSrc: "/img/expressjs.png",
            width: 90,
            height: 25
        },
        {
            name: "postgres",
            classes: defaultClasses,
            imgSrc: "/img/postgres.png",
            width: 25,
            height: 25
        },
        {
            name: "sequelize",
            classes: defaultClasses,
            imgSrc: "/img/sequelize.svg",
            width: 25,
            height: 25
        },
        {
            name: "tailwindcss",
            classes: defaultClasses,
            imgSrc: "/img/tailwind.png",
            width: 25,
            height: 25
        },
        {
            name: "nextjs",
            classes: defaultClasses + "bg-white ",
            imgSrc: "/img/nextjs.png",
            width: 42,
            height: 25
        },
        {
            name: "netlifycms",
            classes: defaultClasses + "bg-white ",
            imgSrc: "/img/netlifycms.png",
            width: 96,
            height: 25
        }
    ]

    return (
        <div className={"flex flex-row items-center justify-center flex-grow"}>
            {names.map((name, idx) => {
                const tech = techItems.find(item => item.name === name)

                return (
                    <div
                        key={tech.name}
                        className={
                            tech.classes + 
                            (idx !== 0 ? "ml-1 " : "")
                        }
                    >
                        <Image
                            alt={tech.name + ' logo'}
                            src={tech.imgSrc}
                            width={tech.width}
                            height={tech.height}
                        />
                    </div>
                )
            })}
        </div>
    )
}