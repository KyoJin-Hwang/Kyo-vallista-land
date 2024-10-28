import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { Button, Container, Spacer, Text } from '@Kyo/vallista-core'
import { VFC } from 'react'

import { Seo } from '../components/Seo'
import { useConfig } from '../hooks/useConfig'

const ResumePage: VFC = () => {
  const { resume } = useConfig()

  return (
    <Container>
      <Seo name='이력서' />
      {/* 헤더 */}
      <Header>
        <Wrapper>
          <Container>
            <Title>
              <Container>
                <Text as='h2' size={48} weight={800}>
                  {resume.config.name}
                </Text>
                <Text as='h2' size={32} weight={800}>
                  {resume.config.role}
                </Text>
              </Container>
            </Title>
            <Spacer y={1} />
            <SubTitle>
              {resume.config.bio.map((it) => (
                <Text as='p' size={20} weight={400} lineHeight={40} key={it}>
                  <span dangerouslySetInnerHTML={{ __html: it }} />
                </Text>
              ))}
              <Container>
                <Spacer y={1.5} />
              </Container>
              <Container row>
                <Button size='large' width={220} onClick={() => openNewPage(resume.config.github)}>
                  <Container row center>
                    <svg
                      viewBox='0 0 24 24'
                      width='30'
                      height='30'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      fill='none'
                      shapeRendering='geometricPrecision'
                    >
                      <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22' />
                    </svg>
                    <Spacer x={0.3} />
                    <Text size={16} weight={600}>
                      GitHub 방문하기
                    </Text>
                  </Container>
                </Button>
                {/* velog */}
                {/* <Button size='large' width={240} onClick={() => openNewPage(resume.config.velog)}>
                  <Container row center>
                    <svg width='30' height='30' viewBox='0 0 192 192' fill='currentColor'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M24 0H168C181.255 0 192 10.7451 192 24V168C192 181.255 181.255 192 168 192H24C10.7451 192 0 181.255 0 168V24C0 10.7451 10.7451 0 24 0ZM49 57.9199V65.48H67L80.6799 142.52L98.5 141.26C116.02 119.06 127.84 102.44 133.96 91.3999C140.2 80.24 143.32 70.9399 143.32 63.5C143.32 59.0601 142 55.7 139.36 53.4199C136.84 51.1399 133.66 50 129.82 50C122.62 50 116.62 53.0601 111.82 59.1799C116.5 62.3 119.68 64.8799 121.36 66.9199C123.16 68.8401 124.06 71.4199 124.06 74.6599C124.06 80.0601 122.44 86.1799 119.2 93.02C116.08 99.8601 112.66 105.92 108.94 111.2C106.54 114.56 103.48 118.7 99.76 123.62L88.0601 57.2C87.1001 52.3999 84.1001 50 79.0601 50C76.78 50 72.3999 50.96 65.9199 52.8799C59.4399 54.6799 53.8 56.3601 49 57.9199Z'
                        fill='currentColor'
                      ></path>
                    </svg>
                    <Spacer x={0.3} />
                    <Text size={16} weight={600}>
                      velog 블로그 방문하기
                    </Text>
                  </Container>
                </Button> */}
              </Container>
            </SubTitle>
          </Container>
        </Wrapper>
      </Header>
      <Spacer />
      {/* 커리어 */}
      <Box id='career'>
        <Contents>
          <Container>
            <Text size={40} weight={800}>
              {resume.careers.title}
            </Text>
            <Spacer y={1.5} />
            {resume.careers.list.map((it) => (
              <TwoColumn key={it.name}>
                <Container>
                  <div>
                    <Text as='h3' size={24} weight={500}>
                      {it.name}
                    </Text>
                    <Spacer y={1} />
                    <Text as='span' size={16}>
                      {it.startDate} ~ {it.endDate}
                    </Text>
                    <Text as='span' size={16}>
                      {it.position}
                    </Text>
                    <Text as='span' size={16}>
                      {it.department}
                    </Text>
                    <Spacer y={1} />
                    <div>
                      {it.descriptions?.map((it_, idx) => (
                        <Text key={idx}>{it_}</Text>
                      ))}
                    </div>
                  </div>
                </Container>
                <Container>
                  <div>
                    {it.projects?.map((it_, idx) => (
                      <Container key={idx}>
                        <Text size={24} weight={600} as='h3'>
                          {it_.url ? <a onClick={() => openNewPage(it_.url!)}>{it_.name}</a> : it_.name}
                        </Text>
                        <Spacer y={1} />
                        <Text size={16}>
                          {it_.startDate} ~ {it_.endDate}
                        </Text>
                        {it_.descriptions?.map((it__, idx) => (
                          <Text size={16} key={idx}>
                            {it__}
                          </Text>
                        ))}
                        <Container row>
                          {it_.techStacks?.map((it__, idx) => (
                            <Text as={'span'} weight={600} size={16} color={'#0070F3'}>
                              {it__}
                            </Text>
                          ))}
                        </Container>
                        <Spacer y={1} />
                        <ul>
                          {it_.which?.map((it__, idx) => (
                            <li key={idx}>
                              <Text size={14}>{it__}</Text>
                            </li>
                          ))}
                        </ul>
                        <Spacer y={2} />
                      </Container>
                    ))}
                  </div>
                </Container>
              </TwoColumn>
            ))}
          </Container>
        </Contents>
      </Box>
      {/* 사이드 */}
      <Box id='side'>
        <Contents>
          <Container>
            <Text size={40} weight={800}>
              {resume.side.title}
            </Text>
            <Spacer y={1.5} />
            {resume.side.list.map((it, idx) => (
              <Container key={idx}>
                <Text as='h3' size={24} weight={600}>
                  {it.url ? <a onClick={() => openNewPage(it.url!)}>{it.title}</a> : it.title}
                </Text>
                <div>
                  {it.descriptions?.map((it_, idx) => (
                    <ul key={idx}>
                      <li>
                        <Container>
                          <Text size={16}>{it_.title}</Text>
                          <SubTitleText>
                            {it_.subTitle.map((it__, idx) => (
                              <Text size={16} key={idx}>
                                {it__}
                              </Text>
                            ))}
                          </SubTitleText>
                        </Container>
                      </li>
                    </ul>
                  ))}
                </div>
                <Spacer y={1} />
              </Container>
            ))}
          </Container>
        </Contents>
      </Box>
      {/* 스킬 */}
      <Box id='skills'>
        <Contents>
          <Container>
            <Text size={40} weight={800}>
              {resume.skills.title}
            </Text>
            <Spacer y={1.5} />
            {resume.skills.list.map((it, idx) => (
              <Container key={idx}>
                <Text as='h3' size={24} weight={600}>
                  {it.title}
                </Text>
                <div>
                  {it.descriptions?.map((it_, idx) => (
                    <ul key={idx}>
                      <li>
                        <Container>
                          <Text size={16}>{it_.title}</Text>
                          <SubTitleText>
                            {it_.subTitle.map((it__, idx) => (
                              <Text size={14} key={idx}>
                                {it__}
                              </Text>
                            ))}
                          </SubTitleText>
                        </Container>
                      </li>
                    </ul>
                  ))}
                </div>
                <Spacer y={1} />
              </Container>
            ))}
          </Container>
        </Contents>
      </Box>
      {/* 취미 */}
      <Box id='hobby'>
        <Contents>
          <Container>
            <Text size={40} weight={800}>
              {resume.hobby.description}
            </Text>
            <Spacer y={1.5} />
            {resume.hobby.list.map((it, idx) => (
              <Container key={idx}>
                <Text as='h3' size={24} weight={600}>
                  {it.url ? <a onClick={() => openNewPage(it.url)}>{it.title}</a> : it.title}
                </Text>
                <div>
                  {it.descriptions?.map((it_, idx) => (
                    <ul key={idx}>
                      <li>
                        <Container>
                          <Text size={16}>{it_}</Text>
                        </Container>
                      </li>
                    </ul>
                  ))}
                </div>
                <Spacer y={1} />
              </Container>
            ))}
          </Container>
        </Contents>
      </Box>
      {/* 발표 */}
      {/* <Box id='speaker'>
        <Contents>
          <Container>
            <Text size={40} weight={800}>
              {resume.speaker.description}
            </Text>
            <Spacer y={1.5} />
            <ul>
              {resume.speaker.list.map((it, idx) => (
                <li key={idx}>
                  <Text size={16}>
                    <a onClick={() => openNewPage(it.url)}>{it.title}</a>
                  </Text>
                </li>
              ))}
            </ul>
          </Container>
        </Contents>
      </Box> */}
      {/* 활동 */}
      {/* <Box id='activities'>
        <Contents>
          <Container>
            <Text size={40} weight={800}>
              {resume.activities.description}
            </Text>
            <Spacer y={1.5} />
            <ul>
              {resume.activities.list.map((it, idx) =>
                it.url !== null ? (
                  <li key={idx}>
                    <Text size={16}>
                      <a onClick={() => openNewPage(it.url!)}>{it.title}</a>
                    </Text>
                  </li>
                ) : (
                  <li key={idx}>
                    <Text size={16}>{it.title}</Text>
                  </li>
                )
              )}
            </ul>
          </Container>
        </Contents>
      </Box> */}
      {/* 강연 */}
      {/* <Box id='lectures'>
        <Contents>
          <Container>
            <Text size={40} weight={800}>
              {resume.lectures.description}
            </Text>
            <Spacer y={1.5} />
            <ul>
              {resume.lectures.list.map((it, idx) =>
                it.url !== null ? (
                  <li key={idx}>
                    <Text size={16}>
                      <a onClick={() => openNewPage(it.url!)}>{it.title}</a>
                    </Text>
                  </li>
                ) : (
                  <li key={idx}>
                    <Text size={16}>{it.title}</Text>
                  </li>
                )
              )}
            </ul>
          </Container>
        </Contents>
      </Box> */}
      {/* 수상 */}
      <Box id='awards'>
        <Contents>
          <Container>
            <Text size={40} weight={800}>
              {resume.awards.description}
            </Text>
            <Spacer y={1.5} />
            <ul>
              {resume.awards.list.map((it, idx) =>
                it.url !== null ? (
                  <li key={idx}>
                    <Text size={16}>
                      <a onClick={() => openNewPage(it.url!)}>{it.title}</a>
                    </Text>
                  </li>
                ) : (
                  <li key={idx}>
                    <Text size={16}>{it.title}</Text>
                  </li>
                )
              )}
            </ul>
          </Container>
        </Contents>
      </Box>
    </Container>
  )

  function openNewPage(target: string): void {
    window.open(target, '_blink')
  }
}

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  padding: 2rem;
`

const Box = styled.div``

const Header = styled.header`
  padding: 2rem 0;
