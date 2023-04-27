import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'nesradio-component',
  styleUrl: 'nesradio-component.css',
  // shadow: true,
})
export class NesradioComponent {
  @Prop() label?: string;
  @Prop() name: string = 'radio';
  @Prop() value: string;
  @Prop() isDark?: boolean = false;

  render() {
    const radioClass = this.isDark ? 'nes-radio is-dark' : 'nes-radio';

    return !this.isDark ? (
      <label>
        <input type="radio" class={radioClass} name={this.name} value={this.value} />
        <span>{this.label}</span>
      </label> 
    ) : (
      <div style={{backgroundColor: "#212529", color: "white", padding: "1rem 0"}} class="dark-container">
        <label>
        <input type="radio" class={radioClass} name={this.name} value={this.value} />
      <span>{this.label}</span>
    </label> 
      </div>
    )
  }
}
