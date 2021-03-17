import React from 'react';
import styled from 'styled-components';
import { WrapperContainer } from './Wrapper';
import { TextLink } from './TextLink';
import { DisclaimerBox } from './Disclaimer';

const Header = styled.h1`
  font-weight: bold;
  margin: 20px 20px 0 20px;
  color: blueviolet;
`;

const Stack = styled.div`
  ul > li {
    font-size: 18px;
    padding: 5px 0;
  }
`;

const About = () => {
  return (
    <WrapperContainer>
      <Header>About page</Header>
      <DisclaimerBox>
        Disclaimer: this site was not designed for commercial purpose, but only
        as a platform for learning new technologies, in particular the React
        library and its environment.
      </DisclaimerBox>
      <Stack>
        <Header>Tech stack:</Header>
        <ul>
          <li>
            <TextLink target="https://reactjs.org/">React js</TextLink> with
            Hooks on top of the{' '}
            <TextLink target="https://create-react-app.dev/">
              Create React App
            </TextLink>
          </li>
          <li>
            <TextLink target="https://cloud.yandex.com/services/storage">
              Yandex Object Storage
            </TextLink>{' '}
            for storing images for items
          </li>
          <li>
            <TextLink target="https://www.netlify.com/">Netlify</TextLink> for
            hosting this site
          </li>
          <li>
            <TextLink target="https://styled-components.com/">
              Styled-components
            </TextLink>{' '}
            for styling things
          </li>
          <li>
            <TextLink target="https://redux.js.org/">Redux</TextLink> for state
            management
          </li>
          <li>
            <TextLink target="https://reactrouter.com/">React Router</TextLink>{' '}
            for navigation between pages
          </li>
          <li>React Query for external queries (...in progress)</li>
          <li>Formik for building forms (...in progress - checkout form)</li>
          <li>CSS 3 with Flexbox and Grid (items in Cart component)</li>
          <li>
            Browser API for storing cart state (
            <TextLink target="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">
              local storage
            </TextLink>
            )
          </li>
          <li>
            <TextLink target="https://reactjs.org/docs/portals.html#gatsby-focus-wrapper">
              React Portal
            </TextLink>{' '}
            for Tooltip component
          </li>
        </ul>
      </Stack>
    </WrapperContainer>
  );
};

export default About;
