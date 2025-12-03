function Card({actor})
{
    const {name, birth_year, nationality, known_for, awards, biography, image} = actor;

    return (
        <>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            <p>{birth_year} {nationality}</p>
            <p>{biography}</p>
        </>

    )
}

export default Card;