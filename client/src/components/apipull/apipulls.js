import request from 'path/to/services/api.request'
import { useEffect} from 'react'

function TitleData() {
  
  useEffect(() => {
  // No need to include your API Base URL, just the end point. 
  // Remember your URL is in the api.constants file.
  // Also extra documentation for this object can be found https://axios-http.com/docs/req_config
    async function getSomeDataFromBackend() {
      let options = {
        url: /listings/, // just the endpoint
        method: 'GET', // sets the method
        data: { // gets sent in the body of the request
          key: value,
          otherKey: otherValue,
        }
      } 
      let resp = await request(options) // await the response and pass in this fancy object of request options
      setSomeState(resp.data) // set the response 
    }
    getSomeDataFromBackend()
  })}

  export default TitleData