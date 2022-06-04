//data.js
const qnaList = [
  {
    q: ' Q. 약속이 없는 주말에 나는',
    a: [
      { answer: 'a. 침대랑 하루 종일 물아일체가 된다', type: 'E' },
      { answer: 'b. 단톡에 연락해서 친구들과 약속을 잡는다', type: 'I' }
    ]
  },
  {
    q: 'Q. 친구의 소개로 소개팅에 나온 나는',
    a: [
      { answer: 'a. 먼저 말 걸면서 분위기를 띄운다', type: 'E' },
      { answer: 'b. 말을 걸어올 때까지 기다리고 본다', type: 'I' }
    ]
  },
  {
    q: ' Q. 데이트 중 길에서 연인의 친구를 만난다면 나는',
    a: [
      { answer: 'a. 자연스럽게 웃으며 대한다', type: 'E' },
      { answer: 'b. 무생물이 되어 조용히 있는다', type: 'I' }
    ]
  },
  {
    q: 'Q. 친구와 노는 중 맛있어 보이는 밥집을 발견한 나는',
    a: [
      { answer: 'a. 간판에서 맛집의 기운이 느껴진다 맛집 각이야', type: 'N' },
      { answer: 'b. 유명하고 리뷰도 많으니까 맛은 보장되어 있겠군', type: 'S' },
    ]
  },
  {
    q: 'Q. 오늘 본 영화를 궁금해하는 친구에게 나는',
    a: [
      { answer: 'a. 주인공이 좀비 바이러스가 퍼져서 치료하기 위한 영화야', type: 'N' },
      { answer: 'b. 좀비랑 싸우는데 주인공이 완전 멋져 보는 내내 소름 돋았어', type: 'S'},
    ]
  },

  {
    q: 'Q. 생일인 친구에게 줄 선물을 고르게 된 나는',
    a: [
      { answer: 'a. 실용성은 없어도 예쁘고 기억에 남을 선물', type: 'N' },
      { answer: 'b. 친구에게 요즘 가장 필요할 것 같은 선물', type: 'S' },
    ]
  },
  {
    q: 'Q. 사소한 일로 다퉜을 때 나는',
    a: [
      { answer: 'a. ㅇㅇ점은 꼭 고쳐줬으면 좋겠어 이렇게 하면 되잖아', type: 'T' },
      { answer: 'b. 나!! 진짜!! 너무!!! 화났어!!!!!', type: 'F' },
    ]
  },
  {
    q: ' Q. 친구가 우울하다고 말했을 때 나는',
    a: [
      { answer: 'a. 왜 우울해? 뭐 때문에 우울한 거야?', type: 'T' },
      { answer: 'b. 5초 만에 감정이입 완료. 같이 글썽거린다', type: 'F' },
    ]
  },
  {
    q: 'Q. 힘들게 이벤트를 준비한 나를 신나게 할 연인의 칭찬은?',
    a: [
      { answer: 'a. 고마워 요즘 바쁠 텐데 언제 이런 걸 생각했어?', type: 'T' },
      { answer: 'b. 사랑해 최고야 나 완전 감동했어', type: 'F' },
    ]
  },
  {
    q: 'Q. 썸 중에 연인이 집에 놀러 온다고 했을 때 나는',
    a: [
      { answer: 'a. 보이는 곳만 일단 급하게 치워둔다', type: 'P' },
      { answer: 'b. 쓰레기 버리기부터 화장실 청소까지 한다', type: 'J' },
    ]
  },
  {
    q: 'Q. 데이트 룩을 고를 때 나는',
    a: [
      { answer: 'a. 나가기 직전 마음에 드는 옷을 입는다', type: 'P' },
      { answer: 'b. 전날부터 머리부터 발끝까지 세팅해 준다', type: 'J' },
    ]
  },
  {
    q: 'Q. 친구와 해외여행 계획을 짜게 된 나는',
    a: [
      { answer: 'a. 비행기 표만 끊어두고 계획의 80% 끝난다고 생각한다', type: 'P' },
      { answer: 'b. 할 거면 제대로! 일별로 세부 일정을 정리한다', type: 'J' },
    ]
  }
]

const infoList = [
  {
    name: 'ENTP',
    desc: '넌 엔팁이야 맞아?'
  },
  {
    name: 'ENTJ',
    desc: '넌 엔티제야 맞야?'
  },
  {
    name: 'ENFP',
    desc: '넌 엔프피야 맞아?'
  },
  {
    name: 'ENFJ',
    desc: '넌 엔프제야 맞아?'
  },
  {
    name: 'ESTP',
    desc: '넌 엣팁이야 맞아?'
  },
  {
    name: 'ESTJ',
    desc: '넌 엣티제야 맞아?'
  },
  {
    name: 'ESFP',
    desc: '넌 엣프피야 맞아?'
  },
  {
    name: 'ESFJ',
    desc: '넌 엣프제야 맞아?'
  },
  {
    name: 'INTP',
    desc: '넌 인팁이야 맞아?'
  },
  {
    name: 'INTJ',
    desc: '넌 인티제야 맞아?'
  },
  {
    name: 'INFP',
    desc: '넌 인프피야 맞아?'
  },
  {
    name: 'INFJ',
    desc: '넌 인프제야 맞아?'
  },
  {
    name: 'ISTP',
    desc: '넌 잇팁이야 맞지?'
  },
  {
    name: 'ISTJ',
    desc: '넌 잇티제야 맞지?'
  },
  {
    name: 'ISFP',
    desc: '넌 잇프피야 맞지?'
  },
  {
    name: 'ISFJ',
    desc: '넌 잇프제야 맞지?'
  },
]
