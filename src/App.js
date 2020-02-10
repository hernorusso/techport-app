import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/list/List';
import Card from './components/card/Card';
import UserMessage from './components/userMessage/UserMessage';
import Button from './components/button/Button';
import useGetProjects from './hooks/useGetProjects';

//TODO: Remove it, just for testing
import projectsData from './mockedData/projectsContentList.json'
const isFetching = false;
const error = null;
// End mocked values

function App() {

  const LIST_TITLE = 'Projects';
  const LOADING_MESSAGE = 'LOADING...';

  /** Keep cards page state */
  const [ slotPage, setSlotPage ] = useState(1);

  /** Keep expanded cards state */
  const [expandedCards, setExpandedCards] = useState([]);

  /** Keep Selected cards State */
  const [selectedCards, setSelectedCards] = useState([]);

  /** projectList holds the projects to be render in the UI */
  // const {projectsData, isFetching, error} = useGetProjects(slotPage);

  /** Handle Button List clicks */
  const onButtonListClick = (e) => {
    e.preventDefault();
    setSlotPage(slotPage + 1);
  }

  /** Handles button expand Click */
  const onCardExpandClick = (id) => {
    let nextExpandedCards;
    if (expandedCards.indexOf(id) === -1) {
      nextExpandedCards = [...expandedCards, id];
      setExpandedCards(nextExpandedCards);
    } else {
      nextExpandedCards = expandedCards.filter((cardId) => cardId !== id);
      setExpandedCards(nextExpandedCards);
    }
  }

  /** Handles card selection */
  const onCardClick = (id) => {
    let nextSelectedCards;
    if (selectedCards.indexOf(id) === -1) {
      nextSelectedCards = [...selectedCards, id];
      setSelectedCards(nextSelectedCards);
    } else {
      nextSelectedCards = selectedCards.filter((cardId) => cardId !== id);
      setSelectedCards(nextSelectedCards);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <code>Nasa TechPort</code>
        </h1>
      </header>
      <main className="App-main-content">
        {isFetching || error
          ? <UserMessage message={isFetching ? LOADING_MESSAGE : `Error: ${error.message}. Please reload the page to try again`}/>
          : <>
              <List title={LIST_TITLE}>
                {projectsData.map(({
                  id,
                  title,
                  description,
                  lastUpdated,
                  startDate,
                  status
                }) => {
                  const isExpanded = expandedCards.indexOf(id) >= 0 ? true : false;
                  const isSelected = selectedCards.indexOf(id) >= 0 ? true : false;
                  return (
                    <li key={id}>
                      <Card
                        title={title}
                        description={description}
                        lastUpdated={lastUpdated}
                        startDate={startDate}
                        status={status}
                        onButtonExpandClick={onCardExpandClick}
                        cardId={id}
                        isExpanded={isExpanded}
                        onCardClick={onCardClick}
                        isSelected={isSelected}
                      />
                    </li>
                  )})}
              </List>
              <Button
                label="See More"
                onClick={onButtonListClick}
              />
            </>
        }
      </main>
      <footer className="App-footer">
        <code className="App-footer__item">author: @xherno</code>
        <code className="App-footer__item">
          <a
            className="App-link"
            href="https://techport.nasa.gov/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check TechPort Blog
          </a>
        </code>
      </footer>
    </div>
  );
}

export default App;
