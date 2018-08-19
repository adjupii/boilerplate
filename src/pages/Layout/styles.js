import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  :root {
    --body-bg-color: #fff;
    --body-text-color: #000;
  }

  body {
    background-color: var(--body-bg-color);
    color: var(--body-text-color);
    margin: 0;
  }
`;

export default styled.div`
  display: flex;
`;