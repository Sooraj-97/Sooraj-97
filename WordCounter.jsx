import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');

  // Calculate word count directly from the text state
  // 1. trim(): Removes leading/trailing spaces so they don't start a count
  // 2. split(/\s+/): Splits by one OR MORE spaces (handles double spacing)
  // 3. filter: Removes empty strings (fixes issue where empty input returns count 1)
  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0)
    .length;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Word Counter</h2>
      
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        rows={6}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />

      <div style={{ marginTop: '10px', fontWeight: 'bold' }}>
        Word Count: {wordCount}
      </div>
    </div>
  );
};

export default WordCounter;
