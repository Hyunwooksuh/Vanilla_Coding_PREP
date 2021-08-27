/*
 *
 * 🌼Canola의 세계에 오신 것을 환영합니다.
 * 이 곳은 Canola의 Root Module으로서 Canola의 create 메소드를 노출시키고 있습니다.
 *
 * > Canola는 왜 이름이 Canola일까요?
 * Ken: 단지 예쁜 이름을 원했을 뿐입니다.. 이름 예쁘지 않나요?
 *
 * > 어느 곳을 먼저 보면 좋을까요?
 * Ken: 아래의 create 메소드를 살펴보세요.
 *
 */
import componentFactory from "./Component";
import CanolaError from "./CanolaError";


function validateOptions({ template }) {
  if (!template) {
    throw new CanolaError("'template'은 필수 옵션입니다.");
  }

  if (typeof template !== "function") {
    throw new CanolaError(
      "'template' 옵션은 해당 컴포넌트의 HTML 마크업을 문자열로 반환하는 함수여야 합니다."
    );
  }
}

const CanolaUI = {
  /*
   * 👉🏻 create 메소드입니다.
   * CanolaError에 대해서 살펴보신 후, componentFactory로 이동하세요.
   */
  create(options) {
    validateOptions(options);
    
    
    return componentFactory(options);
  },
};

export default CanolaUI;
