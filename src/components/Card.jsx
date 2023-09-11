import './Card.scss'

const Card = () => {
  return (
    <a className="card" href="#">
      <article className="card__article">
        <div className="card__image-container">
          <img className="card__image" src="img/apple-iphone-11-pro-max.jpg" alt="IPhone 11 Pro Max" />
        </div>
        <div className="card__content">
          <h2 className="card__heading">Celular</h2>
          <div className="card__description">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam obcaecati tempora, ratione facilis totam maiores!</p>
          </div>
        </div>
      </article>
    </a>
  )
}

export default Card