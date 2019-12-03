/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';

import MeatImg from 'images/learning-to-cook/bg-meat.jpg';
import SpicesImg from 'images/learning-to-cook/bg-spices.jpg';

const Intro = () => (
  <section
    sx={{
      mt: 32,
      minHeight: [null, null, null, null, null, '510px', '710px'],
      overflowX: 'hidden',
      position: 'relative',
      '&::before': {
        backgroundImage: `url(${MeatImg})`,
        backgroundPosition: 'left top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        bottom: 0,
        content: [null, null, null, null, '""'],
        position: 'absolute',
        left: [null, null, null, null, '-100px', '-150px', '-1rem'],
        top: 0,
        width: [null, null, null, null, '280px', '380px'],
      },
      '&::after': {
        backgroundImage: `url(${SpicesImg})`,
        backgroundPosition: 'right top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
        bottom: 0,
        content: [null, null, null, null, '""'],
        position: 'absolute',
        right: [null, null, null, null, '-100px', '-150px', '-1rem'],
        top: 0,
        width: [null, null, null, null, '280px', '380px'],
      },
    }}
  >
    <div
      sx={{
        mx: 'auto',
        maxWidth: '640px',
      }}
    >
      <h1
        sx={{
          color: '#4c1e00',
          fontFamily: 'body',
          fontSize: [6, null, null, '96px', null, '128px'],
          lineHeight: 1,
          mb: 0,
          mt: 16,
          textAlign: 'center',
        }}
      >
        Learning to Cook
      </h1>
      <Styled.p>
        One of my favorite parts of learning is sharing. As I've been working
        towards becoming a culinarian, I've noticed that food preparation has a
        lot of similarities with web development: there's much to learn from
        your predecessors, and the goal is to share your creation. In both, some
        of my creations are awesome, and some suck, but I'm learning and that's
        what keeps me happy.
      </Styled.p>

      <Styled.h2
        sx={{
          color: '#4c1e00',
          mt: 16,
        }}
      >
        Resources I Love
      </Styled.h2>
      <Styled.ul>
        <Styled.li>
          <Label>Book</Label>
          <Styled.a href="https://www.amazon.com/4-Hour-Chef-Cooking-Learning-Anything/dp/0547884591">
            The 4-Hour Chef
          </Styled.a>
        </Styled.li>
        <Styled.li>
          <Label>Video</Label> Gordon Ramsay{' '}
          <Styled.a href="https://www.masterclass.com/classes/gordon-ramsay-teaches-cooking">
            Teaches Cooking
          </Styled.a>{' '}
          and{' '}
          <Styled.a href="https://www.masterclass.com/classes/gordon-ramsay-teaches-cooking-restaurant-recipes-at-home">
            Restaurant Recipes at Home
          </Styled.a>{' '}
        </Styled.li>
        <Styled.li>
          <Label>Video</Label> Wolfgang Puck{' '}
          <Styled.a href="https://www.masterclass.com/classes/wolfgang-puck-teaches-cooking">
            Teaches Cooking
          </Styled.a>
        </Styled.li>
        <Styled.li>
          <Label>Video</Label> Alice Waters{' '}
          <Styled.a href="https://www.masterclass.com/classes/alice-waters-teaches-the-art-of-home-cooking">
            Teaches the Art of Home Cooking
          </Styled.a>
        </Styled.li>
        <Styled.li>
          <Label>Video</Label> Thomas Keller Cooking Techniques -{' '}
          <Styled.a href="https://www.masterclass.com/classes/thomas-keller-teaches-cooking-techniques">
            Vegetables, Pasta, and Eggs
          </Styled.a>
          ,{' '}
          <Styled.a href="https://www.masterclass.com/classes/thomas-keller-teaches-cooking-techniques-meats-stocks-and-sauces">
            Meats, Stocks, and Sauces
          </Styled.a>
          , and{' '}
          <Styled.a href="https://www.masterclass.com/classes/thomas-keller-teaches-cooking-techniques-iii-seafood-sous-vide-and-desserts">
            Seafood, Sous Vide, and Desserts
          </Styled.a>
        </Styled.li>
        <Styled.li>
          <Label>Video</Label> Massimo Bottura{' '}
          <Styled.a href="https://www.masterclass.com/classes/massimo-bottura-teaches-modern-italian-cooking">
            Teaches Modern Italian Cooking
          </Styled.a>
        </Styled.li>
        <Styled.li>
          <Label>Video</Label> Aaron Franklin{' '}
          <Styled.a href="https://www.masterclass.com/classes/aaron-franklin-teaches-texas-style-bbq">
            Teaches Texas Style BBQ
          </Styled.a>
        </Styled.li>
        <Styled.li>
          <Label>App</Label>{' '}
          <Styled.a href="https://www.yummly.com">Yummly</Styled.a>
        </Styled.li>
      </Styled.ul>
    </div>
  </section>
);

const Label = ({ children }) => (
  <span
    sx={{
      display: 'block',
      fontSize: '16px',
      textTransform: 'uppercase',
    }}
  >
    {children}
  </span>
);

export default Intro;
