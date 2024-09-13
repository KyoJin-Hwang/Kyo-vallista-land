import { css } from '@emotion/react'
import styled from '@emotion/styled'

export const _Container = styled.div`
  position: fixed;
  right: 0;
  top: 8rem;
  width: 300px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`
export const _FoldButton = styled.button<{ fold: boolean }>`
  position: absolute;
  width: 50px;
  height: 24px;
  top: 10px;
  right: 20px;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.PRIMARY.FOREGROUND};
    background: ${theme.colors.SUCCESS.DEFAULT};
    color: ${theme.colors.PRIMARY.FOREGROUND};
  `}
  cursor: pointer;
  font-weight: 900;
  border-radius: 20px;
`

export const _MenuIcon = styled.i``
export const _ListContainer = styled.div<{ fold: boolean }>`
  padding: 40px 20px 20px;
  overflow-x: hidden;
  border-radius: 20px;
  border: 2px solid black;
  overscroll-behavior: contain;
  ${({ theme }) => css`
    background: ${theme.colors.PRIMARY.ACCENT_1};
    color: ${theme.colors.PRIMARY.BACKGROUND};
  `}
`
export const _List = styled.ol<{ fold: boolean }>`
  display: flex;
  flex-direction: column;
  max-height: 400px;
  gap: 10px;
`

export const _Item = styled.li`
  ${({ theme }) => css`
    color: ${theme.colors.PRIMARY.FOREGROUND};
  `}
`
export const _Link = styled.a`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  /* 부모 요소의 너비를 초과하지 않도록 설정 */
  max-width: 100%;
`
export const _XButton = styled.button`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 10px;
  right: 20px;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.PRIMARY.FOREGROUND};
    background: ${theme.colors.PRIMARY.BACKGROUND};
    color: ${theme.colors.PRIMARY.FOREGROUND};
  `}
  cursor: pointer;
  font-weight: 700;
  border-radius: 20px;
`
