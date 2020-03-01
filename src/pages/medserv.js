import React, { Component } from 'react';
import '../App.css';

export class Medserv extends Component {
  render() {
    return (
      <div className="mainContent">
        <h3 style={{cursor: 'pointer'}} onClick={() => window.open("https://www.medserv.ie", "_blank")}>MEDSERV</h3>
        <p>
          Medserv is a medical billing company based in Dundrum, Dublin. My role there is primarily Software Development, but occasionally I have been know to turn PCs off and on again. I mainly work on internal-use tools, with the goal of automating as much work as possible. These include:
        </p>
        <ul>
          <li>Revamping the IP phone system we use, allowing direct integration with all other internal systems.</li>
          <li>Developing automated systems for posting and tracking snail-mail directly from the browser.</li>
          <li>Integrating with external services to automatically pull and push data needed to process claims.</li>
        </ul>
        <p>In addition to my work on our main internal systems, I'm responsible for the maintenance of the current iteration of the Medserv mobile application.</p>
        <ul>
          <li>React Native cross-platform application supporting business in both Ireland and the UK.</li>
          <li>Regular updates with new features, heavily focusing on phasing out paper usage by providing a better digiatl alternative.</li>
          <li>Troubleshooting and support for end-users.</li>
        </ul>
      </div>
    )
  }
}

export default Medserv
