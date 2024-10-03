import { FC, useCallback, useEffect, useState } from 'react'
import * as Styled from './Remocon.style'

interface RemoconProps {
  name: string[]
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
              const cleanedEl = el
                .replace(/<\/?code>/g, '')
                .replace(/-/g, ' ')
                .replace(/<\/?strong>/g, '')
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
