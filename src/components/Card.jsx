import './Card.scss'

const Card = () => {
  return (
    <a class="card" href="#">
      <article class="card__article">
        <div class="card__image-container">
          <img class="card__image" src="img/apple-iphone-11-pro-max.jpg" alt="IPhone 11 Pro Max" />
        </div>
        <div class="card__content">
          <h2 class="card__heading">Celular</h2>
          <div class="card__description">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam obcaecati tempora, ratione facilis totam maiores!</p>
          </div>
        </div>
      </article>
    </a>
  )
}

export default Card