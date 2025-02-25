import React, { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface ISvgProps
  extends DetailedHTMLProps<HTMLAttributes<SVGSVGElement>, SVGSVGElement> {
  width?: number | string
  height?: number | string
  color?: string
  type: 'delete' | 'completed' | 'goToTodo'
}

const paths = {
  delete:
    'M6 19q0 .825.588 1.413T8 21h8q.825 0 1.413-.587T18 19V7H6v12zM8 9h2v8H8V9zm4 0h2v8h-2V9zM4 6V4h16v2H4z',
  completed: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z',
  goToTodo: 'M10 17l5-5-5-5v10z'
}

const SvgIcon: React.FC<ISvgProps> = ({
  width = 24,
  height = 24,
  color = 'currentColor',
  type,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill={color}
      {...props}
    >
      <path d={paths[type]} />
    </svg>
  )
}

export default SvgIcon
