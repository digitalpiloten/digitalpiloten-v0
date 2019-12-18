import React from 'react';
import { ContentfulClient, ContentfulProvider } from 'react-contentful';
import Page from './Page';  // @see Page component defined in `Query` example below

import Container from 'react-bootstrap/Container'

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
  <Container>
    <ContentfulProvider client={contentfulClient}>
      <Router>
        <Switch>
          <Route path="/:slug*" component={Page} />
        </Switch>
      </Router>
    </ContentfulProvider>
  </Container>
);
 
export default App;