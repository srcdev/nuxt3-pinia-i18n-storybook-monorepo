// Fix TS error
// Property 'class' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'. Did you mean 'className'?ts(2322)
// See also "skipLibCheck": true in tsconfig.json
declare namespace React {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    class?: string;
  }
}
