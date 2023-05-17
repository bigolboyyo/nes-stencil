import { Component, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'nespointer-hoc',
})
export class NespointerHoc {
  @Element() hostElement: HTMLElement;
  @Prop() selector?: string;

  componentDidLoad() {
    const elementSelector = this.selector || ':first-child';
    const slottedElement = this.hostElement.querySelector(elementSelector);
    if (slottedElement) {
      slottedElement.classList.add('nes-pointer');
    }
  }

  render() {
    return <slot />;
  }
}
