import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { Button, Container, Text } from '@Kyo/vallista-core'
import { graphql, navigate } from 'gatsby'
import { VFC } from 'react'

import { ListTable } from '../components/ListTable'
import { Seo } from '../components/Seo'
import { IndexQuery, PageProps, Post } from '../types/type'
import { filteredByDraft, getTime } from '../utils'
const MyState = { 0: '일하고 있습니다.', 1: '구직중 입니다.' }
const IndexPage: VFC<PageProps<IndexQuery>> = (props) => {
  const { data } = props
  const { nodes } = data.allMarkdownRemark

  return (
    <Container>
      <Seo name='홈' />
      <Header>
        <Wrapper>
          <Title>
            <Text as='span' size={48} weight={800}>
              어서오세요!
            </Text>
            <Text as='h1' size={48} weight={800} lineHeight={56}>
              저는 황교진입니다.
            </Text>
          </Title>
          <SubTitle>
            <Text as='p' size={20} weight={400} lineHeight={40}>
              대한민국 에서 <strong>소프트웨어 엔지니어</strong>로 {MyState[1]} 글 쓰는 것을 좋아하며, 개발을 맛있게
              코딩 하고싶은 <strong>개발자</strong>입니다! 블로그에 글 열심히 작성할게요<EmojiText>😿</EmojiText> 많은{' '}
              <strong>피드백</strong> 부탁드려요<EmojiText>😺</EmojiText>
              <br />
              <strong>2024.09 현재 관심사 :</strong> 구직 및 이력서 작성 <EmojiText>📩</EmojiText>
            </Text>
          </SubTitle>
          <Button size='large' color='success' onClick={() => moveToLocation('/posts')}>
            <Text size={16} weight={800}>
              블로그 글 보러갈까요?
            </Text>
          </Button>
        </Wrapper>
      </Header>
      <Contents>
        <ListTable title='최근 게시글' list={filteredNewestPosts(nodes)} />
      </Contents>
    </Container>
  )

  function getSimpleDate(target: string): string {
    const [, month, day] = getTime(target)

    return `${Number(month)}월 ${Number(day)}일`
  }

  function moveToLocation(target: string): void {
    navigate(target)
  }

  function filteredNewestPosts(posts: Post[]): { name: string; slug: string; date: string }[] {
    const cuttingCount = 5

    return filteredByDraft(posts)
      .filter((_, idx) => idx < cuttingCount + 1)
      .map((it) => ({
        name: it.frontmatter.title,
        slug: it.fields.slug,
        date: getSimpleDate(it.frontmatter.date)
      }))
  }
}

const HandAnimation = keyframes`
  0% {
    transform: rotateZ(0);
  }

  50% {
    transform: rotateZ(30deg);
  }

  100% {
    transform: rotateZ(0deg);
  }
`
const EmojiAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-8px);
  }

  100% {
    transform: translateY(0px);
  }
`

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  padding: 2rem;
`

const Header = styled.header`
  padding: 2rem 0;
`

const Title = styled.div`
  margin-bottom: 1.5rem;
  max-width: 550px;

  & > span:first-of-type {
    position: relative;

    &::after {
      position: absolute;
      right: -4rem;
      top: -0.5rem;
      content: '✋';
      display: block;
      animation: ${HandAnimation} 1s ease-in-out infinite;
    }
  }
`

const SubTitle = styled.div`
  max-width: 550px;
  margin-bottom: 2rem;
`

const Contents = styled.section`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  padding: 2rem;
`
const EmojiText = styled.p`
  display: inline-block;
  animation: ${EmojiAnimation} 1s ease-in-out infinite;
`

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          date
          image {
            publicURL
          }
          draft
        }
      }
    }
  }
`
