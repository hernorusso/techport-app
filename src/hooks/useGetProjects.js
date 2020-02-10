import {useEffect, useState} from 'react';
import axios from 'axios';

/**
 * @description Requires available projects from nasa Techport api
 * @returns {Promise} A collection of nasa projects
*/
const API_KEY = process.env.REACT_APP_API_KEY || 'DEMO_KEY';
const API_PROJECTS_TEMPLATE = 'https://api.nasa.gov/techport/api/projects'
const API_PROJECTS_URL = `${API_PROJECTS_TEMPLATE}?api_key=${API_KEY}`;
const PROJECTS_SLOT_SIZE = 5;

const getProjectAPI = (projectId) => `${API_PROJECTS_TEMPLATE}/${projectId}?api_key=${API_KEY}`;

const getProjectsData = (projects) => {
    return projects.map(({id}) => {
        const queryEndPoint = getProjectAPI(id);
        return axios.get(queryEndPoint);
    });
}

const extractProjectsData = (dataArray) => {
    return dataArray.map(({data: {project}}) => project);
};

const extractProjects = (data) => {
    const {data: { projects: { projects }}} = data;
    return projects;
}

const useGetProjects = (page) => {
    const [data, setData] = useState({
        projects: [],
        isFetching: false,
        projectsData: []
    });

    useEffect(() => {
        async function getProjects() {
            try {
                setData({...data, isFetching: true});
                const response = await axios.get(API_PROJECTS_URL);
                const projects = extractProjects(response);
                const projectsSlot = projects.slice(0, PROJECTS_SLOT_SIZE);
                const resolvedProjectsData = await Promise.all(getProjectsData(projectsSlot));
                const projectsData = extractProjectsData(resolvedProjectsData);
                setData({
                    projects,
                    projectsData,
                    isFetching: false
                });
            } catch(e) {
                const error = e.toJSON();
                console.log(error);
                setData({...data, isFetching: false, error});
            }
        };

        getProjects();
    }, []);

    const {projectsData, isFetching, error} = data;

    return {
        error,
        isFetching,
        projectsData
    };
};


export default useGetProjects;