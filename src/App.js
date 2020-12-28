import { useState, useEffect } from 'react'
import Box from './Box'
import Button from './Button'
import Dropdown from './Dropdown'
import HeaderBar from './HeaderBar'
import Icon, { names as iconNames } from './Icon'
import InfoBar from './InfoBar'
import Input from './Input'
import InputNumber from './InputNumber'
import Label from './Label'
import Separator from './Separator'
import Spinner from './Spinner'
import Table from './Table'
import Toolbar from './Toolbar'

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
    <div className="App background Box vertical compact">

      <HeaderBar titlebar>
        <Button icon='system-search' />
        <div className='linked'>
          <Button icon='go-first' active />
          <Button icon='go-last' active />
        </div>
        <HeaderBar.Title subtitle='This is an header bar' fill>
          Header bar
        </HeaderBar.Title>
        <Input icon='system-search' placeholder='Search...' />
        <span className='StackSwitcher linked'>
          <Button text>Editor</Button>
          <Button text active>Build</Button>
          <Button text className='needs-attention'>
            <span className='Label'>Settings</span>
          </Button>
        </span>
        <HeaderBar.Controls>
          <Button icon='window-close' />
        </HeaderBar.Controls>
      </HeaderBar>

      <AppContent />
    </div>
  );
}

function AppContent() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(r => r.json())
      .then(setUsers)
    }, 1000)
  }, [])


  return (
    <div className='App__content Box__fill'>
      <h1>Application</h1>

      <Box vertical compact>
        <HeaderBar>
          <Button icon='system-search' />
          <div className='linked'>
            <Button icon='go-first' active />
            <Button icon='go-last' active />
          </div>
          <HeaderBar.Title subtitle='This is an header bar' fill>
            Header bar
          </HeaderBar.Title>
          <Button icon='emblem-system' />
          <span className='StackSwitcher linked'>
            <Button text>Editor</Button>
            <Button text active>Build</Button>
            <Button text className='needs-attention'>
              <span className='Label'>Settings</span>
            </Button>
          </span>
          <HeaderBar.Controls>
            <Button icon='window-close' />
          </HeaderBar.Controls>
        </HeaderBar>
        <DemoInfoBar />
      </Box>
      <br/>

      <DemoTable users={users} />

      <br/>

      <Box horizontal>
        <Box vertical>
          <DemoDropdown users={users} />
          <DemoToolbar />
        </Box>
        <DemoFrame />
        <DemoMenu />
      </Box>

      <p>
        <div className='List'>
          <div className='Row activatable'>Row 1</div>
          <div className='Row activatable'>Row 2</div>
          <div className='Row activatable'>Row 3</div>
        </div>
      </p>

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
          <div className='row'>
            <div className='linked vertical'>
              <Input placeholder='Street' />
              <Input placeholder='City' />
              <Input placeholder='Country' />
            </div>
            <InputNumber value={5} vertical />
            <InputNumber value={50} vertical disabled />
          </div>
          <InputNumber />
          <InputNumber disabled />
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

      <p>
        {iconNames.map(name =>
          <Box horizontal inline style={{ width: 250 }}>
            <Icon name={name} style={{ transform: 'scale(1.5)' }}/>
            <Label muted>
              {name}
            </Label>
          </Box>
        )}
      </p>
    </div>
  )
}

function MenuButton({
  children,
  radio,
  checkbox,
  name,
  value,
  accelerator,
  icon,
  menu,
}) {
  return (
    <button className='ModelButton flat Menu__button'>
      {checkbox !== undefined &&
        <Icon name='emblem-ok' className='Menu__icon' />
      }
      {radio &&
        <Icon name='radio' className='Menu__icon' />
      }
      <span className='Label Menu__button__text'>{children}</span>
      {accelerator &&
        <span className='Label Menu__button__accelerator'>{accelerator}</span>
      }
      {icon &&
        <Icon name={icon} className='Menu__iconAfter' />
      }
      {menu &&
        <Icon name='go-next' className='Menu__iconAfter submenu' />
      }
    </button>
  )
}

