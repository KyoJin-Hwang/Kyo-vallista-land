import { Image } from '@Kyo/vallista-core'

import { NavCategoryType, NavFooterType } from '../src/components/NavBar/type'
import profile from '../static/profile.png'

export const NavCategory: NavCategoryType = {
  me: {
    name: '제가 궁금하세요?',
    icon: <Image src={profile} width={55} height={55} />,
    link: '/resume'
  },
  home: {
    name: '홈으로 갑니다!',
    icon: (
      <svg
        viewBox='0 0 24 24'
        width='32'
        height='32'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
        shapeRendering='geometricPrecision'
      >
        <path d='M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z' />
        <path d='M9 22V12h6v10' />
      </svg>
    ),
    link: '/'
  },
  posts: {
    name: '제가 쓴 글을 보세요!',
    icon: (
      <svg
        viewBox='0 0 24 24'
        width='32'
        height='32'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
        shapeRendering='geometricPrecision'
      >
        <path d='M2.707 7.454V5.62C2.707 4.725 3.469 4 4.409 4h4.843c.451 0 .884.17 1.204.474l.49.467c.126.12.296.186.473.186h8.399c.94 0 1.55.695 1.55 1.59v.737m-18.661 0h-.354a.344.344 0 00-.353.35l.508 11.587c.015.34.31.609.668.609h17.283c.358 0 .652-.269.667-.61L22 7.805a.344.344 0 00-.353-.35h-.278m-18.662 0h18.662' />
      </svg>
    ),
    link: '/posts'
  }
  // tags: {
  //   name: '태그 단위로 글을 보세요!',
  //   icon: (
  //     <svg
  //       viewBox='0 0 24 24'
  //       width='32'
  //       height='32'
  //       stroke='currentColor'
  //       strokeWidth='1.5'
  //       strokeLinecap='round'
  //       strokeLinejoin='round'
  //       fill='none'
  //       shapeRendering='geometricPrecision'
  //     >
  //       <path d='M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z' />
  //       <path d='M7 7h.01' />
  //     </svg>
  //   ),
  //   link: '/tags'
  // }
}

export const NavFooter: NavFooterType = {
  github: {
    name: 'Github',
    icon: (
      <svg
        viewBox='0 0 24 24'
        width='32'
        height='32'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
        shapeRendering='geometricPrecision'
      >
        <path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22' />
      </svg>
    ),
    link: 'https://github.com/Kyojin-Hwang'
  },
  twitter: {
    name: '',
    icon: (
      <svg
        viewBox='0 0 24 24'
        width='32'
        height='32'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
        shapeRendering='geometricPrecision'
      >
        <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' />
      </svg>
    ),
    link: ''
  },
  secondary: {
    name: 'velog',
    icon: (
      <svg width='192' height='192' viewBox='0 0 192 192' fill='currentColor'>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M24 0H168C181.255 0 192 10.7451 192 24V168C192 181.255 181.255 192 168 192H24C10.7451 192 0 181.255 0 168V24C0 10.7451 10.7451 0 24 0ZM49 57.9199V65.48H67L80.6799 142.52L98.5 141.26C116.02 119.06 127.84 102.44 133.96 91.3999C140.2 80.24 143.32 70.9399 143.32 63.5C143.32 59.0601 142 55.7 139.36 53.4199C136.84 51.1399 133.66 50 129.82 50C122.62 50 116.62 53.0601 111.82 59.1799C116.5 62.3 119.68 64.8799 121.36 66.9199C123.16 68.8401 124.06 71.4199 124.06 74.6599C124.06 80.0601 122.44 86.1799 119.2 93.02C116.08 99.8601 112.66 105.92 108.94 111.2C106.54 114.56 103.48 118.7 99.76 123.62L88.0601 57.2C87.1001 52.3999 84.1001 50 79.0601 50C76.78 50 72.3999 50.96 65.9199 52.8799C59.4399 54.6799 53.8 56.3601 49 57.9199Z'
          fill='currentColor'
        ></path>
      </svg>
    ),
    link: 'https://velog.io/@owen1127/posts'
  }
}
