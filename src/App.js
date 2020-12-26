import { useEffect } from 'react'
import Button from './Button'
import Icon from './Icon'
import Input from './Input'
import Spinner from './Spinner'

function blur() {
  document.body.classList.add('window-inactive');
}

function focus() {
  document.body.classList.remove('window-inactive');
}

function App() {
  /* useEffect(() => {
   *   if (document.visibilityState === 'hidden')
   *     blur()
   *   window.addEventListener('blur', blur);
   *   window.addEventListener('focus', focus);
   *   return () => {
   *     window.removeEventListener('blur', blur);
   *     window.removeEventListener('focus', focus);
   *   }
   * }, []) */
  return (
    <div className="App background">
      <h1>Application</h1>

      <div className='Frame' style={{ height: 160, marginBottom: '1em' }}>
        <div className='Menu'>
          <button className='Menu__item'>File</button>
          <button className='Menu__item'>Edit</button>
          <button className='Menu__item'>View</button>
          <div className='Menu__content'>
            <button className='ModelButton flat Menu__button'>New</button>
            <button className='ModelButton flat Menu__button'>Open</button>
            <button className='ModelButton flat Menu__button'>
              Other
              <Icon name='go-next' className='arrow right' />
            </button>
            <div className='separator'/>
            <button className='ModelButton flat Menu__button'>
              <span className='Label'>Quit</span>
              <span className='Accelerator'>Ctrl+Q</span>
            </button>
          </div>
        </div>
        <div className='Toolbar'>
          <Button>One</Button>
          <Button>Two</Button>
        </div>
      </div>

      { /* TBD: IconView */ }

      <div className='row'>
        <div className='column' style={{ width: 300 }}>
          <Input
            icon='folder-saved-search'
            iconAfter='edit-clear'
            placeholder='Text input...'
          />
          <Input
            icon={<Spinner />}
            iconAfter='edit-clear'
            placeholder='Disabled'
            disabled
          />
          <Input placeholder='Flat' flat />
          <Input placeholder='Warning' warning />
          <Input placeholder='Error' error />
          <Input placeholder='Progress' progress={50} />
          <Input placeholder='Progress' progress />
          <Input.Group>
            <Button icon='window-close' />
            <Input placeholder='Progress' progress />
            <Button icon='window-close' />
          </Input.Group>
        </div>
        <div className='column' style={{ width: 300 }}>
          <div className='linked vertical'>
            <Input placeholder='Street' />
            <Input placeholder='City' />
            <Input placeholder='Country' />
          </div>
        </div>
      </div>

      <p className='row'>
        <Button text>Normal</Button>
        <Button text hover>Hover</Button>
        <Button text disabled>Disabled</Button>
        <Button text active>Active</Button>
        <Button text active disabled>Disabled</Button>
        <Button text flat>Flat</Button>
        <Button text flat disabled>Flat</Button>
        <Button text link>Link</Button>
      </p>
      <p className='row'>
        <Button icon='list-add'>Icon</Button>
        <Button>No Icon</Button>
        <Button text icon='list-add' circular />
        <Button image icon='list-add' circular />
        <span className='linked'>
          <Button>1</Button>
          <Button active>2</Button>
          <Button>3</Button>
          <Button>4</Button>
        </span>
      </p>
      <p className='row'>
        <Button text>Normal</Button>
        <Button text primary>Primary</Button>
        <Button text danger>Danger</Button>
      </p>
      <p className='row'>
        <Button className='osd'>
          OSD Button
        </Button>
        <span className='StackSwitcher linked'>
          <Button text>Page 1</Button>
          <Button text active>Page 2</Button>
          <Button text>Page 3</Button>
          <Button text className='needs-attention'><span className='Label'>Page 4</span></Button>
        </span>
      </p>

      <p className='row'>
        <span className='Label'>Label</span>
        <span className='Label selected'>Label</span>
        <span className='Label separator'>Label</span>
        <span className='Label disabled'>Label</span>
        <span className='Label error'>Label</span>
        <span className='Label error disabled'>Label</span>

        <Spinner />
        <Spinner disabled />
        <Spinner hidden />
      </p>

      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>

      <p>
        <div className='TextView'>
          <textarea></textarea>
        </div>
      </p>

    </div>
  );
}

export default App;
