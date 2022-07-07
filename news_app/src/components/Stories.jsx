import React from 'react'
import { useEffect } from 'react';

const Stories = () => {

  let API = `http://hn.algolia.com/api/v1/search?query=html`;

  const fetchAPIData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAPIData(API);
  }, [])

  return (
    <>
      <h2>My Tech News Post</h2>
    </>
  )
}

export default Stories