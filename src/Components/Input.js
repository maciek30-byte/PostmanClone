class Input {
  constructor(value, onInput, isFocused) {
    this.value = value;
    this.onInput = onInput;
    this.isFocused = isFocused;
  }

  render() {
    const input = document.createElement("input");
    input.value = this.value;
    // hot style//
    input.style.width = "100%";
    input.style.background = "yellow";
    input.style.color = "black";

    input.addEventListener("input", (e) => this.onInput(e.target.value));

    if (this.isFocused) {
      setTimeout(() => input.focus(), 0);
    }

    return input;
  }
}
export default Input;
