import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/list/List';
import Card from './components/card/Card';
import UserMessage from './components/userMessage/UserMessage';
import useGetProjects from './hooks/useGetProjects';

function App() {

  const LIST_TITLE = 'Projects';
  const LOADING_MESSAGE = 'LOADING...'
  const PROJECT_SLOT_SIZE = 5;

  /** projectList holds the projects to be render in the UI */
  const {projectsData, isFetching, error} = useGetProjects(PROJECT_SLOT_SIZE);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <code>TechPort Nasa Projects</code>
        </h1>
      </header>
      <main className="App-main-content">
        {isFetching || error
          ?  <UserMessage message={isFetching ? LOADING_MESSAGE : `Error: ${error.message}`}/>
          :  <List title={LIST_TITLE}>
              {projectsData.map(({
                id,
                title,
                description,
                lastUpdated,
                startDate,
                status
              }) => (
                  <li key={id}>
                    <Card
                      title={title}
                      description={description}
                      lastUpdated={lastUpdated}
                      startDate={startDate}
                      status={status}
                    />
                  </li>
                ))}
            </List>
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
