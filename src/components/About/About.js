import React from 'react';
import styled from 'styled-components';
import { TextLink } from './TextLink';

const Main = styled.div`
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 1332px;
  min-width: 800px;
  min-height: 100vh;
  background-color: white;
`;

const Header = styled.h1`
  font-weight: bold;
  margin: 20px 20px 0 20px;
  color: blueviolet;
`;

const Disclaimer = styled.p`
  color: red;
  font-size: 18px;
  max-width: 700px;
  padding: 20px 20px;
  margin: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  border-left: 5px solid red;
`;

const Stack = styled.div`
  ul > li {
    font-size: 18px;
    padding: 5px 0;
  }
`;

const About = () => {
  return (
    <Main>
      <Header>About page</Header>
      <Disclaimer>
        Disclaimer: this site was not designed for commercial gain, but as a
        platform for learning new technologies, in particular the React library
        and its environment.
      </Disclaimer>
      <Stack>
        <Header>Tech stack:</Header>
        <ul>
          <li>
            <b>
              <TextLink target="https://reactjs.org/">React js</TextLink>
            </b>{' '}
            with{' '}
            <b>
              <TextLink target="https://create-react-app.dev/">
                Create React App
              </TextLink>
            </b>
          </li>
          <li>
            <b>
              <TextLink target="https://cloud.yandex.com/services/storage">
                Yandex Object Storage
              </TextLink>
            </b>{' '}
            for storing images for items
          </li>
          <li>
            <b>
              <TextLink target="https://www.netlify.com/">Netlify</TextLink>
            </b>{' '}
            for hosting this site
          </li>
          <li>
            <b>
              <TextLink target="https://styled-components.com/">
                Styled-components
              </TextLink>
            </b>{' '}
            for styling things
          </li>
          <li>
            <b>
              <TextLink target="https://redux.js.org/">Redux</TextLink>
            </b>{' '}
            for state management
          </li>
          <li>
            <b>
              <TextLink target="https://reactrouter.com/">
                React Router
              </TextLink>
            </b>{' '}
            for navigation between pages
          </li>
          <li>React Query for external queries (...in progress)</li>
          <li>Formik for building forms (...in progress - checkout form)</li>
          <li>CSS 3 with Flexbox and Grid (items in Cart component)</li>
          <li>
            Browser API for storing cart state (
            <b>
              <TextLink target="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">
                local storage
              </TextLink>
            </b>
            )
          </li>
          <li>
            <b>
              <TextLink target="https://reactjs.org/docs/portals.html#gatsby-focus-wrapper">
                React Portal
              </TextLink>
            </b>{' '}
            for Tooltip component
          </li>
        </ul>
      </Stack>
    </Main>
  );
};

export default About;
