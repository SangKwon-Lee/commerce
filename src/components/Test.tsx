'use client';

import { Client } from '@notionhq/client';
const Test = () => {
  const handleTest = () => {
    fetch(`/api/route?name=test`).then((res) => console.log(res));
  };
  return <button onClick={handleTest}>add</button>;
};

export default Test;
