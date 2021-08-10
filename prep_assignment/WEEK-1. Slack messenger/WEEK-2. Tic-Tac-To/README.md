![Tick Tack Toe](/ticktacktoe.png)

> 🚨과제를 시작하는 방법과 제출하는 방법은 프렙 가이드 페이지에서 찾을 수 있습니다. 잘 못찾으시면, 매니저 님께 문의해주세요!

# Tick Tack Toe Project

Tick Tack Toe 게임을 웹에서 구현하는 과제입니다.

▶︎ [Tick Tack Toe 게임 해보기](https://www.google.com/search?q=tic+tac+toe)

기초적인 Logic을 완성하는 능력과 DOM을 다루는 기술에 조금 더 익숙해지는 것을 목표로 삼으시면 좋을것 같습니다.

- 반드시 아래 Setup과 Development 부분을 읽어보세요.
- 과제를 시작하는 방법과 제출하는 방법은 프렙 가이드 페이지에서 찾을 수 있습니다.
- 상세 요구 사항은 아래 TODO 파트를 참고하세요.

## Setup (사전 설치)

Install dependencies

터미널에서 과제 디렉토리로 이동 후, 실행하세요. 이 명령어는 과제 설치 후 최초 1회만 실행하시면 됩니다.

```sh
npm install
```

## Development (작업 방법)

터미널에서 과제 디렉토리로 이동 후, 실행하세요. 과제를 실행하실때마다 실행하셔야 하는 명령어입니다. 과제 작업이 끝난 이후에는 Ctrl + C를 이용해서 꺼주세요.

```sh
npm start
# Visit http://localhost:1234 from your browser (Chrome)
```

- HTML 수정: `index.html`를 수정하세요.
- JS 수정: `/app/index.js`를 수정하세요.
- CSS 수정: `/styles/index.css`를 수정하세요.
- 이미지: `/images` 디렉토리를 이용하세요.

## 과제에서 자바스크립트로 이미지 작업하는 방법

아래 방법은 자바스크립트를 이용하는 상황에만 적용되며, HTML에서 이미지를 추가하는 것은 기존에 알고 계시는 것처럼 진행하시면 됩니다.

```js
// 이미지 경로에 따라 아래와 같은 구문 삽입
// `yourImageName` 부분은 사용하는 이미지의 이름을 지어서 넣어주세요.
import yourImageName from "../images/vc.png";

var $something = document.querySelector(".main-logo");

// 이렇게 이미지 요소의 `src` 속성을 추가할 수 있습니다.
$something.src = yourImageName;
```

## TODO

스타일이나 아래에 명시되지 않은 기능은 재량껏 구현해주시기 바랍니다. 애니메이션이나 시각적인 효과는 중요하지 않지만, 시간이 되면 시도해보세요.

- [ ] 게임을 시작할 수 있는 버튼이 있어야 합니다.
- [ ] 게임 시작 버튼을 누르면, 게임이 시작됩니다.
- [ ] 게임이 시작되면, 현재 플레이 해야할 순서인 플레이어가 화면에 표기됩니다. 예) X 차례
- [ ] 두 플레이어(X, O)가 게임이 종료될 때까지 번갈아 가며 게임을 진행합니다. (컴퓨터와 진행하는 게임이 아닌, 두 명의 사람이 번갈아 가며 진행하는 게임입니다. 사람 vs 사람)
- [ ] 게임이 종료된다면, 게임 승자가 화면에 표기되고 재시작 버튼이 보여야 합니다.
