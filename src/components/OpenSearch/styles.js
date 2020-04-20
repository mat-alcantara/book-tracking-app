import styled from 'styled-components';

export const Container = styled.div`
  .open-search {
    position: fixed;
    right: 425px;
    bottom: 60px;
  }

  .open-search button {
    display: block;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background: #ca9e57;
    background-image: url('https://image.flaticon.com/icons/svg/748/748113.svg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 28px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    font-size: 0;
    outline: 0;
  }
`;
