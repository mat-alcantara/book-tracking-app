import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0px 60px 0px;
  flex-wrap: wrap;

  li {
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 30px;
    text-align: center;

    img {
      width: 100px;
      height: 135px;
    }

    div {
      margin: 0 auto;
    }

    h2 {
      margin-top: 16px;
      margin-bottom: 8px;
      font-size: 16px;
      width: 250px;
      text-align: center;
    }

    small {
      font-size: 16px;
      line-height: 16px;
      text-align: center;
    }

    .book-shelf-changer {
      position: relative;
      margin-right: 60px;
      margin-top: -30px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #f5f5f5;
      background-image: url('https://image.flaticon.com/icons/svg/625/625946.svg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: 20px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }

    .book-shelf-changer select {
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
      text-align: center;
    }
  }

  .search-books-results {
    padding: 80px 10px 20px;
  }

  .books-grid {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: left;
    flex-wrap: wrap;
  }

  .books-grid li {
    padding: 10px 15px;
  }
`;
