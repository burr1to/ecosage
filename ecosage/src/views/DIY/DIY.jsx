import axios from "axios";
import Checkbox from "../../components/Checkbox";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Markdown from "react-markdown";
import "./../Waste/markdown.css";
import Navbar from "../../components/Navbar";

const makeRequestAPI = async (prompt) => {
  const res = await axios.post("http://localhost:8000/generate", {
    prompt: `I want to make a DIY out of ${prompt} in my house. How do I do so?`,
  });
  return res.data;
};

export default function DIY() {
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
    <>
      <Navbar />
      <div className='flex flex-col justify-center items-center mt-20'>
        <h1>Do It Yourself (DIY)</h1>
        <br />
        <p className='text-center text-[20px]'>
          DIY, or Do It Yourself refers to the practice of creating, building,
          or repairing things independently rather than purchasing them pre-made
          or hiring someone else to do the work. DIY projects can encompass a
          wide range of activities, from crafting and home improvement to
          gardening and repair work.
        </p>
        <div>
          <div className='flex flex-col justify-center items-center mt-5'>
            <p className='text-[24px] font-semibold py-2 m-2'>
              What waste do you want to make a DIY out of?
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
                    className='bg-[--secondary] hover:bg-[--primary] hover:transition-all text-white w-auto rounded-lg py-3 px-3 my-3'
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
      </div>
    </>
  );
}
