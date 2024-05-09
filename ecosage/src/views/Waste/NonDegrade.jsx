/* eslint-disable no-unused-vars */
import axios from "axios";
import Checkbox from "../../components/Checkbox";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Markdown from "react-markdown";

const makeRequestAPI = async (prompt) => {
  const res = await axios.post("http://localhost:8000/generate", {
    prompt: `Waste Management Options for ${prompt}. Focus on topics regarding recycling, reusing and reducing.`,
  });
  return res.data;
};
export default function Degrade() {
  const [prompt, setPrompt] = useState("");
  const mutation = useMutation({
    mutationFn: makeRequestAPI,
    mutationKey: ["gemini-ai-request"],
  });

  const submitHandler = (e) => {
    e.preventDefault();
    mutation.mutate(prompt);
  };

  const [data, setData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className=''>
        <h1>What is Non-Biodegradable waste?</h1>
        <br />
        <p>
          Non-biodegradable waste refers to waste materials that do not easily
          decompose or break down into simpler substances through natural
          biological processes. These materials persist in the environment for
          extended periods, often causing pollution and environmental harm.
          Examples of non-biodegradable waste include plastics (such as bottles,
          bags, and packaging), metals (like aluminum cans), glass, certain
          types of synthetic fabrics (such as polyester), electronic waste
          (e-waste), and some types of chemicals and toxins. Non-biodegradable
          waste poses significant challenges for waste management and
          environmental conservation because it can accumulate in landfills,
          oceans, and other ecosystems, leading to pollution, habitat
          destruction, and harm to wildlife. Proper disposal and recycling of
          non-biodegradable waste are essential to mitigate its negative impacts
          on the environment.
        </p>
      </div>

      <br />

      <div className='flex flex-col justify-center items-center'>
        <p className='text-[20px] py-2 m-2'>
          What is the major waste that comes out of your house?
        </p>
        <form onSubmit={submitHandler}>
          <input
            type='text'
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className='text-center bg-white border border-black w-[100%] px-3 py-2'
          />
          <br />
          <button
            className='border border-black w-[100%] rounded-lg py-2 my-3'
            type='submit'
          >
            How can I manage non biodegradable waste locally?
          </button>
          <div className='text-center'>
            {mutation.isError && <p>{mutation.error.message}</p>}
            {mutation.isSuccess && (
              <p className='p-2 text-red-500'>
                <Markdown className='base_markdown'>{mutation.data}</Markdown>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
``;
