import React from 'react';
import { ContentfulClient, ContentfulProvider } from 'react-contentful';
import Page from './Page';  // @see Page component defined in `Query` example below

import Navigation from './Navigation'

import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Container } from 'react-bulma-components';

import './css/tailwind.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
 
const contentfulClient = new ContentfulClient({
  accessToken: '3TqE5jgY94Y_4_K8301MWV_DsBJaeTG9utoRXElatOQ',
  space: 'o36zpu2jig04',
});
 
const App = () => (
  <ContentfulProvider client={contentfulClient}>
    <Router>
      <Navigation />
      <Container>
        <Switch>
          <Route path="/:slug*" component={Page} />
        </Switch>
      </Container>
    </Router>
  </ContentfulProvider>
);
 
export default App;