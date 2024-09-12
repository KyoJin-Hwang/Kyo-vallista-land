import { VFC } from 'react'

import * as Styled from './Remocon.style'

interface RemoconProps {
  name: string[]
}

export const Remocon: VFC<RemoconProps> = (props) => {
  return (
    <div style={{ top: 50, right: 0, width: '200px', height: '200px', background: 'red', position: 'fixed' }}>
      {props.name.map((el) => (
        <span style={{ color: 'blue' }}>{el}</span>
      ))}
    </div>
  )
}
