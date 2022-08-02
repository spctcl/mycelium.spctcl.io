import { globalCss } from '@nextui-org/react';

// import { normalize } from "polished";
// ${normalize()};


export const globalStyles = globalCss({
  body: { margin: 0, zIndex: -1 }
});

export const normalizeCss = `
  * {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    border-collapse: collapse;
  }
  html,
  body {
    height: 100%;
    min-height: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Inter', monospace, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font: inherit;
    color: inherit;
    letter-spacing: inherit;
    border: none;
    border-radius: 0;
    box-shadow: none;
    background-color: transparent;
    padding: 0;
    margin: 0;
  }
  :focus {
    outline: none;
  }
  p {
    margin: 0;
  }
`;
