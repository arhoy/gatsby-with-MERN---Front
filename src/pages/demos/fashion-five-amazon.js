import React from 'react';
import styled from '@emotion/styled';
import Layout5 from '../../components/layouts/Layout5';
import { H2 } from '../../components/reusableStyles/typography/Typography';
import { Section } from '../../components/reusableStyles/sections/Sections';

const FrameContainer = styled.div`
  & > * {
    margin: 1rem;
  }
`;

const Frame = styled.iframe`
  height: 240px;
  width: 120px;
  frame-border: 0;
  scrolling: none;
  border: none;
`;

const fashionfiveamazon = () => {
  return (
    <Layout5 full={true}>
      <Section>
        <H2>
          Support me below by disabling AdBlocker and buying from Amazon Below!
          <span role="image"> 😍</span>
        </H2>
        <p>
          Don't have a product you are looking for? Send me a message or call me
          at 587 772 5536
        </p>
        <p>
          Will help you with your web development and web design needs for a
          discount price. Please do me a favor and purchase from my store
          FASHION-FIVE
        </p>
        <p>
          These products bought in this order will make you an awesome developer
          <span role="image"> 🤣😭😂</span>
        </p>

        <FrameContainer>
          <Frame src="//rcm-na.amazon-adsystem.com/e/cm?ref=tf_til&t=fashionfive-20&m=amazon&o=15&p=8&l=as1&IS1=1&asins=B07M9VX6W8&linkId=a8ec9bd00a5a325d130e04c4e2cd7970&bc1=FFFFFF&lt1=_top&fc1=333333&lc1=0066C0&bg1=FFFFFF&f=ifr"></Frame>
          <Frame src="//rcm-na.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=fashionfive-20&m=amazon&o=15&p=8&l=as1&IS1=1&asins=B000Z7WVZK&linkId=16669c125e67b7b13dff63acb3af1ec2&bc1=FFFFFF&lt1=_top&fc1=333333&lc1=0066C0&bg1=FFFFFF&f=ifr"></Frame>
          <Frame src="//rcm-na.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=fashionfive-20&m=amazon&o=15&p=8&l=as1&IS1=1&asins=B07YTY25Y6&linkId=18140986f29d6b3ab458a0e48fd49bf1&bc1=FFFFFF&lt1=_top&fc1=333333&lc1=0066C0&bg1=FFFFFF&f=ifr"></Frame>
          <Frame src="//rcm-na.amazon-adsystem.com/e/cm?ref=qf_sp_asin_til&t=fashionfive-20&m=amazon&o=15&p=8&l=as1&IS1=1&asins=B0096M89PQ&linkId=d17188dda8b95be0e19f0cfd81bb6c21&bc1=FFFFFF&lt1=_top&fc1=333333&lc1=0066C0&bg1=FFFFFF&f=ifr"></Frame>
          <Frame src="//rcm-na.amazon-adsystem.com/e/cm?ref=tf_til&t=fashionfive-20&m=amazon&o=15&p=8&l=as1&IS1=1&asins=B07MVSFWQX&linkId=c41151322d96c1322e7fd20b98272e20&bc1=FFFFFF&lt1=_top&fc1=333333&lc1=0066C0&bg1=FFFFFF&f=ifr"></Frame>
          <Frame src="//rcm-na.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=fashionfive-20&o=15&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=B0014KX1K6&linkId=5aa49a99fb47f6575f6df7de80558ae0"></Frame>
        </FrameContainer>
      </Section>
    </Layout5>
  );
};

export default fashionfiveamazon;
