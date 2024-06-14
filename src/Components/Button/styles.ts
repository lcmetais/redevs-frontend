import styled, { css } from 'styled-components'
import theme from '../../styles/styled-theme'

type WrapperProps = {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'green' | 'pagination'
  size?: 'sm' | 'md'
  disabled?: boolean
}

const wrapperModifiers = {
  primary: () => css`
    background: #529048;
    border: 1px solid #529048;
    color: #ffffff;

    &:not(:disabled):hover {
      background: #d0e2e1;
      border-color: #d0e2e1;
    }

    &:disabled {
      background: #d0e2e1;
      color: #ffffff;
    }
  `,

  secondary: () => css`
    background: #ffffff;
    border: 1px solid #529048;
    color: #667085;

    &:not(:disabled):hover {
      background: #f9fafb;
      color: #1d2939;
    }

    &:disabled {
      color: #d0d5dd;
      cursor: not-allowed;
    }
  `,

  tertiary: () => css`
    background: ${theme.colors.error};
    border: 1px solid #d0d5dd;
    color: #ffffff;

    &:not(:disabled):hover {
      background: #f9fafb;
      color: #000000;
    }

    &:disabled {
      color: #d0d5dd;
      cursor: not-allowed;
    }
  `,
  pagination: () => css`
    background: #ffffff;

    &:not(:disabled):hover {
      background: #f9fafb;
      color: #1d2939;
    }
  `,

  green: () => css`
    background: #529048;
    border: 1px solid #086c33;
    color: #fff;

    &:not(:disabled):hover {
      background: #f9fafb;
      color: #344054;
    }

    &:disabled {
      background: #fff;
      border: 1px solid #344054;
      color: #d0d5dd;
      cursor: not-allowed;
    }
  `,

  sm: () => css`
    height: 36px;
  `,

  md: () => css`
    height: initial;
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ variant, size }) => css`
    all: unset;
    cursor: pointer;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;
    gap: 8px;
    border-radius: 8px;

    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    position: relative;

    transition: all 0.2s ease-in-out;

    white-space: nowrap;

    ${!!variant && wrapperModifiers[variant]()}
    ${!!size && wrapperModifiers[size]()}
  `}
`
