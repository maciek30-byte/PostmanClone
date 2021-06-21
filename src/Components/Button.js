class Button {
  constructor(text, onClick) {
    this.text = text;
    this.onClick = onClick;
  }
  render() {
    const button = document.createElement("button");
    button.innerText = this.text;
    // hot style//
    button.style.width = '100%'

    button.addEventListener("click", this.onClick);
    return button;
  }
}
export default Button;
