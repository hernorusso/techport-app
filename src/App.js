import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/list/List';
import Card from './components/card/Card';
//TODO: remove the next import, is just for mocking purposes
import projectListData from './mockedData/projectsContentList.json';

function App() {

  const LIST_TITLE = 'Projects';
  /** projectList holds the projects to be render in the UI */
  const [projectsList, setProjectList] = useState([]);
  /** Fetching Data */
  useEffect(() => {
    setProjectList(projectListData);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <code>TechPort Nasa Projects</code>
        </h1>
      </header>
      <main className="App-main-content">
        <List title={LIST_TITLE}>
          {projectsList.map(({project}) => {
            const {
              title,
              description,
              lastUpdated,
              startDate,
              status
            } = project;

            return (
              <li key={project.id}>
                <Card
                  title={title}
                  description={description}
                  lastUpdated={lastUpdated}
                  startDate={startDate}
                  status={status}
                />
              </li>);
          })}
        </List>
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
