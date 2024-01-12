import { colors } from '@vanessa-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([name, value]) => {
    return (
      <div key={name} style={{ backgroundColor: value, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            borderRadius: '0.25rem',
            color: getContrast(value, '#fff') < 3.5 ? '#000' : '#fff',
          }}
        >
          <strong>{name}</strong>
          <strong>{value}</strong>
        </div>
      </div>
    )
  })
}
