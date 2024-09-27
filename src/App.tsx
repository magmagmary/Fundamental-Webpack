const App = () => (
  <div
    className='flex h-screen w-screen flex-col
                  items-center justify-center bg-slate-300 text-3xl text-slate-900'
  >
    <span className='mb-4'> Hello From Webpack</span>

    <p className='text-sm text-red-500'>{`developed by ${process.env.REACT_APP_NAME}`}</p>
  </div>
);

export default App;
