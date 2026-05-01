function Testimonial({ quote, name, role, photo }) {
  return (
    <article className="card-surface testimonial">
      <img src={photo} alt={`${name} profile`} className="avatar" />
      <blockquote>"{quote}"</blockquote>
      <p className="person-name">{name}</p>
      <p className="person-role">{role}</p>
    </article>
  )
}

export default Testimonial
