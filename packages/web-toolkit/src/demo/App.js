import React, { useState, useEffect } from 'react'
import faker from 'faker'
import { addDays } from 'date-fns'

import {
  Autocomplete,
  Alert,
  Box,
  Button,
  Calendar,
  Checkbox,
  DatePicker,
  Dropdown,
  Expander,
  Frame,
  HeaderBar,
  Heading,
  Icon,
  OptimizedIcon,
  InfoBar,
  Input,
  InputNumber,
  Label,
  LevelBar,
  List,
  MenuBar,
  Menu,
  Notebook,
  PageSwitcher,
  Paned,
  Popover,
  PopoverMenu,
  Progress,
  Radio,
  Range,
  Separator,
  Spinner,
  Switch,
  Table,
  TextArea,
  Toolbar,
} from '../lib'

function App() {
  return (
    <div className="App background Box vertical compact">
      <AppHeader />
      <Paned defaultSize={200} fill border='handle'>
        <AppSidebar />
        <Box fill>
          <AppContent />
        </Box>
      </Paned>
    </div>
  );
}

function AppSidebar() {
  const sections = [
    { label: 'Paned' },
    { label: 'Notebook' },
    { label: 'Expander' },
    { label: 'Input' },
    { label: 'Button' },
    { label: 'Dropdown' },
    { label: 'Menu' },
    { label: 'HeaderBar' },
    { label: 'Table' },
    { label: 'List' },
  ]

  return (
    <List border={false} fill sidebar='navigation'>
      {sections.map(s =>
        <List.Item key={s.label} className='align' activatable selected={s.label === 'Notebook'}>
          <Label>{s.label}</Label>
        </List.Item>
      )}
    </List>
  )
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
      <DemoAutocomplete />
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
  return (
    <div className='App__content Box__fill' style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: '2em', right: '2em' }}>
        <a href='https://github.com/romgrk/web-toolkit' className='link'>
          Go to Github
        </a>
      </div>

      <DemoList />
      <br/>

      <DemoPopover />
      <br/>

      <DemoPaned />
      <br/>

      <DemoNotebook />
      <br/>

      <DemoExpander />
      <br/>

      <DemoButtons />
      <br/>

      <DemoInput />
      <br/>

      <DemoSize />
      <br/>

      <Box horizontal>
        <Box vertical>
          <DemoDropdown />
          <DemoToolbar />
        </Box>
        <DemoFrame />
        <DemoMenu />
      </Box>
      <br/>

      <DemoHeaderBar />
      <br/>

      <DemoAlert />
      <br/>

      <DemoTable />
      <br/>

      <DemoCalendar />
      <br/>

      <DemoTypography />
      <br/>

      <IconGrid />
    </div>
  )
}

function DemoAlert() {
  return (
    <Box vertical>
      <Alert title='Neutral message' showClose>
        This is a neutral message :| <a className='link'>Open an issue</a> to report it.
      </Alert>
      <Alert title='Information message' info showClose>
        This is an information message :| <a className='link'>Open an issue</a> to report it.
      </Alert>
      <Alert title='Success!' success showClose>
        This is a success message :) <a className='link'>Open an issue</a> to report it.
      </Alert>
      <Alert title='Warning!' warning showClose>
        This is an error message :/ <a className='link'>Open an issue</a> to report it.
      </Alert>
      <Alert title='Error!' danger showClose>
        This is an error message :( <a className='link'>Open an issue</a> to report it.
      </Alert>
    </Box>
  )
}

function IconGrid() {
  return (
    <>
      {Object.entries(Icon.byName).map(([label, Element]) => 
        <Box horizontal inline style={{ width: 250, marginBottom: '1rem' }}>
          <Element colored style={{ width: '16px', transform: 'scale(1.5)'}} />
          <Label muted>
            {label}
          </Label>
        </Box>
      )}
    </>
  )
}

