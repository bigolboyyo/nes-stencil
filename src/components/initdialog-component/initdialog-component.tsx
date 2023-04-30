import { Component, h, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'initdialog-component',
})
export class InitdialogComponent {
  @Prop() text?: string = 'Open Dialog';
  @Prop() is?: string = 'primary';
  @Prop() toggleFn?: string;

  @State() isVisible: boolean = false;

  @Method()
  async openDialog() {
    this.isVisible = true;
    document.body.style.overflow = 'hidden';
  }

  @Method()
  async closeDialog() {
    this.isVisible = false;
    document.body.style.overflow = '';
  }

  handleClick() {
    if (this.toggleFn) {
      const fn = window[this.toggleFn];
      if (typeof fn === 'function') {
        fn('nesdialog-component', this.isVisible ? 'close' : 'open');
      }
    } else {
      this.isVisible = !this.isVisible;
      document.body.style.overflow = this.isVisible ? 'hidden' : '';
    }
  }

  render() {
    return (
      <button class={`nes-btn is-${this.is}`} onClick={() => this.handleClick()}>
        {this.text}
      </button>
    );
  }
}
