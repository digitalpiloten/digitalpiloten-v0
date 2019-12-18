import React from 'react';
import { Query } from 'react-contentful';

import ReactMarkdown from 'react-markdown';

import { Container } from 'react-bootstrap/Container'
 
const Page = (props) => (
  <Query
    contentType="page"
    query={{
      'fields.slug[in]': `/${props.match.slug || ''}`,
    }}
  >
    {({data, error, fetched, loading}) => {
      if (loading || !fetched) {
        return null;
      }
 
      if (error) {
        console.error(error);
        return null;
      }
 
      if (!data) {
        return <p>404 - Page does not exist.</p>;
      }

      if(!data.items) {
        return <p>404 - Page does not exist.</p>;
      }

      if(data.items.length < 1) {
        return <p>404 - Page does not exist.</p>;
      }
 
      // See the Contentful query response
      //console.debug(data);
 
      // Process and pass in the loaded `data` necessary for your page or child components
      return (
        <Container>
          <div className="content">
            <ReactMarkdown source={data.items[0].fields.content} />
          </div>
        </Container>
      );
    }}
  </Query>
);
 
export default Page;