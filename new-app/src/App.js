import React, { useState, useEffect } from 'react';  
import './App.css';
import './index.css';
import Postagem from './components/Reddit/Card/Card.js';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function App() {
  const [reddit, setReddit] = useState([]);

  useEffect(async () => {
    const response = await fetch('https://api.reddit.com/r/artificial');
    const data = await response.json();

    setReddit(data.data.children);
  }, []);
  return (
    <div>
      <h1>REACT<span>JS</span></h1>
      <div className="container">
        <Tabs>
          <TabList>
            <Tab>Hot</Tab>
            <Tab>News</Tab>
            <Tab>Rising</Tab>
          </TabList>
          <TabPanel>
            {(reddit != null) ? reddit.map((posts, index) => <Postagem key={index} post={posts.data} />) : ''}
          </TabPanel>
          <TabPanel>
            {(reddit != null) ? reddit.map((posts, index) => <Postagem key={index} post={posts.data} />) : ''}
          </TabPanel>
          <TabPanel>
            {(reddit != null) ? reddit.map((posts, index) => <Postagem key={index} post={posts.data} />) : ''}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}