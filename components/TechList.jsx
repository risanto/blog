export default function TechList({ names }) {
    const defaultClasses = "transform transition hover:-translate-y-1 hover:duration-500 z-10 "

    const techItems = [
        {
            name: "react",
            classes: defaultClasses,
            imgSrc: "/img/react.png",
            width: 25,
            height: 25
        },
        {
            name: "expressjs",
            classes: defaultClasses + "bg-white p-1 rounded ",
            imgSrc: "/img/expressjs.png",
            width: 75,
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

    ]

    return (
        <div className={"flex flex-row items-center justify-center flex-grow relative top-1"}>
            {names.map((name, idx) => {
                const tech = techItems.find(item => item.name === name)

                return (
                    <img alt={tech.name + ' logo'} src={tech.imgSrc} className={tech.classes + (idx !== 0 && "ml-1")} width={tech.width} height={tech.height} />
                )
            })}
        </div>
    )
}