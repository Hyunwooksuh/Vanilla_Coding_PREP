/*
 *
 * ⛔️CanolaError에 입장하셨군요.
 *
 * Canola에서는 오류가 발생할 경우 Canola만의 고유한 에러를 발생시킵니다.
 *
 * 여러 가지 이유가 있지만,
 *
 * 우선적으로 Canola를 사용하는 사용자(개발자)의 경험을 위해서입니다.
 * 어떤 이유로 어디에서 발생한 오류인지 더욱 빠르게 알 수 있도록 하기 위함입니다.
 * "이것은 Canola에서 발생한 오류입니다"라고 빠르게 알려주는 것이죠.
 *
 * 둘째로는 앞으로 Canola가 성장하며 많은 로직들을 품게 될텐데,
 * Canola 만의 확장성을 확보해놓기 위함입니다.
 *
 * CanolaError 클래스는 자바스크립트의 기본적으로 주어지는 Error 클래스와 밀접한 관계가 있습니다.
 * 조금 더 직접적으로 말씀드리자면, CanolaError는 Error의 자식같은 존재입니다.
 * (똑똑한 말로 하자면, '상속'이라고 하죠?)
 *
 * CanolaError는 결국 근본적으로 Error입니다.
 * 기본적인 Error의 기능과 함께 우리가 Canola에서 원하는 오류 관련 기능들을 포함할 수 있는 조금 더 확장된 Error입니다.
 * 그렇기에 기본 Error 클래스의 기능들을 상속받도록 설계한 것입니다.
 *
 * 아래 코드 내용은 여러분께서 알고 있는 Prototype에 대한 내용으로는 조금 부족할 수 있습니다.
 * 자바스크립트의 "상속"이 어떻게 이루어지는지 꼼꼼하게 조사해보시고 이해해보도록 하세요.
 *
 * [자바스크립트 상속 MDN]
 * https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Inheritance
 *
 * (Ken: 상속이라는 단어.. 저는 사실 자바스크립트의 프로토타입 기반 설계에 적합하지 않은 단어라고 생각합니다.)
 *
 */
function CanolaError(message) {
  Error.call(this, message);
  this.message = message;
}

CanolaError.prototype = Object.create(Error.prototype);
CanolaError.prototype.constructor = CanolaError;

export default CanolaError;
