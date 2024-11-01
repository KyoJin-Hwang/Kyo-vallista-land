const eventEl = document.querySelector('.event')
const childEl = document.querySelector('.child')
const addEl = document.querySelector('.add')
const delEl = document.querySelector('.del')

// 이벤트 핸들러 함수를 별도로 정의합니다.
const handleEventClick = () => {
  childEl.insertAdjacentHTML('afterend', '<div>Event 시작</div>')
}

// addEl 클릭 시 eventFuc을 추가
addEl.addEventListener('click', () => {
  eventEl.addEventListener('click', handleEventClick)
})

// delEl 클릭 시 이벤트 리스너 제거
delEl.addEventListener('click', () => {
  eventEl.removeEventListener('click', handleEventClick)
})
