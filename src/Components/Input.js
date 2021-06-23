class Input {
  constructor(value, onInput, caretPosition) {
    this.value = value;
    this.onInput = onInput;
    this.caretPosition = caretPosition;
  }

  render() {
    const input = document.createElement("input");
    input.value = this.value;
    // hot style//
    input.style.width = "100%";
    input.style.background = "yellow";
    input.style.color = "black";

    input.addEventListener("input", (e) =>
      this.onInput(e.target.value, input.selectionStart)
    );

    if (this.caretPosition !== null) {
      setTimeout(() =>{
        input.focus()
        input.selectionStart = this.caretPosition;
        input.selectionEnd = this.caretPosition
      },0 )

    }

    return input;
  }
}
export default Input;
