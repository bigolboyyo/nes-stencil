import { Component, h, Prop, State, Method } from '@stencil/core';

@Component({
  tag: 'nesdialogbtn-component',
  styleUrl: 'nesdialogbtn-component.css',
})
export class NesdialogbtnComponent {
  @Prop() text?: string = 'Open Dialog';
  @Prop() is?: string = 'primary';
  @Prop() toggleFn?: string;
  @Prop() dialogId?: string = 'nesdialog-component';

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
        fn(this.dialogId, this.isVisible ? 'close' : 'open');
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
