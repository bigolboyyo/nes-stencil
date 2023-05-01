import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'nesprogress-component',
  styleUrl: 'nesprogress-component.css',
})
export class NesprogressComponent {
  @Prop() value: number = 0;
  @Prop() max: number = 100;
  @Prop() isPrimary?: boolean = false;
  @Prop() isSuccess?: boolean = false;
  @Prop() isWarning?: boolean = false;
  @Prop() isError?: boolean = false;
  @Prop() isPattern?: boolean = false;

  render() {
    const progressClasses = [
      'nes-progress',
      this.isPrimary && 'is-primary',
      this.isSuccess && 'is-success',
      this.isWarning && 'is-warning',
      this.isError && 'is-error',
      this.isPattern && 'is-pattern',
    ]
      .filter(Boolean)
      .join(' ');

    return <progress class={progressClasses} value={this.value} max={this.max}></progress>;
  }
}
