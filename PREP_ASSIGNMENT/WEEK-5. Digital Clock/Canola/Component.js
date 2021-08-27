/*
 *
 * ⭐️Canola의 핵심인 컴포넌트 공장입니다.
 *
 * 코드 내용이 많겠지만, 당황하지 마세요. 모두 다 이해해야 하는 것은 절대 아닙니다.
 *
 * 우선 이름부터 한번 다시 생각해볼까요?
 *
 * componentFactory.. Factory... 공장?
 * 왜 Factory라는 단어가 post-fix로 붙어있을까요?
 *
 * 자바스크립트에서 Factory란,
 *
 * > In JavaScript, any function can return a new object.
 * > When it’s not a constructor function or class, it’s called a factory function.
 * (출처: https://medium.com/javascript-scene/javascript-factory-functions-vs-constructor-functions-vs-classes-2f22ceddf33e)
 *
 * Factory에 대해 간단한 소개를 보셨다면, 이제 아래로 이동해보실까요?
 *
 */
import CanolaError from "./CanolaError";
import { guidGenerator, extend } from "./utils";

// 지금은 크게 개의치 않아도 될 함수입니다.
function createNode(html) {
  const tempNode = document.createElement("template");
  tempNode.innerHTML = html;

  return tempNode.content.firstChild;
}

/*
 *
 * ✨바로 그 컴포넌트 공장입니다.
 *
 * 헛, 아직 컴포넌트가 무엇인지 모르시나요..?
 * (아직 컴포넌트에 대해 구글링 해보지 않았다면, 호기심이 조금 부족하신것 같군요..)
 *
 * 프론트엔드에서 말하는 컴포넌트란,
 * 재사용이 용이하도록 만들어진 UI의 일부를 일컫습니다.
 *
 * 예를 들어, 우리가 A라는 웹 어플리케이션을 작업할때 여러 곳에서 반복적으로 쓰이는 버튼이 있습니다.
 * 이 버튼들은 모두 마우스를 올렸을때 같은 동작을 하고, 클릭되었을때 또한 같은 동작을 합니다.
 * 버튼을 만들어 사용할때마다 매번 같은 로직을 추가하기보다는,,
 * 버튼의 공통된 로직을 포함한 버튼 컴포넌트를 만들어 놓고, 필요할때마다 쉽게 재사용하도록 할 수 있습니다.
 *
 * 아래는 컴포넌트가 생성자 함수 방식으로 만들어져 있지만,
 * 함수로 만드는지 객체로 만드는지 등에 대한 규칙은 없습니다.
 * 상황에 따라 합리적인 설계 방식을 선택하는 것 뿐입니다.
 *
 */

// componentFactory 함수는 Component라는 생성자 함수를 반환합니다.
export default function componentFactory(generateTemplate) {
  function Component(options) {
        if (typeof options.root !== "string") {
          throw new CanolaError(
            "'root' 옵션은 필수이며, 해당 컴포넌트가 추가될 부모 요소의 CSS 선택자를 나타내는 문자열이어야 합니다."
          );
        }

        extend(this, options); // Clock options -> myClock options

        delete this.root;

        // underscore means this property is private use only.
        this._id = guidGenerator();
        this.$parent = document.querySelector(options.root);
        this.$el = null;

        if (this.$parent === null) {
          throw new CanolaError(`'${options.root}' 존재하지 않는 엘레먼트입니다.`);
        }
  }
  //digitalClock
  Component.prototype.clickEvent = function() {
    const eventKeys = Object.keys(generateTemplate.events);
    const eventFunctions = Object.values(generateTemplate.events);
    const $title = this.$el.querySelector(eventKeys[0]);
    const $time = this.$el.querySelector(eventKeys[1]);
    $title.addEventListener("click", eventFunctions[0]);
    $time.addEventListener("click", eventFunctions[1]);
  }
  

  Component.prototype.render = function () {    
    const html = generateTemplate.template.call(this).trim(); 
    const node = createNode(html);

    if (!this.$el) {
      this.$el = node;
      this.$el.dataset.id = this._id;
      this.$parent.appendChild(this.$el);
    } else {
      this.$el.innerHTML = node.innerHTML;
    }

    return this;
  };

  Component.prototype.destroy = function () {
    if (!this.$el) {
      throw new CanolaError(`존재하지 않는 엘레먼트입니다. ID: '${this._id}'`);
    }

    this.$el.remove();
  };

  return Component;
}
