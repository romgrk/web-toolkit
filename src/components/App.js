import { useState, useEffect } from 'react'
import Box from './Box'
import Button from './Button'
import Checkbox from './Checkbox'
import Dropdown from './Dropdown'
import HeaderBar from './HeaderBar'
import Frame from './Frame'
import Icon, { names as iconNames } from './Icon'
import InfoBar from './InfoBar'
import Input from './Input'
import InputNumber from './InputNumber'
import Label from './Label'
import LevelBar from './LevelBar'
import List from './List'
import Menu from './Menu'
import MenuBar from './MenuBar'
import Notebook from './Notebook'
import Popover from './Popover'
import Progress from './Progress'
import Radio from './Radio'
import Range from './Range'
import Separator from './Separator'
import Spinner from './Spinner'
import Switch from './Switch'
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
      <AppHeader />
      <AppContent />
    </div>
  );
}

function AppHeader() {
  return (
    <HeaderBar titlebar>
      <Button icon='system-search' />
      <div className='linked'>
        <Button icon='go-first' active />
        <Button icon='go-last' active />
      </div>
      <HeaderBar.Title fill>
        Web Toolkit Demo
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
  )
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
    <div className='App__content Box__fill' style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: '2em', right: '2em' }}>
        <a href='https://github.com/romgrk/web-toolkit' className='link'>
          Go to Github
        </a>
      </div>

      <h1>Application</h1>

      <DemoList />
      <br/>

      <DemoInput />
      <br/>

      <DemoNotebook />
      <br/>

      <Box horizontal>
        <DemoPopover />
      </Box>
      <br/>

      <Box horizontal>
        <Box vertical>
          <DemoDropdown users={users} />
          <DemoToolbar />
        </Box>
        <DemoFrame />
        <DemoMenu />
      </Box>
      <br/>

      <DemoHeaderBar />

      <DemoTable users={users} />
      <br/>

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

      <IconGrid />
    </div>
  )
}

function IconGrid() {
  return (
    <>
      {iconNames.map(name =>
      <Box horizontal inline style={{ width: 250 }}>
        <Icon name={name} style={{ transform: 'scale(1.5)' }} colored />
        <Label muted>
          {name}
        </Label>
      </Box>
      )}
    </>
  )
}

function DemoList() {
  const [number, setNumber] = useState(0)
  const [active, setActive] = useState(-1)

  const items = [
    'Row 1',
    'Row 2',
    'Row 3',
    'Row 4',
    'Row 5',
    'Row 6',
    'Row 7',
    'Row 8',
    'Row 9',
    'Row 10',
  ]

  const richItems = [
    <Box horizontal><Label>Row 1</Label><Switch /></Box>,
    <Box horizontal><Label>Row 2</Label><Range value={number} onChange={setNumber} /></Box>,
    <Box horizontal><Label>Row 3</Label><InputNumber value={number} onChange={setNumber} /></Box>,
    <Box horizontal><Label>Row 4</Label><Button icon='mail-mark-important' /></Box>,
    <Box horizontal><Label>Row 5</Label><Checkbox /></Box>,
    <Box horizontal><Label>Row 6</Label></Box>,
    <Box horizontal><Label>Row 7</Label></Box>,
    <Box horizontal><Label>Row 8</Label></Box>,
    <Box horizontal><Label>Row 9</Label></Box>,
    <Box horizontal><Label>Row 10</Label></Box>,
  ]

  return (
    <Box horizontal>
      <List style={{ width: 200, height: 150 }} separators={false}>
        {items.map((item, i) =>
          <List.Item
            key={i}
            selected={active === i}
            onClick={i !== 0 ? () => setActive(i) : undefined}
          >
            {item}
          </List.Item>
        )}
      </List>
      <List style={{ width: 220, height: 150 }} rich>
        {richItems.map((item, i) =>
          <List.Item
            key={i}
            activatable={[0, 1, 3, 4].some(n => n === i) ? false : true}
          >
            {item}
          </List.Item>
        )}
      </List>
    </Box>
  )
}

