import Icon from './Icon'

function App() {
  return (
    <div className="App background">
      <h1>Demo</h1>

      <p className='row'>
        <button><Icon name='list-add-symbolic'/> Edit</button>
        <button>Action</button>
        <button disabled>Action</button>
      </p>

      <p>
        <input type='text' />
      </p>

    </div>
  );
}

export default App;
