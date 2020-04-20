import styled from 'styled-components';

export const Container = styled.div`
  margin: 60px auto 65px auto;

  h1 {
    font-size: 32px;
    text-align: left;
    font-weight: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0069c0;
  }

  h1:before,
  h1:after {
    background: #ca9e57;
    height: 1px;
    flex: 1;
    content: '';
  }

  h1:before {
    margin-right: 20px;
  }

  h1:after {
    margin-left: 20px;
  }

  h1.left:after {
    background: none;
  }
  h1.right:before {
    background: none;
  }
`;