function DemoList() {
  const [stackPage, setStackPage] = useState(0)
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
    <><Label>Row 1</Label><Switch /></>,
    <><Label>Row 2</Label><Range value={number} onChange={setNumber} style={{ width: 100 }} /></>,
    <><Label>Row 3</Label><InputNumber value={number} onChange={setNumber} /></>,
    <><Label>Row 4</Label><Button icon='mail-mark-important' /></>,
    <><Label>Row 5</Label><Checkbox /></>,
    <><Label>Row 6</Label></>,
    <><Label>Row 7</Label></>,
    <><Label>Row 8</Label></>,
    <><Label>Row 9</Label></>,
    <><Label>Row 10</Label></>,
  ]

  const stackItems = [
    { key: 1, label: 'One', content: 'One' },
    { key: 2, label: 'Two', content: 'Two' },
    { key: 3, label: 'Three', content: 'Three' },
  ]

  const checkboxList =
    <List style={{ width: 200 }} rich rounded>
      <List.Item activatable as='label'>
        <Radio defaultValue={true} name='settings-1' /> <Label className='Box__fill'>Option 1</Label>
      </List.Item>
      <List.Item activatable as='label'>
        <Radio defaultValue={false} name='settings-1' /> <Label className='Box__fill'>Option 1</Label>
      </List.Item>
      <List.Item activatable as='label'>
        <Radio defaultValue={false} name='settings-1' /> <Label className='Box__fill'>Option 1</Label>
      </List.Item>
    </List>

  const switchList = 
    <List style={{ width: 200 }} rich rounded>
      <List.Item activatable as='label'>
        <Label className='Box__fill'>Option 1</Label> <Switch />
      </List.Item>
      <Expander
        contents
        trigger={
          <List.Item activatable expandable>
            <Label className='Box__fill'>Option 2</Label>
          </List.Item>
        }
      >
        <List rich border={false} sublist>
          <List.Item activatable as='label'>
            <Radio defaultValue={true} name='settings-1' /> <Label className='Box__fill'>Option 2.1</Label>
          </List.Item>
          <List.Item activatable as='label'>
            <Radio defaultValue={false} name='settings-1' /> <Label className='Box__fill'>Option 2.2</Label>
          </List.Item>
          <List.Item activatable as='label'>
            <Radio defaultValue={false} name='settings-1' /> <Label className='Box__fill'>Option 2.3</Label>
          </List.Item>
        </List>
      </Expander>
      <List.Item activatable as='label'>
        <Label className='Box__fill'>Option 3</Label> <Switch />
      </List.Item>
    </List>

  const richList =
    <List style={{ width: 220, height: 150 }} rich>
      {richItems.map((item, i) =>
        <List.Item key={i} as='label' activatable>
          {item}
        </List.Item>
      )}
    </List>

  return (
    <>
      {/*
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
      </Box>
      <br/>
      */}
      <Box horizontal align='start'>
        {switchList}
        {checkboxList}
      </Box>
      <br/>
      <Box horizontal>
        <Box horizontal compact border>
          <List style={{ width: 220, height: 150 }} sidebar='stack' border='right'>
            {stackItems.map((item, i) =>
              <List.Item
                key={i}
                selected={stackPage === i}
                needsAttention={i === 2}
                activatable
                onClick={() => setStackPage(i)}
              >
                <Label>{item.label}</Label>
              </List.Item>
            )}
          </List>
          <PageSwitcher
            transition={false}
            activePage={stackPage}
            pages={stackItems}
          />
        </Box>
        {richList}
      </Box>
    </>
  )
}

function DemoPaned({}) {
  return (
    <>
      <Box horizontal expandChildren style={{ height: 200 }}>
        <Paned>
          <Box padded>
            Suscipit. Duis leo est, interdum nec, varius in, facilisis
            vitae, odio. Phasellus eget leo at urna adipiscing vulputate. Nam eu
            erat vel arcu tristique mattis.
            felis.
          </Box>
          <Box padded>
            Suspendisse sit amet tellus non odio porta pellentesque. Nulla facilisi.
            Integer iaculis condimentum augue. Nullam urna nulla, vestibulum quis, lacinia
            eget, ullamcorper eu, dui.
          </Box>
        </Paned>
        <Paned orientation='vertical'>
          <Box padded>
            Suscipit. Duis leo est, interdum nec, varius in, facilisis
            vitae, odio. Phasellus eget leo at urna adipiscing vulputate. Nam eu
            erat vel arcu tristique mattis.
            felis.
          </Box>
          <Box padded>
            Suspendisse sit amet tellus non odio porta pellentesque. Nulla facilisi.
            Integer iaculis condimentum augue. Nullam urna nulla, vestibulum quis, lacinia
            eget, ullamcorper eu, dui.
          </Box>
        </Paned>
      </Box>
    </>
  )
}

