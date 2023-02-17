import React from 'react';

const Blog = () => {
  return (
    <div className='my-3'>
      <div className="w-3/5 mx-auto p-7 border border-secondary mb-3">
        <h3 className="text-1xl font-bold">What is the difference between NoSQL and MySQL?</h3>
        <p>MySQL is a relational database that is based on tabular design whereas NoSQL is non-relational in nature with its document-based design. MySQL has established a database, covering huge IT market whereas NoSQL databases are the latest arrival, hence still gaining popularity among big IT giants.</p>
      </div>
      <div className="w-3/5 mx-auto p-7 border border-secondary mb-3">
        <h3 className="text-1xl font-bold">What is JWT, and how does it work?</h3>
        <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
          <br />
          JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted
        </p>
      </div>
      <div className="w-3/5 mx-auto p-7 border border-secondary mb-3">
        <h3 className="text-1xl font-bold">What is the difference between javascript and NodeJS?</h3>
        <p>JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine. <br />
          JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser. <br />

          JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML.
          <br />
          JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser.
        </p>
      </div>
      <div className="w-3/5 mx-auto p-7 border border-secondary">
        <h3 className="text-1xl font-bold">How does NodeJS handle multiple requests at the same time?</h3>
        <p>Multiple clients make multiple requests to the NodeJS server. NodeJS receives these requests and places them into the EventQueue . NodeJS server has an internal component referred to as the EventLoop which is an infinite loop that receives requests and processes them. This EventLoop is single threaded.</p>
      </div>
    </div>
  );
};

export default Blog;