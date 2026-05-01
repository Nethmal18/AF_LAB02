function Button({ children, variant = 'primary', size = 'medium', type = 'button' }) {
  return (
    <button type={type} className={`btn btn--${variant} btn--${size}`}>
      {children}
    </button>
  )
}

export default Button
