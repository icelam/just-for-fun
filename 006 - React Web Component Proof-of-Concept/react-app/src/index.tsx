import { createRoot, Root } from 'react-dom/client';
import Button, { ButtonProps } from './Button';

class ReactButtonElement extends HTMLElement {
  private _color: ButtonProps['color'] = 'green';
  private _reactRoot: Root | null = null;

  get color() {
    console.log('Get color.');
    return this._color;
  }

  // React to change in color and rerender react accordingly
  private set color(newColor) {
    console.log(`Set color to ${newColor}.`);
    this._color = newColor;
  }

  private get reactRoot() {
    return this._reactRoot;
  }

  private set reactRoot(root) {
    this._reactRoot = root;
  }

  // Observe necessary attribute changes, for this example, we only have a single color props
  static get observedAttributes() {
    console.log('Observing attribute change.');
    return ['color'];
  }

  // Response to change in attributes
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    console.log(`Attribute ${name} has changed from ${oldValue} to ${newValue}.`);
    switch (name) {
      case 'color':
        this.color = newValue as ButtonProps['color'];
        break;
    }

    this.render();
  }

  render() {
    if (!this.shadowRoot) {
      console.warn('Shadow root is empty. Did you call window.customElements.define()?');
      return;
    }

    console.log('Rendering button to', this.shadowRoot);
    // React 17:
    // ReactDOM.render(<Button color={this.color} />, this.shadowRoot);
    // React 18:
    this.reactRoot?.render(<Button color={this.color} />);
  }

  connectedCallback() {
    console.log('Web component connected.');
    this.attachShadow({ mode: 'open' });
    // React >= 18 fies not have `ReactDOM.render()` and has to create a React root first
    // Omit the following line if you are using React 17
    this.reactRoot = createRoot(this.shadowRoot!);
    this.render();
  }
}

const tagName = 'react-button';

if (!window.customElements.get(tagName)) {
  window.customElements.define(tagName, ReactButtonElement);
}
