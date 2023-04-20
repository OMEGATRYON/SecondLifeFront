import request from '../../services/api.request';
import { useState, useEffect } from 'react';

function TitleData() {
  const [paragraphData, setParagraphData] = useState([]);
  useEffect(() => {
    async function getSomeDataFromBackend() {
      let options = {
        url: 'listings/', // endpoint for the API request
        method: 'GET', // sets the HTTP method to GET
      } 
      let resp = await request(options);
      setParagraphData(resp.data);
    }
    getSomeDataFromBackend();
  }, []);

  return (
    <div>{paragraphData.map(item => <p key={item.id}>{item.title}</p>)}</div>
  );
}

export default TitleData;