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
    <div>
      {paragraphData.map(item => (
        <div key={item.id} style={{border: "1px solid black", padding: "10px"}}>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
}

export default TitleData;