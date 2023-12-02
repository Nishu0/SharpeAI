import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Chart } from 'primereact/chart';

const Data = () => {
  const [posts, setPosts] = useState([]);
  const [displayMode, setDisplayMode] = useState('posts'); 

  const fetchData = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    const filteredData = response.data.filter((post) => post.userId === 1);
    setPosts(filteredData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const pieData = {
    labels: ['User ID 1', 'Other Users'],
    datasets: [
      {
        data: [posts.length, 100 - posts.length],
        backgroundColor: ['#42A5F5', '#66BB6A'],
        hoverBackgroundColor: ['#64B5F6', '#81C784'],
      },
    ],
  };

  const lightOptions = {
    plugins: {
      legend: {
        labels: {
          color: '#495057',
        },
      },
    },
  };

  const toggleDisplayMode = () => {
    setDisplayMode((prevMode) => (prevMode === 'posts' ? 'pieChart' : 'posts'));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="relative overflow-x-auto">
          <div className="flex justify-center mb-2">
            <button
              className={`px-4 py-2 mr-2 ${
                displayMode === 'posts'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-300 text-gray-700'
              }`}
              onClick={() => toggleDisplayMode()}
            >
              Show Posts
            </button>
            <button
              className={`px-4 py-2 ${
                displayMode === 'pieChart'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-300 text-gray-700'
              }`}
              onClick={() => toggleDisplayMode()}
            >
              Show Pie Chart
            </button>
          </div>
          {displayMode === 'posts' && (
            <>
              <h2 className="text-2xl font-semibold text-center mb-2">
                Posts by User ID 1
              </h2>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Title</th>
            <th className="border border-gray-300 p-2">Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr
              key={post.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
            >
              <td className="border border-gray-300 p-2">{post.id}</td>
              <td className="border border-gray-300 p-2">{post.title}</td>
              <td className="border border-gray-300 p-2">{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
            </>
          )}
        </div>
        {displayMode === 'pieChart' && (
          <div className="flex justify-center ">
            <div>
              <h2 className="text-2xl font-semibold text-center mb-2">
                Pie Chart of Posts by User ID
              </h2>
              
              <Chart
                type="pie"
                data={pieData}
                options={lightOptions}
                className="w-full md:w-30rem justify-center"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Data;
