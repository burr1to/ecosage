/* eslint-disable no-unused-vars */
import axios from "axios";
import Checkbox from "../../components/Checkbox";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Markdown from "react-markdown";
import "./markdown.css";

const makeRequestAPI = async (prompt) => {
  const res = await axios.post("http://localhost:8000/generate", {
    prompt: `How do I manage ${prompt} in my house properly?`,
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
      <div className='mt-[40px] flex gap-x-9'>
        <div className='flex-auto'>
          <h1 className='p-3 text-[60px]'>Biodegradable Waste</h1>
          <br />
          <p className='mx-4 text-[20px] italic'>What is it?</p>
        </div>
        <br />
        <div className='flex-auto'>
          <p className='text-justify p-6 text-[18px]'>
            Biodegradable waste refers to any type of waste that can naturally
            decompose or break down into simpler substances through the action
            of microorganisms such as bacteria, fungi, and other biological
            processes. This includes organic materials like food scraps, yard
            waste (such as grass clippings, leaves), paper products, and certain
            types of packaging materials made from natural materials like starch
            or cellulose. Unlike non-biodegradable waste, which can persist in
            the environment for long periods without breaking down,
            biodegradable waste can be composted or recycled through biological
            processes, reducing the burden on landfills and contributing to
            sustainable waste management practices.
          </p>
        </div>
      </div>

      <br />

      <div className='flex flex-col justify-center items-center mt-5'>
        <p className='text-[24px] font-semibold py-2 m-2'>
          What is the major waste that comes out of your house?
        </p>
        <div>
          <form onSubmit={submitHandler}>
            <input
              type='text'
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className='text-center text-[18px] tracking-wide font-medium bg-white border border-black w-[400px] py-3 px-5 rounded-[15px]'
            />
            <div className='flex justify-center items-center'>
              <button
                className='bg-teal-700 hover:bg-teal-600 text-white w-auto rounded-lg py-3 px-3 my-3'
                type='submit'
              >
                How can I manage this waste locally?
              </button>
            </div>
          </form>
        </div>
        <div className='text-center '>
          {mutation.isError && console.log(mutation.error.message)}
          {mutation.isSuccess && (
            <p className='text-black'>
              <Markdown className='base_markdown'>{mutation.data}</Markdown>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
``;
