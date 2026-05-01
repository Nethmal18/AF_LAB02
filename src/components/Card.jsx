function Card({ image, title, description }) {
  return (
    <article className="card-surface product-card">
      <img src={image} alt={title} className="product-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export default Card
