function Button() {
  const handleClick = (e) => (e.target.textContent = "Button Clicked");
  return (
    <button
      className="btn btn-primary btn-lg"
      type="button"
      onClick={(e) => handleClick(e)}
    >
      Click Me
    </button>
  );
}
export default Button;
