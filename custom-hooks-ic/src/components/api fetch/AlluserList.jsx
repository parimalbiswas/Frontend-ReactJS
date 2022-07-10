import React from 'react';
import useFetch from './useFetch';

const URL = "https://api.github.com/users";

const AlluserList = () => {
  const data = useFetch(URL);
  console.log(data);
  return (
    <div>
      <ul>
        {
          data && data.map((elem, index) => (
            <li key={index}>
              <img src={elem.avatar_url} alt="" />
              <h3>{elem.login}</h3>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default AlluserList;
