import React, {ReactNode} from 'react'

interface Props{
    children?: ReactNode
}

export const DarkLayout = ( {children}: Props) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '5px',
        padding: '10px'}}>

        <h6>Dark-Layout</h6>
        <div>
            {children}
        </div>
        
    </div>
  )
}
