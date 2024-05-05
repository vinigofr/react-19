import { CSSProperties } from "react";

interface getInputStyleProps {
  isDisabledStyle: boolean
}

export default function getInputStyle({ isDisabledStyle }: getInputStyleProps): CSSProperties {
  return {
    background: 'linear-gradient(135deg, #8E2DE2, #4A00E0)',
    borderRadius: '10px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
    margin: '20px',
    padding: '20px',
    width: '350px',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    opacity: isDisabledStyle ? '0.7' : '1',
    pointerEvents: isDisabledStyle ? 'none' : 'auto',
    filter: isDisabledStyle ? 'grayscale(80%)' : 'none',
    transition: 'opacity 0.3s ease-in-out',
  }
} 