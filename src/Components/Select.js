class Select {
  constructor(value, options, onChange) {
    this.value = value;
    this.options = options;
    this.onChange = onChange
  }

  render() {
    const select = document.createElement("select");
    this.options.forEach(({ label, value }) => {
      const option = document.createElement("option");
      option.innerText = label;
      option.value = value;
      select.appendChild(option);
    });
    select.value = this.value;
    // hot styles//
    select.style.width = '100%'

    select.addEventListener('input', (e)=>this.onChange(e.target.value))
    return select;
  }
}
export default Select;
