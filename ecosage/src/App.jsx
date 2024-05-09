import { useState  } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query"



const makeRequestAPI = async(prompt) => {
  const res = await axios.post('http://localhost:8080/generate', prompt);
  return res.data;
};



function App() {
  const [prompt, setPrompt] = useState("");
  const mutation = useMutation({
    mutationFn: makeRequestAPI,
    mutationKey:['gemini-ai-request']
  })
  
  const submitHandler = (e) => {
    e.preventDefault();
    mutation.mutate(prompt)
  }
  console.log(mutation)
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Ecosage</h1>
      </header>
      <p>Enter a prompt </p>
      <form className="App-form" onSubmit={submitHandler}>
        <label htmlFor=''> Enter Your prompt  </label>
        <input type="text"
        value= {prompt}
        onChange={(e)=>setPrompt(e.target.value)}
        placeholder="Write a content about..."
        className="App-input"
        />
        <button className="App-button" type="submit">
          Generate content
        </button>
        <section className="App-response">
          {mutation.isPending && <p>Generating your content</p>}
          {mutation.isError && <p>{mutation.error.message}</p>}
          {mutation.isSuccess && <p>{mutation.data}</p>}
        </section>

      </form>
    </div>
  );
}

export default App;
