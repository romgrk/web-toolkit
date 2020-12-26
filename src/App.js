import Button from './Button'
import Icon from './Icon'
import Input from './Input'
import Spinner from './Spinner'

function App() {
  return (
    <div className="App background">
      <h1>Application</h1>

      <p>
        <div className='TextView'>
          <textarea></textarea>
        </div>
      </p>

      { /* TBD: IconView */ }

      <p className='row'>
        <span className='Label'>Label</span>
        <span className='Label selected'>Label</span>
        <span className='Label separator'>Label</span>
        <span className='Label disabled'>Label</span>
        <span className='Label error'>Label</span>
        <span className='Label error disabled'>Label</span>
      </p>

      <p className='row'>
        <Spinner />
        <Spinner disabled />
        <Spinner hidden />
      </p>

      <p className='column' style={{ width: 300 }}>
        <Input
          icon='folder-saved-search-symbolic'
          iconAfter='edit-clear-symbolic'
          placeholder='Text input...'
        />
        <Input
          icon={<Spinner />}
          iconAfter='edit-clear-symbolic'
          placeholder='Disabled'
          disabled
        />
        <Input placeholder='Flat' flat />
        <Input placeholder='Warning' warning />
        <Input placeholder='Error' error />
        <Input placeholder='Progress' progress={50} />
        <Input placeholder='Progress' progress />
        <Input.Group>
          <Button icon='window-close-symbolic' />
          <Input placeholder='Progress' progress />
          <Button icon='window-close-symbolic' />
        </Input.Group>
      </p>

      <p className='row'>
        <Button text>Normal</Button>
        <Button text hover>Hover</Button>
        <Button text disabled>Disabled</Button>
        <Button text active>Active</Button>
        <Button text active disabled>Disabled</Button>
        <Button text flat>Flat</Button>
        <Button text flat disabled>Flat</Button>
      </p>
      <p className='row'>
        <Button icon='list-add-symbolic'>Icon</Button>
        <Button>No Icon</Button>
        <Button text icon='list-add-symbolic' circular />
        <Button image icon='list-add-symbolic' circular />
      </p>

      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
    </div>
  );
}

export default App;
