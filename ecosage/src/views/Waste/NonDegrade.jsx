/* eslint-disable no-unused-vars */
import axios from "axios";
import Checkbox from "../../components/Checkbox";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Markdown from "react-markdown";
import Navbar from "../../components/Navbar";

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
    <>
      <Navbar />
      <div>
        <div className='mt-[40px] flex gap-x-9'>
          <div className='flex-auto'>
            <h1 className='p-3 text-[60px]'>Non- biodegradable Waste</h1>
            <br />
            <p className='mx-4 text-[20px] italic'>What is it?</p>
          </div>
          <br />
          <div className='flex-auto'>
            <p className='text-justify p-6 text-[18px]'>
              <b>Non-biodegradable waste</b> refers to waste materials that do
              not easily decompose or break down into simpler substances through
              natural biological processes. These materials persist in the
              environment for extended periods, often causing pollution and
              environmental harm. Examples of non-biodegradable waste include
              plastics (such as bottles, bags, and packaging), metals (like
              aluminum cans), glass, certain types of synthetic fabrics (such as
              polyester), electronic waste (e-waste), and some types of
              chemicals and toxins.
            </p>
          </div>
        </div>

        <br />

        <div className='flex flex-col justify-center items-center mt-5'>
          <p className='text-[24px] font-semibold py-2 m-2'>
            What is the major non-biodegradable waste that comes out of your
            house?
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
    </>
  );
}
``;
