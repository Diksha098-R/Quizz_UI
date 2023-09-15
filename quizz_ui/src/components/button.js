import React from "react";
import Button from 'react-bootstrap/Button';
import './components.css';

export default function QuizButton(props) {
  return (
    <Button disabled={props.disabled || false} onClick={() => props.handleClick()} variant="primary">{props.content }</Button>
  )
}