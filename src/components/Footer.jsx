function Footer() {
  return (
    <footer className="footer">
      <p>Copyright {new Date().getFullYear()} React Lab 08.</p>
      <ul className="social-links">
        <li>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://x.com/" target="_blank" rel="noreferrer">
            X
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
