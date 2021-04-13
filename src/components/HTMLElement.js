// Define class here
class HTMLElement {
  constructor(tag, content) {
    this.tag = tag;
    this.content = content;
  }

  render() {
    return `<${this.tag}>${this.content}</${this.tag}>`;
  }
}

// Export class here
export default HTMLElement;

// Info on importing / exporting:
// https://www.tutorialspoint.com/es6/es6_modules.htm
