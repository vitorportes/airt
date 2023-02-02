import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, PostCreation } from "./pages";
import { Header } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create-post' element={<PostCreation />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
