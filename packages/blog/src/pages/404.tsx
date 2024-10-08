import styled from '@emotion/styled'
import { useLocation } from '@reach/router'
import { Image, Spacer, Text } from '@Kyo/vallista-core'
import { Link } from 'gatsby'
import { useEffect, VFC } from 'react'

const NotFoundPage: VFC = () => {
  const location = useLocation()

  useEffect(() => {
    const normalizeUrlArr = location.pathname
      .split('/')
      .filter((it) => !!it)
      .map((it) => {
        const result = Number(it)
        if (isNaN(result)) return it
        return result
      })

    const count = normalizeUrlArr.reduce<number>((acc, curr) => {
      if (typeof curr === 'number') acc += 1
      return acc
    }, 0)

    if (count > 2) {
      window.location.href = `${location.origin}/${normalizeUrlArr.slice(3).join('/')}/`
    }
  }, [])

  return (
    <Center>
      <Text size={16}>페이지를 찾지 못했어요 :(</Text>
      <Spacer y={0.5} />
      <Link to='/'>
        <Text size={16}>홈으로 가기</Text>
      </Link>
    </Center>
  )
}

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default NotFoundPage
