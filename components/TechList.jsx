import Image from 'next/image'

export default function TechList({ names }) {
    const defaultClasses = "transform transition hover:-translate-y-1 hover:duration-500 z-10 flex justify-center items-center "

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
            classes: defaultClasses + "bg-white p-1 rounded ",
            imgSrc: "/img/expressjs.png",
            width: 85,
            height: 23
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

    ]

    return (
        <div className={"flex flex-row items-center justify-center flex-grow relative top-1"}>
            {names.map((name, idx) => {
                const tech = techItems.find(item => item.name === name)

                console.log(idx)
                return (
                    <div
                        className={tech.classes + (idx !== 0 ? "ml-1" : "")}
                    >
                        <Image
                            key={tech.name}
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