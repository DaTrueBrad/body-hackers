import React from "react";
import questions from "./questions";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import 'react-accessible-accordion/dist/fancy-example.css';

//Currently the styling comes for the accordion is in two places, the import diurectly above here, and in the app.css. make it unique!

function FAQ() {
  return (
    <div className="page-wrapper">
      <h1>FAQs</h1>
      <Accordion allowZeroExpanded="true">
        {questions.map((element, index) => {
         return ( <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>{element.header}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>{element.content}</AccordionItemPanel>
          </AccordionItem>
        )})}
      </Accordion>
    </div>
  );
}

export default FAQ;
