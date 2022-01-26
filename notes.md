```js
mport React, { useRef, useState } from "react";

function App() {
  const baseURL = "http://localhost:8080/api";

  const delete_id = useRef(null);

  const [deleteResult, setDeleteResult] = useState(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  }
  
  async function deleteAllData() { // the 'async' appears to be giving us the try and await functionality
    try {
      const res = await fetch(`${baseURL}/tutorials`, { method: "delete" }); // 'await seems to tell the fetch to complete before moving on

      const data = await res.json();

      const result = { // We have awaited the fetch, we have awaited converting response into json and stored it in 'data', now we are creating a variable called result which stores an object with the keys status, headers, and data, the data being the info we wanted to fetch from the api
        status: res.status + "-" + res.statusText,
        headers: { "Content-Type": res.headers.get("Content-Type") },
        data: data,
      };

      setDeleteResult(fortmatResponse(result));
    } catch (err) {
      setDeleteResult(err.message);
    }
  }

  async function deleteDataById() {
    const id = delete_id.current.value;

    if (id){
      try {
        const res = await fetch(`${baseURL}/tutorials/${id}`, { method: "delete" });

        const data = await res.json();

        const result = {
          status: res.status + "-" + res.statusText,
          headers: { "Content-Type": res.headers.get("Content-Type") },
          data: data,
        };

        setDeleteResult(fortmatResponse(result));
      } catch (err) {
        setDeleteResult(err.message);
      }
    }
  }
  
  const clearDeleteOutput = () => {
    setDeleteResult(null);
  }
  
  return (
    <div className="card">
      <div className="card-header">React Fetch DELETE - BezKoder.com</div>
      <div className="card-body">
        <div className="input-group input-group-sm">
          <button className="btn btn-sm btn-danger" onClick={deleteAllData}>Delete All</button>

          <input type="text" ref={delete_id} className="form-control ml-2" placeholder="Id" />
          <div className="input-group-append">
            <button className="btn btn-sm btn-danger" onClick={deleteDataById}>Delete by Id</button>
          </div>

          <button className="btn btn-sm btn-warning ml-2" onClick={clearDeleteOutput}>Clear</button>
        </div>    
        
        { deleteResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{deleteResult}</pre></div> }      
      </div>
    </div>
  );
}

export default App;
```