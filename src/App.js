import React, { useState, useEffect } from 'react';  
import './App.css';
import './index.css';
import Postagem from './components/Reddit/Card/Card.js';
import {fetchPostsFromReddit} from './api/'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export default function App() {
  const [hotPosts, setHotPosts] = useState([]);
  const [newsPosts, setNewsPosts] = useState([]);
  const [risingPosts, setRisingPosts] = useState([]);
  const [error, setError] = useState(false);


  useEffect(async () => {
    try {
      const [hotPosts, newsPosts, risingPosts] =  await fetchPostsFromReddit();
      setHotPosts(hotPosts.data.children)
      setNewsPosts(newsPosts.data.children)
      setRisingPosts(risingPosts.data.children);
    } catch(e) {
      setError(true);
    }

  }, []);

  return (
    <div>
      <h1>REACT<span>JS</span></h1>
      <div className="container">
        {error ? <h1>Deu erro</h1> : (
        <Tabs>
          <TabList>
            <Tab>Hot</Tab>
            <Tab>News</Tab>
            <Tab>Rising</Tab>
          </TabList>
          <TabPanel>
            {hotPosts.length > 0 ? hotPosts.map((post, index) => <Postagem key={index} post={post.data} />) : ''}
          </TabPanel>
          <TabPanel>
            {newsPosts.length > 0 ? newsPosts.map((post, index) => <Postagem key={index} post={post.data} />) : ''}
          </TabPanel>
          <TabPanel>
            {risingPosts.length > 0 ? risingPosts.map((post, index) => <Postagem key={index} post={post.data} />) : ''}
          </TabPanel>
        </Tabs>
        )}
      </div>
    </div>
  );
}