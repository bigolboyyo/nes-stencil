import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'nesinput-component',
  styleUrl: 'nesinput-component.css',
  // shadow: true,
})
export class NesinputComponent {
  @Prop() label?: string = "Your name";
  @Prop() inline?: boolean = false;
  @Prop() fieldType?: "name" | "inline" | "warning" | "error" | "dark" = "name";
  @Prop() placeholder?: string = "Placeholder Text";
  @Prop() status?: "green" | "yellow" | "red" | "black" = undefined;

  render() {
  let statusClass: string;

   switch(this.status){
    case 'green':
      statusClass = "nes-input is-success";
      break;
    case 'yellow':
      statusClass = "nes-input is-warning";
      break;
    case 'red':
      statusClass = "nes-input is-error";
      break;
    case 'black':
      statusClass = "nes-input is-dark";
      break;
    default:
      statusClass = "nes-input"
   }

    return this.fieldType !== "dark" ? (
      <div class={this.inline ? "nes-field is-inline" : "nes-field"}>
      <label htmlFor={`${this.fieldType}_field`}>{this.label}</label>
      <input type="text" id={`${this.fieldType}_field`} class={statusClass} placeholder={this.placeholder}></input>
     </div>
    ) : (
      <div style={{backgroundColor: "#212529", padding: "1rem", color: "white"}} class={this.inline ? "nes-field is-inline" : "nes-field"}>
      <label htmlFor={`${this.fieldType}_field`}>{this.label}</label>
      <input type="text" id={`${this.fieldType}_field`} class={statusClass} placeholder={this.placeholder}></input>
     </div>
    )
  }
}
