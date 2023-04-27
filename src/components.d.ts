/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface NesbuttonComponent {
        "fileInput"?: boolean;
        "is"?: "primary" | "success" | "warning" | "error" | "disabled";
        "text"?: string;
    }
    interface NescheckboxComponent {
        "checked"?: boolean;
        "isDark"?: boolean;
        "label"?: string;
    }
    interface NesinputComponent {
        "fieldType"?: "name" | "inline" | "warning" | "error" | "dark";
        "inline"?: boolean;
        "label"?: string;
        "placeholder"?: string;
        "status"?: "green" | "yellow" | "red" | "black";
    }
    interface NesradioComponent {
        "isDark"?: boolean;
        "label"?: string;
        "name": string;
        "value": string;
    }
    interface NestextComponent {
        "element"?: keyof HTMLElementTagNameMap;
        "is"?: "primary" | "success" | "warning" | "error" | "disabled";
        "options"?: string;
        "text": string;
    }
}
declare global {
    interface HTMLNesbuttonComponentElement extends Components.NesbuttonComponent, HTMLStencilElement {
    }
    var HTMLNesbuttonComponentElement: {
        prototype: HTMLNesbuttonComponentElement;
        new (): HTMLNesbuttonComponentElement;
    };
    interface HTMLNescheckboxComponentElement extends Components.NescheckboxComponent, HTMLStencilElement {
    }
    var HTMLNescheckboxComponentElement: {
        prototype: HTMLNescheckboxComponentElement;
        new (): HTMLNescheckboxComponentElement;
    };
    interface HTMLNesinputComponentElement extends Components.NesinputComponent, HTMLStencilElement {
    }
    var HTMLNesinputComponentElement: {
        prototype: HTMLNesinputComponentElement;
        new (): HTMLNesinputComponentElement;
    };
    interface HTMLNesradioComponentElement extends Components.NesradioComponent, HTMLStencilElement {
    }
    var HTMLNesradioComponentElement: {
        prototype: HTMLNesradioComponentElement;
        new (): HTMLNesradioComponentElement;
    };
    interface HTMLNestextComponentElement extends Components.NestextComponent, HTMLStencilElement {
    }
    var HTMLNestextComponentElement: {
        prototype: HTMLNestextComponentElement;
        new (): HTMLNestextComponentElement;
    };
    interface HTMLElementTagNameMap {
        "nesbutton-component": HTMLNesbuttonComponentElement;
        "nescheckbox-component": HTMLNescheckboxComponentElement;
        "nesinput-component": HTMLNesinputComponentElement;
        "nesradio-component": HTMLNesradioComponentElement;
        "nestext-component": HTMLNestextComponentElement;
    }
}
declare namespace LocalJSX {
    interface NesbuttonComponent {
        "fileInput"?: boolean;
        "is"?: "primary" | "success" | "warning" | "error" | "disabled";
        "text"?: string;
    }
    interface NescheckboxComponent {
        "checked"?: boolean;
        "isDark"?: boolean;
        "label"?: string;
    }
    interface NesinputComponent {
        "fieldType"?: "name" | "inline" | "warning" | "error" | "dark";
        "inline"?: boolean;
        "label"?: string;
        "placeholder"?: string;
        "status"?: "green" | "yellow" | "red" | "black";
    }
    interface NesradioComponent {
        "isDark"?: boolean;
        "label"?: string;
        "name"?: string;
        "value"?: string;
    }
    interface NestextComponent {
        "element"?: keyof HTMLElementTagNameMap;
        "is"?: "primary" | "success" | "warning" | "error" | "disabled";
        "options"?: string;
        "text"?: string;
    }
    interface IntrinsicElements {
        "nesbutton-component": NesbuttonComponent;
        "nescheckbox-component": NescheckboxComponent;
        "nesinput-component": NesinputComponent;
        "nesradio-component": NesradioComponent;
        "nestext-component": NestextComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "nesbutton-component": LocalJSX.NesbuttonComponent & JSXBase.HTMLAttributes<HTMLNesbuttonComponentElement>;
            "nescheckbox-component": LocalJSX.NescheckboxComponent & JSXBase.HTMLAttributes<HTMLNescheckboxComponentElement>;
            "nesinput-component": LocalJSX.NesinputComponent & JSXBase.HTMLAttributes<HTMLNesinputComponentElement>;
            "nesradio-component": LocalJSX.NesradioComponent & JSXBase.HTMLAttributes<HTMLNesradioComponentElement>;
            "nestext-component": LocalJSX.NestextComponent & JSXBase.HTMLAttributes<HTMLNestextComponentElement>;
        }
    }
}