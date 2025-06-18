import React from 'react';

const Learn = ({ title, author, date, content }) => {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-4 pt-2 pb-6 max-w-6xl mx-auto">

       <h2 className="text-3xl font-semibold mb-6">{title}</h2>
      <br/>
      {content.map((block, index) => {
        if (block.type === 'paragraph') {
          return <p key={index} className="mb-4">{block.text}</p>;
        }

        if (block.type === 'code') {
          return (
            <pre key={index} className="bg-gray-100 p-4 rounded text-sm overflow-x-auto mb-4">
              <code>{block.code}</code>
            </pre>
          );
        }

        if (block.type === 'heading') {
          return (
            <h2 key={index} className="text-2xl font-semibold mt-10 mb-4">
              {block.text}
            </h2>
          );
        }

        return null;
      })}

    </div>
  );
};

export default Learn;
