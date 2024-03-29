/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ArcadyButton {
        "disabled": boolean;
        "name": string;
        "type": string;
        "variant": 'primary' | 'secondary' | 'ghost';
    }
}
export interface ArcadyButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLArcadyButtonElement;
}
declare global {
    interface HTMLArcadyButtonElementEventMap {
        "buttonClick": MouseEvent;
    }
    interface HTMLArcadyButtonElement extends Components.ArcadyButton, HTMLStencilElement {
        addEventListener<K extends keyof HTMLArcadyButtonElementEventMap>(type: K, listener: (this: HTMLArcadyButtonElement, ev: ArcadyButtonCustomEvent<HTMLArcadyButtonElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLArcadyButtonElementEventMap>(type: K, listener: (this: HTMLArcadyButtonElement, ev: ArcadyButtonCustomEvent<HTMLArcadyButtonElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLArcadyButtonElement: {
        prototype: HTMLArcadyButtonElement;
        new (): HTMLArcadyButtonElement;
    };
    interface HTMLElementTagNameMap {
        "arcady-button": HTMLArcadyButtonElement;
    }
}
declare namespace LocalJSX {
    interface ArcadyButton {
        "disabled"?: boolean;
        "name"?: string;
        "onButtonClick"?: (event: ArcadyButtonCustomEvent<MouseEvent>) => void;
        "type"?: string;
        "variant"?: 'primary' | 'secondary' | 'ghost';
    }
    interface IntrinsicElements {
        "arcady-button": ArcadyButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "arcady-button": LocalJSX.ArcadyButton & JSXBase.HTMLAttributes<HTMLArcadyButtonElement>;
        }
    }
}
