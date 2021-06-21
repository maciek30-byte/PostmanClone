class TextArea {
  stateEnum = {
    default: "Default",
    hasError: "Error",
  };
  constructor(value, onChange, isEditable, isFocused) {
    this.placeHolder = "type your text";
    this.value = value;
    this.onChange = onChange;
    this.isEditable = isEditable;
    this.state = this.stateEnum.default;
    this.isFocused = isFocused;
  }
  render() {
    const container = document.createElement("div");
    const textArea = document.createElement("textarea");
    textArea.placeholder = this.placeHolder;
    textArea.value = this.value;

    // hot style add//
    textArea.style.width = "100%";
    textArea.style.minHeight = "200px";

    try {
      textArea.value = JSON.stringify(JSON.parse(this.value), null, 4);
    } catch (e) {
      textArea.value = this.value;
      this.state = this.stateEnum.hasError;
      const message = document.createElement("p");
      message.innerText = e.message;
      container.appendChild(message);
    }

    if (!this.isEditable) textArea.setAttribute("readonly", this.isEditable);

    textArea.addEventListener("input", (e) => this.onChange(e.target.value));

    if (this.isEditable && this.isFocused) {
      setTimeout(() => {
        textArea.focus();
      });
    }

    container.appendChild(textArea);

    return container;
  }
}
export default TextArea;