function DemoTable({ users }) {
  const columns = [
    {
      Header: 'Row Index',
      accessor: (row, i) => i,
      width: 50,
    },
    {
      Header: 'Name',
      columns: [
        {
          Header: 'Username',
          accessor: 'username',
        },
        {
          Header: 'Full Name',
          accessor: 'name',
        },
      ],
    },
    {
      Header: 'Info',
      columns: [
        {
          Header: 'Phone',
          accessor: 'phone',
          width: 150,
        },
        {
          Header: 'Website',
          accessor: 'website',
        },
        {
          Header: 'Address',
          accessor: row =>
            `${row.address.street}${row.address.suite ? ' ' + row.address.suite : ''}, ${row.address.city}`,
        },
      ],
    },
  ]

  return (
    <div style={{ height: 200 }}>
      <Table
        columns={columns}
        data={users}
      />
    </div>
  )
}

function DemoDropdown({ users }) {
  const [value, setValue] = useState(2)
  const options = users.map(u =>
    ({
      value: u.id,
      label: u.name
    })
  )

  return (
    <Box vertical>
      <Dropdown
        value={value}
        loading={users.length === 0}
        options={options}
        onChange={setValue}
      />
      <Dropdown
        input
        value={value}
        loading={users.length === 0}
        options={options}
        onChange={setValue}
      />
      <Box horizontal compact className='linked'>
        <Button icon='list-add' />
        <Dropdown
          input
          value='test'
          options={[]}
        />
      </Box>
    </Box>
  )
}

function DemoInfoBar() {
  return (
    <>
      <InfoBar closable activatable info>This is an infobar</InfoBar>
      <InfoBar closable activatable success>This is an infobar</InfoBar>
      <InfoBar closable activatable warning>This is an infobar</InfoBar>
      <InfoBar closable activatable danger>This is an infobar</InfoBar>
    </>
  )
}
function DemoToolbar() {
  return (
    <>
      <div className='Frame'>
        <Toolbar horizontal>
          <Button icon='document-new' />
          <Button icon='document-edit' />
          <Separator />
          <Button icon='go-first' />
          <Button icon='go-jump' />
          <Button icon='go-last' />
        </Toolbar>
      </div>
      <div className='Frame inline'>
        <Toolbar vertical>
          <Button icon='document-new' />
          <Button icon='document-edit' />
          <Separator />
          <Button icon='go-first' />
          <Button icon='go-jump' />
          <Button icon='go-last' />
        </Toolbar>
      </div>
    </>
  )
}

function DemoFrame() {
  return (
    <div className='Frame' style={{ height: 160, marginBottom: '1em' }}>
      <div className='MenuBar'>
        <button className='MenuBar__item active'>File</button>
        <button className='MenuBar__item'>Edit</button>
        <button className='MenuBar__item'>View</button>
      </div>
      <div className='MenuBar__popover popover Menu menu background open' style={{ position: 'relative' }}>
        <div className='contents'>
          <MenuButton>New</MenuButton>
          <MenuButton>Open</MenuButton>
          <MenuButton menu={true}>
            Other
          </MenuButton>
          <div className='separator'/>
          <MenuButton accelerator='Ctrl+Q'>
            Quit
          </MenuButton>
        </div>
      </div>
    </div>
  )
}

function DemoMenu() {
  return (
    <div>
      <div className='popover background menu icons open' style={{ position: 'relative' }}>
        <div className='arrow up'    style={{ left: 100 }} />
        <div className='contents'>
          <Box horizontal className='circular-buttons' space='around'>
            <Button circular icon='printer' />
            <Button circular icon='emblem-shared' />
          </Box>
          <div className='separator' />
          <MenuButton accelerator='Ctrl+N'>Open in New Window</MenuButton>
          <div className='separator' />
          <Box horizontal className='Menu__item inline-buttons' align>
            <Label className='Box__fill'>Edit</Label>
            <Box horizontal compact>
              <Button flat image icon='edit-cut' />
              <Button flat image icon='edit-copy' />
              <Button flat image icon='edit-paste' />
            </Box>
          </Box>
          <div className='separator' />
          <MenuButton checkbox={true}>Pin</MenuButton>
          <MenuButton>Select Labels...</MenuButton>
          <MenuButton menu={<div>Some menu</div>}>
            Share
          </MenuButton>
          <div className='separator' />
          <Label className='title'>Size</Label>
          <MenuButton radio name='size' value='small'>Small</MenuButton>
          <MenuButton radio name='size' value='medium'>Medium</MenuButton>
          <MenuButton radio name='size' value='large'>Large</MenuButton>
          <div className='separator' />
          <MenuButton accelerator='Delete'>Move to Trash</MenuButton>
        </div>
      </div>
    </div>
  )
}

export default App;
