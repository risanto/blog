export default function TechPill({ imgSrc, width }) {
    return (
        <div className={"flex self-end ml-2"}>
            <img className={"z-10"} src={imgSrc} width={width}/>
        </div>
    )
}