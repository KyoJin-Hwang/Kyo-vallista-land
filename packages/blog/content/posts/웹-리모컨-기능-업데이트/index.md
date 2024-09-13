---
title: 리모컨 기능 추가
tags:
  - 블로그
date: 2024-09-13 17:20:20
draft: false
series: '블로그기능 업데이트'
---

## 1. Template -> post

```javascript ${numberLines}
// h1~h6 태그 저장할 상태
const [search, setSearch] = useState([''])

// componet 준비 상태
const [isReadyRemocon, setIsReadyRemocon] = useState(false)

// 포스트 변경될떄마다 search [] 배열값 변경을 위한 Effect
useEffect(() => {
  setIsReadyRemocon(true)
}, [search])

// state true 값 들어왔을때 component 들어오게
{
  isReadyRemocon && <Remocon name={search} />
}
```

## 2. Markdown

```javascript ${numberLines}
useEffect(() => {
  const names: string[] = []
  Array.from(ref.current?.getElementsByTagName('*') ?? [])
    .filter((it) => Number(it.tagName?.[1] ?? '999') < 6)
    .forEach((it) => {
      if (it.getElementsByTagName('a').length > 0) return

      const name = it.innerHTML.replaceAll(' ', '-')
      // names 배열에 담고
      names.push(name)
      it.innerHTML = `
          <a href="#${name}" aria-label="${name} permalink">
            <svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16" 
            stroke='currentColor'
            stroke-width='1'
            stroke-linecap='round'
            stroke-linejoin='round'
            fill='none'
            shape-rendering='geometricPrecision'>
              <path
                fill-rule="evenodd" 
                d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z">
              </path>
            </svg>
          </a>
          ${it.innerHTML}
        `
      it.id = name
    })
  // props 의 setSearch 함수를 이용하여 값을 넣어준다.
  props.setSearch(names)

  window.onload = () => {
    setTimeout(() => {
      const hashData = decodeURIComponent(location.hash).substring(1)
      if (hashData) {
        window.scrollTo(0, document.getElementById(hashData)?.getBoundingClientRect().bottom ?? 0)
      }
    })
  }
}, [])
```

## 3. 리모컨 컴포넌트 생성

**index.tsx `코드`**

```javascript ${numberLines}
import { FC, useCallback, useEffect, useState } from 'react'
import * as Styled from './Remocon.style'

interface RemoconProps {
  name: string[];
}

export const Remocon: FC<RemoconProps> = (props) => {
  const [scrollY, setScrollY] = useState(window.scrollY)
  // 모달 boolean
  const [fold, setFold] = useState(false)
  // 모달 hide boolean
  const [hide, setHide] = useState(true)

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  useEffect(() => {
    // useRef으로 html 을 잡을까했지만 682 로 하는게 더욱 보기편해서 이렇게 추가
    scrollY >= 682 ? setHide(false) : setHide(true)
  }, [scrollY])
  return (
    <Styled._Container>
      {hide ? null : !fold ? (
        <Styled._FoldButton fold onClick={() => setFold(true)}>
          Menu
        </Styled._FoldButton>
      ) : (
        <Styled._ListContainer fold>
          <Styled._XButton onClick={() => setFold(false)}>X</Styled._XButton>
          <Styled._List fold>
            {props.name.map((el) => {
              const cleanedEl = el.replace(/<\/?code>/g, '').replace(/-/g, ' ')
              return (
                <Styled._Item>
                  <Styled._Link href={`#${el}`} aria-label={el}>
                    {cleanedEl}
                  </Styled._Link>
                </Styled._Item>
              )
            })}
          </Styled._List>
        </Styled._ListContainer>
      )}
    </Styled._Container>
  )
}
```

**Remocon.style.tsx `코드`**

```javascript ${numberLines}
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
export const _FoldButton =
  styled.button <
  { fold: boolean } >
  `
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
export const _ListContainer =
  styled.div <
  { fold: boolean } >
  `
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
export const _List =
  styled.ol <
  { fold: boolean } >
  `
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
```
