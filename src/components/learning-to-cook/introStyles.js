import styled from '@emotion/styled';

import meatImg from 'images/learning-to-cook/bg-meat.jpg';
import spicesImg from 'images/learning-to-cook/bg-spices.jpg';

export const Header = styled.header`
  overflow: hidden;

  @media screen and (min-width: 1400px) {
    h1 {
      color: #5c7210;
      font-size: 8rem;
      line-height: 1;
      margin: 3rem auto 2rem;
      text-align: center;
      max-width: 660px;
    }

    p {
      color: #652d16;
      font-size: 1.25rem;
      margin: 1.5rem auto;
      max-width: 660px;
    }

    &::before {
      background-image: url('${meatImg}');
      background-size: contain;
      content: '';
      float: left;
      height: 509px;
      margin-top: 2rem;
      shape-outside: polygon(0% 2%, 88% 21%, 82% 46%, 87% 55%, 99% 57%, 100% 70%, 91% 77%, 90% 86%, 93% 91%, 83% 91%, 80% 96%, 73% 100%, 64% 98%, 58% 89%, 0% 75%);
      width: 434px;
    }
  }
`;
