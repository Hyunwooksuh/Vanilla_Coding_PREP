/*
 *
 * 🛠이 곳은 유틸리티 함수들이 모여사는 곳입니다.
 * 관심있으시면 구경해보시되, 지금 크게 중요한 부분은 아닙니다.
 *
 */

// 고유한 ID를 생성해주는 함수입니다.
export function guidGenerator() {
  var S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}

// options 객체의 속성들을 target 객체의 속성으로 확장해주는 함수입니다.
export function extend(target, options) {
  for (const prop in options) {
    target[prop] = options[prop];
  }
}
