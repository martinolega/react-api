function Card({actor})
{
    const {name, birth_year, nationality, known_for, most_famous_movies, awards, biography, image} = actor;

    let knownFor = "";
    let awardsReceived = "";

    for(let i = 0; i < known_for.length; i++)
    {
        knownFor += known_for[i];
        if(i < known_for.length - 1)
        {
            knownFor += ", ";
        }
    }

    for(let i = 0; i < awards.length; i++)
    {
        awardsReceived += awards[i];
        if(i < awards.length - 1)
        {
            awardsReceived += ", ";
        }
    }

    return (
        <div className="card-element flex-fill card-bg text-center">
            <h2 className="white px-2 pt-2">{name}</h2>
            <img className="image-width" src={image} alt={name} />
            <p className="white italic px-2"><span className="me-3">{birth_year}</span><span>{nationality}</span></p>
            <p className="white px-2">{biography}</p>
            <p className="red italic px-2"><span className="bold">Known For:</span><br />{knownFor}</p>
            <p className="golden italic pb-2 px-2"><span className="bold">Awards:</span><br />{awardsReceived}</p>
        </div>

    )
}

export default Card;