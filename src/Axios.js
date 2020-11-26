import Request from 'axios-react';
 
const Demo = () => (
  <Request
    config={{
      method: 'get',
      url: 'https://foodish-api.herokuapp.com/api/images/pizza'

    }}
  >
    {({ loading, response, error, refetch, networkStatus }) => (
      <div>
          {networkStatus && <span>{networkStatus}</span>}
          {loading && <span>Loading...</span>}
          {error && <span>{error.response.data}</span>}
          {response && <img alt="Pizza" src={response.data.image} />}
          
          <button onClick={refetch}>Refetch!</button>
      </div>
    )}
  </Request>
)

export default Demo