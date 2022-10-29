import './App.css';
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

function App() {
  let baseUrl = "https://uselessfacts.jsph.pl/random.json?language=en";
  const [factData, setFactData] = useState([])
  
  const getData = async () => {
    let response = await axios.get(baseUrl)
    setFactData(oldArray => [...oldArray, response.data.text]);
  }
  useEffect(() => {
    getData()
  }, []);
  
  return (
    <div>
      <p className="p-title">Welcome to Hella Facts!</p>
      <button onClick={getData}>Click Here for a New Fact</button>
      <br/>
      <Accordion>
        {factData.map((fact, index) => {
          const output = (
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Fact #{index+1}
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="p-text">
                  {fact}
                </p>
              </AccordionItemPanel>
            </AccordionItem>);
          return output;
        })}
      </Accordion>
    </div>
  );
}

export default App;
