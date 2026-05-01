import Button from './Button'

function Banner({ title, message, ctaText }) {
  return (
    <section className="banner">
      <div>
        <p className="eyebrow">Limited Offer</p>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
      <Button variant="outline" size="large">
        {ctaText}
      </Button>
    </section>
  )
}

export default Banner
