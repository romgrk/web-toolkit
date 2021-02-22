import React, { useState } from 'react'
import {
  Box,
  Label,
  List,
  PageSwitcher,
} from 'web-toolkit'

export default function PageSwitcherUsage() {
  const [stackPage, setStackPage] = useState(0)
  const stackItems = [
    { key: 1, label: 'One', content: 'One' },
    { key: 2, label: 'Two', content: 'Two' },
    { key: 3, label: 'Three', content: 'Three' },
  ]

  return (
    <div>
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
            transition={false}
            activePage={stackPage}
            pages={stackItems}
          />
        </Box.Fill>
      </Box>
    </div>

  )
}