function DemoExpander({}) {
  return (
    <>
      <Box horizontal expandChildren style={{ height: 200 }}>
        <Box vertical>
          Before
          <Expander label='View the paragraph'>
            Pellentesque at dolor non lectus sagittis semper. Donec quis mi. Duis eget
            pede. Phasellus arcu tellus, ultricies id, consequat id, lobortis nec, diam.
            Suspendisse sed nunc. Pellentesque id magna. Morbi interdum quam at est.
            Maecenas eleifend mi in urna. Praesent et lectus.
          </Expander>
          After
        </Box>
        <Box vertical>
          Before
          <Expander label='View the paragraph'>
            Pellentesque at dolor non lectus sagittis semper. Donec quis mi. Duis eget
            pede. Phasellus arcu tellus, ultricies id, consequat id, lobortis nec, diam.
            Suspendisse sed nunc. Pellentesque id magna. Morbi interdum quam at est.
            Maecenas eleifend mi in urna. Praesent et lectus.
          </Expander>
          After
        </Box>
      </Box>
    </>
  )
}

function DemoNotebook({}) {
  const pages = [
    {
      key: 'page-1',
      label: 'Page 1',
      closable: true,
      content:
        <Box padded>
          Pharetra velit vitae eros. Vivamus ac risus. Mauris ac pede
          laoreet felis pharetra ultricies. Proin et neque. Aliquam dignissim
          placerat felis. Mauris porta ante sagittis purus.

          Nullam adipiscing eros.
        </Box>,
    },
    {
      key: 'page-2',
      label: 'Page 2',
      closable: true,
      content:
        <Box padded>
          Mattis odio vitae tortor. Fusce iaculis. Aliquam rhoncus,
          diam quis tincidunt facilisis, sem quam luctus augue, ut posuere
          neque sem vitae neque.

          Sed sed justo. Curabitur consectetuer arcu. Etiam placerat est eget odio.
          Nulla.
        </Box>,
    },
    {
      key: 'page-3',
      label: 'Page 3',
      closable: true,
      content:
        <Box padded>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Nunc faucibus posuere turpis. Sed laoreet, est sed gravida
          tempor, nibh enim fringilla quam, et dapibus mi enim sit amet risus. Nulla
          sollicitudin eros sit amet diam. Aliquam ante. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Ut et est. Donec semper
          nulla in ipsum. Integer elit. In pharetra lorem vel ante.
        </Box>,
    },
  ]

  const action = <Button icon='dialog-warning' />

  return (
    <>
      <Box vertical>
        <Box horizontal style={{ height: 200 }}>
          <Box.Fill expandChildren>
            <Notebook arrows action={action} position='top' pages={pages} />
          </Box.Fill>
          <Box.Fill expandChildren>
            <Notebook arrows action={action} position='left' pages={pages} />
          </Box.Fill>
        </Box>
      </Box>
      <br/>
    </>
  )
}

function DemoAutocomplete() {
  const [value, setValue] = useState('')
  const [users, setUsers] = useState(false)
  useEffect(() => {
    generateUsers(10)
    .then(u => u.slice(0, 20))
    .then(setUsers)
  }, [])

  const loading = users === false
  const onChange = setValue

  const filteredUsers =
    loading ? [] :
    users.filter(u =>
      u.name.toLowerCase().includes(value.toLowerCase()))
  const options = filteredUsers.map(u => ({
    value: u.name,
    label:
      <Box compact horizontal>
        <Box.Fill style={{ minWidth: 200 }}>
          {u.name}
        </Box.Fill>
        <Label muted>{u.phone}</Label>
      </Box>
    })
  )

  return (
    <Box>
      <Autocomplete
        icon='system-search'
        placeholder='Autocomplete...'
        loading={loading}
        options={options}
        onChange={onChange}
      />
    </Box>
  )
}

function DemoPopover({}) {
  const smallPopover =
    <Popover
      placement='right'
      content={
        <Box vertical compact>
          <Button flat icon='list-remove' />
          <Range vertical style={{ height: 80 }} />
          <Button flat icon='list-add' />
        </Box>
      }
    >
      <Button icon='audio-headphones'>
        Volume
      </Button>
    </Popover>

  const hoverPopover =
    <Popover
      method='mouseover'
      placement='left'
      content={
        <Box vertical compact>
          I'm a popover content
        </Box>
      }
    >
      <Button icon='input-mouse'>
        Hover Me
      </Button>
    </Popover>

  return (
    <Box horizontal>
      {smallPopover}
      <Box.Fill />
      <DemoPopoverMenu />
      <Box.Fill />
      {hoverPopover}
    </Box>
  )
}

