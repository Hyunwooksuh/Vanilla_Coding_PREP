> 🚨과제를 시작하는 방법과 제출하는 방법은 노션의 프렙 가이드 페이지에서 찾을 수 있습니다.

# Digital Clock

주어진 Canola UI라는 모듈을 이용하여 Digital Clock을 구현하는 과제입니다.

> Canola UI는 여러분의 과제를 위해 간단하게 만들어 놓은 UI 라이브러리입니다.

▶︎ [Digital Clock](http://time-time.net/timer/digital-clock.php)

Digital Clock을 구현하는 것만큼이나 Canola UI의 내부 코드를 이해하도록 노력해보시는 것도 중요합니다.

- 반드시 아래 Setup과 Development 부분을 읽어보세요.
- 과제를 시작하는 방법과 제출하는 방법은 노션의 프렙 가이드 페이지에서 찾을 수 있습니다.
- 상세 요구 사항은 아래 TODO 파트를 참고하세요.

## Setup (사전 설치)

Install dependencies

```sh
$ npm install
```

## Development (작업 방법)

```sh
$ npm start
# Visit http://localhost:1234 from your browser (Chrome)
```

## TODO

### 주의 사항

- 기존 코드는 함부로 수정/삭제하지 마세요. 더 큰 문제를 발생시킬 수 있습니다.

### 요구 사항 1

- [ ] `app.js`부터 읽어보신 후, CanolaUI의 버그를 고쳐주세요.

### 요구 사항 2

- [ ] `app.js`에 주어진 `Clock` 컴포넌트를 재사용하여 `app.js` 하단에 Digital Clock을 추가해주세요.
- [ ] Digital Clock은 현재 시, 분, 초를 표기해주어야 합니다.
- [ ] Digital Clock의 시간은 매초마다 새롭게 갱신되어야 합니다.

### Advanced

- [ ] 아래와 같이 CanolaUI 컴포넌트의 "click" 이벤트 처리가 가능하도록 구현해주세요.

```js
const Clock = CanolaUI.create({
  events: {
    ".clock h3": function onTitleClick() {
      // ".clock h3" 선택자에 해당하는 요소를 클릭했을 경우, 실행됩니다.
      console.log("Click H3!");
    },
    ".clock p": function onTimeClick() {
      // ".clock p" 선택자에 해당하는 요소를 클릭했을 경우, 실행됩니다.
      console.log("Click P!");
    },
  },
  template: function () {
    return `
      <div class="clock" style="background-color: ${this.backgroundColor};">
        <h3>${this.title}</h3>
        <p>${this.time}</p>
      </div>
    `;
  },
});
```
