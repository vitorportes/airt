import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { getRandomPhrase } from "../utils";
import { Form, Loader } from "../components";

const PostCreation = () => {
  const navigate = useNavigate();
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phrase: "",
    photo: "",
  });

  const generateImage = async () => {
    if (form.phrase) {
      try {
        setGeneratingImg(true);
        const response = await fetch("http://localhost:8080/api/photo", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ phrase: form.phrase }),
        });

        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        alert(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Please, enter a prompt");
    }
  };

  const handleSubmit = () => {};

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPhrase = getRandomPhrase(form.phrase);
    setForm({ ...form, phrase: randomPhrase });
  };

  return (
    <section className='max-w-7xl mx-auto'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[25px]'>Create</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[500px]'>
          Create imaginative and visually stunning images with A.I. and share
          them with the community
        </p>
      </div>

      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-5'>
          <Form
            labelName='Your name'
            type='text'
            name='name'
            placeholder='John Doe'
            value={form.name}
            handleChange={handleChange}
          />
          <Form
            labelName='Prompt'
            type='text'
            name='phrase'
            placeholder='A vibrant urban landscape with a pop art aesthetic'
            value={form.phrase}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div
            className='relative bg-gray-50 border border-gray-300 
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 
            focus:border-blue-500 w-64 p-3 h-64 flex 
            justify-center items-center mt-2'
          >
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.phrase}
                className='w-full h-full object-contain'
              />
            ) : (
              <img
                src={preview}
                alt='preview'
                className='w-9/12 h-9/12 object-contain opacity-40'
              />
            )}

            {generatingImg && (
              <div className='absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg'>
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className='mt-5 flex gap-5'>
          <button
            type='button'
            onClick={generateImage}
            className='text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
          >
            {generatingImg ? "Generating..." : "Generate"}
          </button>
        </div>

        <div className='mt-3'>
          <p className='mt-2 text-[#666e75] text-[14px]'>
            Once you have created the image, you can share it with others in the
            community.
          </p>

          <button
            type='submit'
            className='mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center'
          >
            {loading ? "Sharing..." : "Share with the community"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default PostCreation;
