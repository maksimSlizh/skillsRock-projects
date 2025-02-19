import React from 'react'
import styles from './UIButton.module.css'

export interface UIButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
}

const UIButton: React.FC<UIButtonProps> = ({
  children,
  icon,
  onClick,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`${icon ? styles.icon : styles.button} ${className}`}
      onClick={onClick}
      {...props}
    >
      {icon ? icon : children}
    </button>
  )
}

export default UIButton