`

const Title = styled.div`
  max-width: 550px;
`

const SubTitle = styled.div`
  max-width: 550px;

  @media screen and (max-width: 1024px) {
    & > div:last-of-type {
      flex-direction: column !important;

      & > * {
        margin-left: 0;
        margin-bottom: 1rem;
      }
    }
  }
`

const Contents = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  padding: 2rem;

  ul {
    list-style: disc;
    padding-left: 1.2rem;
  }

  li {
    margin-bottom: 0.5rem;
    padding: 0.2rem 0;
    line-height: 1.4;

    &::marker {
      ${({ theme }) => css`
        color: ${theme.colors.SUCCESS.DEFAULT};
      `}
    }
  }
`

const TwoColumn = styled.div`
  display: flex;
  margin-bottom: 2rem;

  & > div:first-of-type {
    height: auto;
    box-sizing: border-box;
    flex: 3;
    padding-right: 2rem;

    & > div {
      display: flex;
      flex-direction: column;
      gap: 0;
      position: sticky;
      top: 85px;

      & > div:last-of-type {
        ${({ theme }) => css`
          color: ${theme.colors.PRIMARY.ACCENT_5};

          & > p {
            margin-bottom: 0.5rem !important;
          }
        `}
      }
    }
  }

  & > div:last-of-type {
    flex: 7;
  }

  @media screen and (max-width: 1024px) {
    flex-direction: column;

    & > div:last-of-type {
      padding-left: 1rem;

      ${({ theme }) => css`
        border-left: 3px solid ${theme.colors.SUCCESS.DEFAULT};
      `}
    }
  }
`

const SubTitleText = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.PRIMARY.ACCENT_5};
  `}
`

export default ResumePage