function DemoPopoverMenu({}) {
  const [open, setOpen] = useState(false)

  const getPages = ({ change, close, back }) => [
    {
      key: 'main',
      content:
        <ComplexMenu
          onClickShare={() => change('share')}
        />
    },
    {
      key: 'share',
      content:
        <Menu icons>
          <Menu.Back onClick={back}>
            Share
          </Menu.Back>
          <Menu.Button checkbox={true}>Option 1</Menu.Button>
          <Menu.Button checkbox={true}>Option 2</Menu.Button>
          <Menu.Button checkbox={false}>Option 3</Menu.Button>
          <Menu.Button checkbox={true}>Option 4</Menu.Button>
        </Menu>
    },
  ]

  return (
    <PopoverMenu pages={getPages} open={open} onChangeOpen={setOpen}>
      <Button icon='emblem-system'>
        Open Popover
      </Button>
    </PopoverMenu>
  )
}

function DemoInput() {
  return (
    <>
      <Box horizontal>
        <Box vertical style={{ width: 300 }}>
          <Input
            icon='folder-saved-search'
            iconAfter='edit-clear'
            placeholder='Text input...'
          />
          <Input
            icon={<Spinner />}
            iconAfter='edit-clear'
            value='Disabled'
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
          <TextArea />
          <LevelBar value={0} />
          <LevelBar value={1} />
          <LevelBar value={2} />
          <LevelBar value={4} />
        </Box>
        <Box vertical style={{ width: 300 }}>
          <div className='row'>
            <InputNumber value={5} vertical />
            <InputNumber value={50} vertical disabled />
            <Box vertical>
              <InputNumber defaultValue={0} min={0} />
              <InputNumber defaultValue={0} min={0} disabled />
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
              <Radio.Group
                horizontal={true}
                size='medium'
                name='gender'
                options={[
                  { value: 'M', label: 'Male' },
                  { value: 'F', label: 'Female' },
                  { value: 'NB', label: 'Non-binary' },
                ]}
                defaultValue={'NB'}
              />
            </Box>
          </Box>
          <Range defaultValue={5} min={0} max={10} step={2} marks />
          <Range defaultValue={5} min={0} max={10} step={2} marks disabled />
          <Progress value={25} label />
          <Progress value={undefined} />
        </Box>
      </Box>

    </>
  )
}

function DemoButtons() {
  return (
    <Box vertical>
      <div className='row'>
        <Button text>Normal</Button>
        <Button text hover>Hover</Button>
        <Button text disabled>Disabled</Button>
        <Button text active>Active</Button>
        <Button text active disabled>Disabled</Button>
        <Button text flat>Flat</Button>
        <Button text flat disabled>Flat</Button>
        <Button text link>Link</Button>
      </div>
      <div className='row'>
        <Button icon='list-add'>Icon</Button>
        <Button>No Icon</Button>
        <Button image icon='list-add' circular />
        <span className='linked'>
          <Button>1</Button>
          <Button active>2</Button>
          <Button>3</Button>
          <Button>4</Button>
        </span>
      </div>
      <div className='row'>
        <Button text>Normal</Button>
        <Button text primary>Primary</Button>
        <Button text danger>Danger</Button>
      </div>
      <div className='row'>
        <Button className='osd'>
          OSD Button
        </Button>
        <span className='StackSwitcher linked'>
          <Button text>Page 1</Button>
          <Button text active>Page 2</Button>
          <Button text>Page 3</Button>
          <Button text className='needs-attention'><span className='Label'>Page 4</span></Button>
        </span>
      </div>
    </Box>
  )
}

function DemoSize() {
  const sizes = ['mini', 'small', 'medium', 'large', 'huge', 'mega']
  return (
    <>
      <Box vertical>
        {sizes.map(size =>
          <Box horizontal>
            <Label size={size}>{size}</Label>
            <Input.Group>
              <Input
                size={size}
                iconAfter='edit-clear'
                placeholder='Text input...'
              />
              <Button size={size} icon='list-add' />
            </Input.Group>
            <InputNumber size={size} />
            <Checkbox defaultValue={true} size={size} label='check' />
            <Radio defaultValue={true} size={size} label='radio' />
            <Switch labels size={size} />
            <Range size={size} style={{ width: 120 }} />
          </Box>
        )}
      </Box>
    </>
  )
}

