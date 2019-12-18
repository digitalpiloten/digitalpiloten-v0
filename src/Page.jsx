import React from 'react';
import { Query } from 'react-contentful';

import ReactMarkdown from 'react-markdown';

import {
  Redirect
}  from "react-router-dom"
 
class Page extends React.Component {

  render() {
    return (
      <Query
        contentType="page"
        query={{
          'fields.slug[in]': `/${this.props.match.params.slug || ''}`,
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
            return <Redirect to="/404" />;
          }

          if(!data.items) {
            return <Redirect to="/404" />;
          }

          if(data.items.length < 1) {
            return <Redirect to="/404" />;
          }
    
          // See the Contentful query response
          //console.debug(data);
    
          // Process and pass in the loaded `data` necessary for your page or child components
          document.title = data.items[0].fields.title + " | DigitalPiloten e. V."
          return (
            <div>
              <ReactMarkdown source={data.items[0].fields.content} />
            </div>
          );
        }}
      </Query>
    )
  }
}
 
export default Page;