import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
//TODO: remove the next import, is just for mocking purposes
import projectListData from './mockedData/projectsContentList.json';

function App() {

  const [projectsList, setProjectList] = useState([]);
  /** Fetching Data */
  useEffect(() => {
    console.log(projectListData);
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
      <section>
        {projectsList.map(({project}) => {
          return <div key={project.id}>
            {project.title}
          </div>;
        })}
      </section>
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
