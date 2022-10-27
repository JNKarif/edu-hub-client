import React from 'react';
import Card from 'react-bootstrap/Card';
const Blog = () => {
    return (
        <div>
            {/* question 1 */}
           <Card className='mt-4'>
      <Card.Header>What is CORS?</Card.Header>
      <Card.Body>
       
        <Card.Text>
        CORS means Cross-Origin Resource Sharing which is an HTTP header based
        system. An example of CORS is https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.


        </Card.Text>
        
      </Card.Body>
    </Card>

    {/* question 2 */}

    <Card className='mt-2'>
      <Card.Header>Why I firebase used and what are the other authentication options available?</Card.Header>
      <Card.Body>
       
        <Card.Text>
          Firebase is so popular from the beginning and It is very easy to use. We can easily make sigh-in , sign out authentication system through it. 
          We can also easily set google authentication by it. There are other 3rd party such as facebook , github, twitter etc. gives easy setup through 
          firebase.
          <br></br>
          Other authentication system like firebase are STYTCH, Ory, Supabase, Okta, PingIdentity ,Keycloak, Frontegg
Authress etc.
        </Card.Text>
        
      </Card.Body>
    </Card>


    {/* question 3 */}

    <Card className='mt-2'>
      <Card.Header>How private route works?</Card.Header>
      <Card.Body>
       
        <Card.Text>
          User can only get access to some secrete route or page by signin by private route method. Developers create 
          private route to show the user that page is something special.The react private route component renders child components (children) if the user is logged in. If not logged in the user is redirected 
          to the /login page with the return url passed in the location state property.
        </Card.Text>
        
      </Card.Body>
    </Card>

     {/* question 4 */}

     <Card className='mt-2'>
      <Card.Header>What is Node and how does it work?</Card.Header>
      <Card.Body>
       
        <Card.Text>
          Node is a runtime building server for JavaScript.
          Important global objects can be accessible by Node.
          It handles asynchronous JavaScript code by callback-based
          system. 
        </Card.Text>
        
      </Card.Body>
    </Card>







        </div>
    );
};

export default Blog;