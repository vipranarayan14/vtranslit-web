export function handleInputChange(e) {
  const input = e.target.value;

  this.setState({
    input,
    output: this.vt(input)
  });
}
