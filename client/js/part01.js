const data = [
  {
    id: 1,
    src: 'visual1.jpg',
    alt: '모던한 테이블과 화분의 조화를 표현한 공간',
  },
  {
    id: 2,
    src: 'visual2.jpg',
    alt: '강렬한 의자의 색상과 따뜻한 느낌의 공간',
  },
  {
    id: 3,
    src: 'visual3.jpg',
    alt: '호텔 라운지 느낌의 편안한 의자가 있는 공간',
  },
  {
    id: 4,
    src: 'visual4.jpg',
    alt: '물방을 모양의 독특한 디자인의 의자들을 나열한 공간',
  },
];

const navigation = getNode('.navigation');
const img = getNode('.visual img');

{
  // 1. navigation 클릭 이벤트 바인딩
  // 2. 태그 기본 동작 차단
  // 3. target 가져오기 -> 마우스가 처음 클릭하는 대상
  // 4. 선택한 대상의 is-active 클래스 추가하기
  // 5. 나머지 li 요소들에서 is-active 제거하기
  // 6. 선택한 대상의 data-index 가져오기
  // 7. visual 안에 있는 img 요소를 선택
  // 8. img.src 변경 -> 1.jpg
}

// GSAP
const split = new SplitText('h3', { type: 'chars' });

function handler(e) {
  e.preventDefault();

  // li를 수집
  const target = e.target.closest('li');
  const list = [...this.children];

  if (!target) return;

  const index = target.dataset.index;
  // const index = attr(target, 'data-index');

  list.forEach(li => li.classList.remove('is-active'));

  img.src = `./assets/part01/${data[index - 1].src}`;
  img.alt = data[index - 1].alt;
  /*attr(img,'src'`./assets/part01/${data[index - 1].src}`) // is~함수 없어서 지금은안됨*/
  // img.src = e.target.closest('a').href;

  gsap.from(split.chars, {
    opacity: 0,
    y: 30,
    stagger: 0.05,
    immediateRender: false,
    ease: 'back(2)',
  });

  target.classList.add('is-active');
}

// (navigation as HTMLElement). 이렇게 하면 타입스크립트 방법으로 자동완성됨 -> 기본은 자동완성이 안되는 이유는 타입을 추론하지 못해서
navigation.addEventListener('click', handler);