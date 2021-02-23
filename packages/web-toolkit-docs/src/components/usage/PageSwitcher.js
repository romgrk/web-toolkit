import React, { useState } from 'react'
import {
  Box,
  Label,
  List,
  PageSwitcher,
  Radio,
} from 'web-toolkit'

const texts = [
  `Diam id felis. Nunc dui pede, vestibulum eu, elementum et, gravida quis,
  sapien. Donec blandit. Donec sed magna. Curabitur a risus. Nullam nibh libero,
  sagittis vel, hendrerit accumsan, pulvinar consequat, tellus. Donec varius
  dictum nisl. Vestibulum suscipit enim ac nulla.`,
  `Proin tincidunt. Proin
  sagittis. Curabitur auctor metus non mauris. Nunc condimentum nisl non augue.
  Donec leo urna, dignissim vitae, porttitor ut, iaculis sit amet, sem.`,
  `Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
  inceptos himenaeos. Suspendisse potenti. Quisque augue metus, hendrerit sit
  amet, commodo vel, scelerisque ut, ante. Praesent euismod euismod risus. Mauris
  ut metus sit amet mi cursus.`,
]

const transitions = ['vertical', 'horizontal', 'opacity', false]

const stackItems = [
  { key: 1, label: 'One',   content: texts[0] },
  { key: 2, label: 'Two',   content: texts[1] },
  { key: 3, label: 'Three', content: texts[2] },
]



export default function PageSwitcherUsage() {
  const [transition, setTransition] = useState('vertical')
  const [stackPage, setStackPage] = useState(0)

  return (
    <div>
      <p>
        PageSwitcher is exclusively a controlled component. It is a general-purpose
        component that you can re-use in multiple ways. In the example below, the
        PageSwitcher is only the box containing the latin text that changes.
      </p>

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
        <Box.Fill>
          <PageSwitcher
            padded
            transition={transition}
            activePage={stackPage}
            pages={stackItems}
          />
        </Box.Fill>
      </Box>
      <Box horizontal align compact padded>
        <Label bold>
          transition={'{'}
        </Label>
        <Box horizontal align>
        {transitions.map(t =>
          <Radio
            label={JSON.stringify(t)}
            size='large'
            name='transition'
            value={t === transition}
            onChange={enabled => enabled && setTransition(t)}
          />
        )}
        </Box>
        <Label bold>
          {'}'}
        </Label>
      </Box>
    </div>

  )
}
