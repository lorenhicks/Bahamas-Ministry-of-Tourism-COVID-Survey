import React from "react";
import { Image, Header, List, Divider } from "semantic-ui-react";

import "./DocumentationView.css";
import { documentationContent } from "../../helpers/content";

export default function DocumentationView() {
  return (
    <div className="documentation">
      <Header
        as="h1"
        content={documentationContent.title}
        subheader={documentationContent.subtitle}
      />
      <List bulleted>
        {documentationContent.tip_list.map((tip, index) => (
          <List.Item key={`trip_${index}`} content={tip} />
        ))}
      </List>
      <Divider />
      <Header as="h2" content={documentationContent.resource_title} />
      <List bulleted>
        {documentationContent.resource_list.map((resource, index) => (
          <List.Item key={`resource_${index}`}>
            {resource.label}:{" "}
            <a href={resource.link} target="_blank" rel="noreferrer">
              {resource.link}
            </a>
          </List.Item>
        ))}
      </List>
      <Divider />
      <Image src="./images/survey_01.png" />
      <Image src="./images/survey_02.png" />
      <Image src="./images/completed.png" />
    </div>
  );
}
