import './App.css'
import productImage from './assets/product-card.svg'
import reviewerImage from './assets/reviewer.svg'
import Banner from './components/Banner'
import Button from './components/Button'
import Card from './components/Card'
import Footer from './components/Footer'
import Greeting from './components/Greeting'
import NavBar from './components/NavBar'
import Testimonial from './components/Testimonial'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

function App() {
  return (
    <div className="app-shell" id="home">
      <NavBar links={navLinks} />

      <main className="content">
        <Greeting message="Hello World!" />

        <Banner
          title="Build your UI components faster"
          message="Reuse polished building blocks and ship consistent interfaces in minutes."
          ctaText="Start Now"
        />

        <section className="grid-two" id="services">
          <Card
            image={productImage}
            title="Starter Component Pack"
            description="A ready-made set of reusable components for product pages, dashboards, and marketing sites."
          />

          <article className="card-surface">
            <h3>Button Variants</h3>
            <p>Customizable button styles and sizes:</p>
            <div className="button-row">
              <Button variant="primary" size="small">
                Small
              </Button>
              <Button variant="primary" size="medium">
                Medium
              </Button>
              <Button variant="outline" size="large">
                Large
              </Button>
            </div>
          </article>
        </section>

        <section id="reviews">
          <Testimonial
            quote="This React component structure made our frontend work clearer and much faster."
            name="Ayesha Perera"
            role="Software Engineering Student"
            photo={reviewerImage}
          />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
