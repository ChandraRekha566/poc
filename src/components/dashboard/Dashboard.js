import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Axios from 'axios';

const Dashboard = (props) => {
  const [users, setUsers] = useState({ hits: [] });
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await Axios(
        'https://jsonplaceholder.typicode.com/users'
      );
      setUsers({ hits: data });
    };
    fetchData();
  }, [setUsers]);

  return (
    <form className='container-box'>
      <div id='main-box'>
        <div className='left-box'>
          <h1>
            <Link to='/dash'>DASHBOARD</Link>
          </h1>
          <hr></hr>
          <div>
            <h1>
              <Link to='/about'>ABOUT</Link>
            </h1>
          </div>
          <hr></hr>
          <div>
            <h1>TEAM</h1>
          </div>
        </div>
      </div>

      <div className='right-box'>
        <h1>Meet the Team</h1>
        <hr></hr>
        <div>
          <ul>
            {users.hits.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </form>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
