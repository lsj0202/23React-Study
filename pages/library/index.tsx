import React, { useState } from 'react';
import { Rate } from 'antd';

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const App: React.FC = () => {
  const [value, setValue] = useState(0);

  return (
    <span>
      <Rate tooltips={desc} onChange={setValue} value={value} />
    </span>
  );
};

export default App;