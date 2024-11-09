const HideableContent = ({ children, className, isVisible = true }) => {
  if (!isVisible) return
  return <div className={className}>{children}</div>
}

export default HideableContent