function DemoNotebook({}) {
  const pages = [
    {
      label: 'Popover',
      closable: true,
      content:
        <div style={{ minWidth: 218, minHeight: 50, padding: '1em' }}>
          Pharetra velit vitae eros. Vivamus ac risus. Mauris ac pede
          laoreet felis pharetra ultricies. Proin et neque. Aliquam dignissim
          placerat felis. Mauris porta ante sagittis purus.

          Nullam adipiscing eros.
        </div>,
    },
    {
      label: 'Inputs',
      closable: true,
      content: 'Empty',
    },
    {
      label: 'Icons',
      content: <IconGrid />,
    },
  ]

  const action = <Button icon='dialog-warning' />

  return (
    <>
      <Box vertical>
        <Box horizontal>
          <Notebook arrows action={action} position='top' pages={pages} />
          <Notebook arrows action={action} position='bottom' pages={pages} />
        </Box>
        <Box horizontal>
          <Notebook arrows action={action} position='left' pages={pages} />
          <Notebook arrows action={action} position='right' pages={pages} />
        </Box>
      </Box>
      <br/>
    </>
  )
}

function DemoPopover({}) {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  return (
    <Popover
      open={open}
      content={<ComplexMenu />}
      onOpen={toggle}
      onClose={toggle}
    >
      <Button icon='emblem-system'>
        Settings
      </Button>
    </Popover>
  )
}

function DemoInput() {
  return (
    <>
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
          <div className='linked vertical' style={{ minWidth: 130 }}>
            <Input placeholder='Street' />
            <Input placeholder='City' />
            <Input placeholder='Country' />
          </div>
          <LevelBar value={0} />
          <LevelBar value={1} />
          <LevelBar value={2} />
          <LevelBar value={4} />
        </div>
        <div className='column' style={{ width: 300 }}>
          <div className='row'>
            <InputNumber value={5} vertical />
            <InputNumber value={50} vertical disabled />
            <Box vertical>
              <InputNumber />
              <InputNumber disabled />
            </Box>
          </div>
          <Box horizontal>
            <Progress value={25} vertical />
            <Range defaultValue={[2, 6]} min={0} max={10} step={2} vertical marks />
            <Range defaultValue={5} min={0} max={10} step={2} vertical marks disabled />
            <Box vertical>
              <Box horizontal>
                <Switch defaultValue={true} />
                <Switch defaultValue={true} labels />
                <Switch disabled defaultValue={true} />
              </Box>
              <Box horizontal>
                <Switch defaultValue={false} />
                <Switch defaultValue={false} labels />
                <Switch disabled defaultValue={false} />
              </Box>
              <Box horizontal>
                <Checkbox defaultValue={true} label='Field' />
                <Checkbox defaultValue={false} label='Field' />
                <Checkbox disabled defaultValue={true} label='Field' />
                <Checkbox disabled defaultValue={false} label='Field' />
              </Box>
              <Box horizontal>
                <Radio name='radio-one' defaultValue={true} label='Field' />
                <Radio name='radio-one' defaultValue={false} label='Field' />
                <Radio name='radio-two' disabled defaultValue={true} label='Field' />
                <Radio name='radio-two' disabled defaultValue={false} label='Field' />
              </Box>
              <Box horizontal>
                <Radio name='radio-one' defaultValue={true} label='Field' />
                <Radio name='radio-one' defaultValue={false} label='Field' />
                <Radio name='radio-two' disabled defaultValue={true} label='Field' />
                <Radio name='radio-two' disabled defaultValue={false} label='Field' />
              </Box>
            </Box>
          </Box>
          <Range defaultValue={5} min={0} max={10} step={2} marks />
          <Range defaultValue={5} min={0} max={10} step={2} marks disabled />
          <Progress value={25} label />
          <Progress value={undefined} />
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
    </>
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
      <Frame>
        <MenuBar>
          <MenuBar.Button label='File'>
            <Menu>
              <Menu.Button>New</Menu.Button>
              <Menu.Button>Open</Menu.Button>
              <Menu.Button menu={true}>
                Other
              </Menu.Button>
              <Menu.Separator />
              <Menu.Button accelerator='Ctrl+Q'>
                Quit
              </Menu.Button>
            </Menu>
          </MenuBar.Button>
          <MenuBar.Button label='Edit'></MenuBar.Button>
          <MenuBar.Button label='View'></MenuBar.Button>
        </MenuBar>
        <Toolbar horizontal>
          <Button icon='document-new' />
          <Button icon='document-edit' />
          <Separator />
          <Button icon='go-first' />
          <Button icon='go-jump' />
          <Button icon='go-last' />
        </Toolbar>
      </Frame>
      <Box horizontal>
        <Frame inline>
          <Toolbar vertical>
            <Button icon='document-new' />
            <Button icon='document-edit' />
            <Separator />
            <Button icon='go-first' />
            <Button icon='go-jump' />
            <Button icon='go-last' />
          </Toolbar>
        </Frame>
        <Frame label='Frame with a label'>
          Content
        </Frame>
      </Box>
    </>
  )
}

