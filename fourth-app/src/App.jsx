import "./App.css"

function App() {
  return (
    <>
    <header className="h-[100px] w-screen bg-black text-white flex items-center justify-between">
      <div>
        <h2 className="text-3xl font-bold p-3">A2Z IT HUB </h2>
      </div>
      <div className="">
        <div className="h-full w-full flex gap-6 text-xl border border-1 rounded-2xl py-4 px-9 backdrop-blur-md">
          <h2>Home</h2>
          <h2>About</h2>
          <h2>Service</h2>
          <h2>Blog</h2>
          <h2>Contact</h2>
        </div>
      </div>
      <div className="">
        <button  className="py-3 px-5 rounded-xl font-bold border-red-400 bg-red-300 text-red-600 border ">logout</button>
        <button>Profile</button>
      </div>
    </header>
    </>
  );
}

export default App;