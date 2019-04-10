import React from "react";
import { Card, Image } from 'semantic-ui-react';

const Book = props => {
  return (
    <Card onClick={() => props.clickHandler(props.book.id, props.source)}>
      <Image src={props.book.img} />
      <Card.Content>
        <Card.Header>{props.book.title}</Card.Header>
        <Card.Description>{props.book.author}</Card.Description>
      </Card.Content>
      
      {
      /*<li onClick={() => props.clickHandler(props.book.id, props.source)}>
        <h2>{props.book.title}</h2>
        <p>{props.book.author}</p>
        <img src={props.book.img} alt={props.book.title} />
      </li>*/
      }
    </Card>
  );
};

export default Book;
