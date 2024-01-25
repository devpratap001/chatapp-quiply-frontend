export function Feature({image, name, description}) {
    return <div className="feature">
        <img src={image} alt={name} width="50px" />
        <h2>{name}</h2>
        <p>{description}</p>
    </div>
}