function DemoCalendar() {
  const [value, setValue] = useState(addDays(new Date(), -3))
  return (
    <Box horizontal>
      <Calendar
        value={value}
        onChange={setValue}
      />
      <DatePicker />
    </Box>
  )
}

function DemoTable() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    generateUsers(1000).then(setUsers)
  }, [])

  const columns = [
    {
      Header: 'Row',
      accessor: (row, i) => i,
      width: 50,
    },
    {
      Header: 'Name',
      columns: [
        {
          Header: 'Username',
          accessor: 'username',
          Filter: DemoInputFilter,
          filter: 'includes',
        },
        {
          Header: 'Full Name',
          accessor: 'name',
          Filter: Table.InputFilter,
          filter: 'includes',
        },
      ],
    },
    {
      Header: 'Info',
      columns: [
        {
          Header: 'Phone',
          accessor: 'phone',
        },
        {
          Header: 'Website',
          accessor: 'website',
          Filter: Table.DropdownFilter,
          filter: 'includes',
          options: [
            { label: '.com', value: '.com' },
            { label: '.org', value: '.org' },
            { label: '.net', value: '.net' },
            { label: '.info', value: '.info' },
            { label: '.biz', value: '.biz' },
          ],
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
    <div style={{ height: 400 }}>
      <Table
        columns={columns}
        data={users}
        sortable={true}
        filterable={true}
      />
    </div>
  )
}

function DemoInputFilter({ column: { filterValue, setFilter, id } }) {
  return (
    <Input
      allowClear
      size='mini'
      id={id}
      value={filterValue || ''}
      onChange={setFilter}
    />
  )
}

function DemoDropdown() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    generateUsers(10).then(setUsers)
  }, [])

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
      <div className='MenuBar__popover Popover menu open' style={{ position: 'relative' }}>
        <div className='Popover__wrapper'>
          <div className='Popover__container'>
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
    </div>
  )
}

function ComplexMenu({ onClickShare }) {
  return (
    <Menu icons>
      <Menu.CircularButtons>
        <Button size='large' circular icon='printer' />
        <Button size='large' circular icon='emblem-shared' />
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
      <Menu.Button menu={<div>Some menu</div>} onClick={onClickShare}>
        Share{' '}
        {onClickShare && <span className='text-muted'>(Click Me)</span> }
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
      <div className='Popover menu bottom arrow arrow-top open' style={{ position: 'relative' }}>
        <div className='Popover__wrapper'>
          <div className='Popover__arrow top' style={{ left: 100 }} />
          <div className='Popover__container'>
            <ComplexMenu />
          </div>
        </div>
      </div>
    </div>
  )
}

function DemoTypography() {
  return (
    <Box>
      <Heading as='h1'>Heading 1</Heading>
      <Heading as='h2'>Heading 2</Heading>
      <Heading as='h3'>Heading 3</Heading>
      <Heading as='h4'>Heading 4</Heading>
      <Heading as='h5'>Heading 5</Heading>
      <Heading as='h6'>Heading 6</Heading>

      <Box horizontal>
        <Label bold>Label</Label>
        <Label bold muted>Label</Label>
        <Label bold info>Label</Label>
        <Label bold info disabled>Label</Label>
        <Label bold success>Label</Label>
        <Label bold success disabled>Label</Label>
        <Label bold warning>Label</Label>
        <Label bold warning disabled>Label</Label>
        <Label bold danger>Label</Label>
        <Label bold danger disabled>Label</Label>

        <Spinner />
        <Spinner disabled />
        <Spinner hidden />
      </Box>

    </Box>
  )
}

export default App;


function generateUsers(n = 30) {
  /* return new Promise(resolve => setTimeout(resolve, 1000))
   * .then(() => fetch('https://jsonplaceholder.typicode.com/users'))
   * .then(r => r.json()) */
  // Table data as an array of objects
  const list = new Array(n).fill(true).map((_, n) => ({
    id: n + 1,
    name: faker.name.findName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    address: {
      street: faker.address.streetName(),
      suite: faker.address.streetSuffix(),
      city: faker.address.city(),
      zipcode: faker.address.zipCode(),
    },
    phone: faker.phone.phoneNumber(),
    website: faker.internet.url(),
  }))
  return Promise.resolve(list)
}

/* function blur() {
 *   document.body.classList.add('window-inactive');
 * }
 * 
 * function focus() {
 *   document.body.classList.remove('window-inactive');
 * } */
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

