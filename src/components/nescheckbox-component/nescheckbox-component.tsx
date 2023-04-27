import { Component,  Prop,  h } from '@stencil/core';

@Component({
  tag: 'nescheckbox-component',
  styleUrl: 'nescheckbox-component.css',
  // shadow: true,
})
export class NescheckboxComponent {
  @Prop() label?: string;
  @Prop() checked?: boolean = false;
  @Prop() isDark?: boolean = false;

  
  render() {
    const checkboxClass = this.isDark ? 'nes-checkbox is-dark' : 'nes-checkbox';
    
    return !this.isDark ? (
      <label>
        <input type="checkbox" class={checkboxClass} checked={this.checked}/>
        <span>{this.label}</span>
      </label> 
    ) : (
      <div style={{backgroundColor: "#212529", color: "white", padding: "1rem 0"}} class="dark-container">
        <label>
        <input type="checkbox" class={checkboxClass} checked={this.checked}/>
      <span>{this.label}</span>
    </label> 
      </div>
    )
  }

}
