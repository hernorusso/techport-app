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
  const LOADING_MESSAGE = 'LOADING...'
  const [ slotPage, setSlotPage ] = useState(1);
  const [expandedCards, setExpandedCards] = useState([]);

  /** projectList holds the projects to be render in the UI */
  // const {projectsData, isFetching, error} = useGetProjects(slotPage);

  const onButtonClick = (e) => {
    e.preventDefault();
    setSlotPage(slotPage + 1);
  }

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
                      />
                    </li>
                  )})}
              </List>
              <Button
                label="See More"
                onClick={onButtonClick}
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