function DemoFrame() {
  return (
    <div className='Frame' style={{ height: 160, marginBottom: '1em' }}>
      <div className='MenuBar'>
        <button className='MenuBar__button active'>File</button>
        <button className='MenuBar__button'>Edit</button>
        <button className='MenuBar__button'>View</button>
      </div>
      <div className='MenuBar__popover popover Menu menu open' style={{ position: 'relative' }}>
        <div className='popover__container'>
          <Menu>
            <Menu.Button>New</Menu.Button>
            <Menu.Button>Open</Menu.Button>
            <Menu.Button menu={true}>
              Other
            </Menu.Button>
            <Menu.Separator />
            <Menu.Button accelerator='Ctrl+Q'>
              Quit
            </Menu.Button>
          </Menu>
        </div>
      </div>
    </div>
  )
}

function ComplexMenu() {
  return (
    <Menu icons>
      <Menu.CircularButtons>
        <Button circular icon='printer' />
        <Button circular icon='emblem-shared' />
      </Menu.CircularButtons>
      <Menu.Separator />
      <Menu.Button accelerator='Ctrl+N'>Open in New Window</Menu.Button>
      <Menu.Separator />
      <Menu.InlineButtons label='Edit'>
        <Button flat image icon='edit-cut' />
        <Button flat image icon='edit-copy' />
        <Button flat image icon='edit-paste' />
      </Menu.InlineButtons>
      <Menu.Separator />
      <Menu.Button checkbox={true}>Pin</Menu.Button>
      <Menu.Button>Select Labels...</Menu.Button>
      <Menu.Button menu={<div>Some menu</div>}>
        Share
      </Menu.Button>
      <Menu.Separator />
      <Menu.Title>Size</Menu.Title>
      <Menu.Button radio name='size' value='small'>Small</Menu.Button>
      <Menu.Button radio name='size' value='medium'>Medium</Menu.Button>
      <Menu.Button radio name='size' value='large'>Large</Menu.Button>
      <Menu.Separator />
      <Menu.Button accelerator='Delete'>Move to Trash</Menu.Button>
    </Menu>
  )
}

function DemoHeaderBar() {
  return (
    <>
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
    </>
  )
}

function DemoMenu() {
  return (
    <div>
      <div className='popover menu bottom arrow arrow-top open' style={{ position: 'relative' }}>
        <div className='arrow top' style={{ left: 100, top: -19 }} />
        <div className='popover__container'>
          <ComplexMenu />
        </div>
      </div>
    </div>
  )
}

export default App;
