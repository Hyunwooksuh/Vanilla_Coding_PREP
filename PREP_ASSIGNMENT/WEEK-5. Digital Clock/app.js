/*
 *
 * 주어진 샘플 코드는 수정/삭제하지 마세요.
 *
 * [🥇첫 번째 퀘스트]
 *
 * 아래 샘플 코드와 함께 `./Canola/index.js` 부터 살펴보시고 첫 번째 퀘스트를 찾아주세요!
 *
 * [🥇두 번째 퀘스트]
 *
 * 아래에 주어진 `Clock`(대문자 이름!)을 재사용하여 시,분,초를 표기하는 Digital Clock을 구현하세요.
 * (매초마다 시간이 없데이트 되어야 합니다.)
 *
 */

"use strict";

// import 구문에 디렉토리명을 사용할 경우, 'index.js'를 가장 우선적으로 찾습니다.
// 즉, 현재는 `./Canola/index.js`를 가져오게 됩니다.
import CanolaUI from "./Canola";
import { getTimeStamp } from "./utils/times";

/*
 *
 * Clock 형태의 UI를 만들 수 있는 Component입니다.
 *
 * 사용 방법은 아래 샘플 코드를 참고하시고,
 * 자세한 구동 원리는 `./Canola/index.js`부터 참고하세요.
 *
 */
const Clock = CanolaUI.create({

  events: {
    ".clock h3" : function onTitleClick() {
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
        <p class="update-time">${this.time}</p>
      </div>
    `;
  },
});

/* Sample Start */
const initialTime = getTimeStamp();

const myClock = new Clock({
  root: "#root",
  title: "최초 실행 시간",
  backgroundColor: "#E0F7FA",
  time: initialTime,
});

myClock.render();
myClock.clickEvent();
/*  Sample End */

// const timer = setInterval(() => {
//   digitalClock.time = getTimeStamp();
//   digitalClock.render();
//   digitalClock.clickEvent();
// },1000);


const digitalClock = new Clock({
    root: "#root",
    title: "현재 시간",
    backgroundColor: "#E0F7FA",
    time: initialTime,
});

digitalClock.render();
digitalClock.clickEvent();
digitalClock.updateClock();


