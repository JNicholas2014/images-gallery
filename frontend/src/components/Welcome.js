import React from "react";
import { Button } from "react-bootstrap";
const Welcome = () => (
  <div>
    <h2>Images Gallery</h2>
    <p>
      This is a simple react application that retrieves photos using the
      Unsplash API. In order to use the application, search for any term in the
      search box. If an image is found it will be displayed.
    </p>
    <Button variant="primary" href="https://www.unsplash.com" target="_blank">
      Learn more
    </Button>
  </div>
);

export default Welcome;
