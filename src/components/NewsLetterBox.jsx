import React from 'react'

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault()
  }

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 mx-auto my-6 flex items-center gap-3 border border-gray-200 pl-3 rounded-md">
        <input
          className="flex-1 outline-none border-none text-base p-2"
          type="email"
          placeholder="Enter your email" required />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 uppercase cursor-pointer border-none rounded-md transition-colors duration-300 hover:bg-gray-800"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsLetterBox
