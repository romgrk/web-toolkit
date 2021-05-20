import { createSignal } from 'solid-js'
import Box from './components/Box'
import Button from './components/Button'

const sizes = ['mega', 'huge', 'large', 'medium', 'small', 'mini']

function App() {
  const [count, setCount] = createSignal(0)

  return (
    <div class="App">
      <header class="App-header">
        <div>
          <Button onClick={() => setCount(count() + 1)}>
            Click Me {count()}
          </Button>
        </div>
        <Box horizontal padded='vertical'>
          <For each={sizes}>
            {size =>
              <Button size={size}>
                {size}
              </Button>
            }
          </For>
        </Box>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          class="App-link"
          href="https://github.com/ryansolid/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
}

export default App;
