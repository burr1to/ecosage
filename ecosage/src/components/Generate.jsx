import { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import Markdown from "react-markdown";

const makeRequestAPI = async (prompt) => {
  const res = await axios.post("http://localhost:8000/generate", {
    prompt: `Waste Management Options on ${prompt}`,
  });
  return res.data;
};

function Generate() {
  const [prompt, setPrompt] = useState("");
  const mutation = useMutation({
    mutationFn: makeRequestAPI,
    mutationKey: ["gemini-ai-request"],
  });

  const submitHandler = (e) => {
    e.preventDefault();
    mutation.mutate(prompt);
  };

  return (
    <div className='App'>
      <p>Enter a prompt:</p>
      <form className='App-form' onSubmit={submitHandler}>
        <input
          type='text'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder='Write a content about...'
          className='App-input'
        />
        <button className='App-button' type='submit'>
          Generate
        </button>
        <section className='App-response'>
          {mutation.isError && <p>{mutation.error.message}</p>}
          {mutation.isSuccess && <Markdown>{mutation.data}</Markdown>}
        </section>
      </form>
    </div>
  );
}

export default Generate;
