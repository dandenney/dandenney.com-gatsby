import styled from '@emotion/styled';

import meatImg from 'images/learning-to-cook/bg-meat.jpg';
import spicesImg from 'images/learning-to-cook/bg-spices.jpg';

export const Header = styled.header`
  min-height: 670px;

  @media screen and (min-width: 1400px) {
    background-image: url('${meatImg}'), url('${spicesImg}');
    background-position: left top, right top;
    background-repeat: no-repeat;
    background-size: 434px auto, 334px auto;

    h1 {
      color: #5c7210;
      font-size: 8rem;
      line-height: 1;
      margin: 5rem auto 2rem;
      text-align: center;
      width: 568px;
    }

    p {
      color: #652d16;
      font-size: 1.25rem;
      margin: 1.5rem auto;
      width: 504px;
    }
  }
`;
