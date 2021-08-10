let CHAT_HISTORY = [
  {
    type: "image",
    url: "https://i.ibb.co/cys3cBZ/Image-from-i-OS-10.jpg",
    username: "김찬중",
    color: "#b17fc1",
    createdAt: "2021-07-10T11:48:10.000Z"
  },
  {
    type: "text",
    content: "부적은 잘 있습니다.",
    username: "김찬중",
    color: "#b17fc1",
    createdAt: "2021-07-10T11:48:13.000Z"
  },
  {
    type: "text",
    content: "진품명품 나가요?",
    username: "김도희",
    color: "#0b218b",
    createdAt: "2021-07-10T11:48:20.000Z"
  },
  {
    type: "text",
    content: "네네 도희님이 사시나요?",
    username: "김찬중",
    color: "#b17fc1",
    createdAt: "2021-07-10T11:49:33.000Z"
  },
  {
    type: "text",
    content: "네?",
    username: "김도희",
    color: "#0b218b",
    createdAt: "2021-07-10T11:50:32.000Z"
  },
  {
    type: "text",
    content: "도희 사시 아니예요",
    username: "Soin Na",
    color: "#d1c17b",
    createdAt: "2021-07-10T11:50:28.000Z"
  },
  {
    type: "text",
    content: "저희 할머니네 도자기랑 교환하실래요?",
    username: "김도희",
    color: "#0b218b",
    createdAt: "2021-07-10T11:51:43.000Z"
  },
  {
    type: "image",
    url: "https://i.ibb.co/KsrBkYw/Image-from-i-OS-11.jpg",
    username: "김도희",
    color: "#0b218b",
    createdAt: "2021-07-10T11:51:55.000Z"
  },
  {
    type: "text",
    content: "할머니가 진품명품에 내달라고 부탁했는데",
    username: "김도희",
    color: "#0b218b",
    createdAt: "2021-07-10T11:51:57.000Z"
  },
  {
    type: "text",
    content: "오오 진짜 이쁘네요 도자기",
    username: "김찬중",
    color: "#b17fc1",
    createdAt: "2021-07-10T11:52:21.000Z"
  },
  {
    type: "text",
    content: "그럼 안녕히계십시오",
    username: "김찬중",
    color: "#b17fc1",
    createdAt: "2021-07-10T11:52:22.000Z"
  },
  {
    type: "text",
    content: "원장님은 아이스크림 심부름중,,, 터벅터벅,,",
    username: "최한나",
    color: "#dc2edb",
    createdAt: "2021-07-10T11:58:09.000Z"
  },
  {
    type: "image",
    url: "https://i.ibb.co/Mnz4ysz/i-OS.jpg",
    username: "최한나",
    color: "#dc2edb",
    createdAt: "2021-07-10T11:58:12.000Z"
  },
  {
    type: "text",
    content: "여기서 보셔도 돼요 https://i.ibb.co/Mnz4ysz/i-OS.jpg",
    username: "최한나",
    color: "#dc2edb",
    createdAt: "2021-07-10T11:59:51.000Z"
  },
];

function createTextMessage(data) {
  return `
    <div class="meta">
      <span class="time">${prettifyISOString(data.createdAt)}</span>
      <span
        class="username"
        style="color: ${data.color};"
      >${data.username}</span>
    </div>
    <p class="content">${convertToLink(data.content)}</p>
  `;
}

function createImageMessage(data) {
  return `
    <div class="meta">
      <span class="time">${prettifyISOString(data.createdAt)}</span>
      <span
        class="username"
        style="color: ${data.color};"
      >${data.username}</span>
    </div>
    <image class="content" src="${data.url}">
  `;
}
//1-1번 문제
function convertToLink(content) {
  // TODO: 인자로 전달되는 텍스트 내용 중에 http:// 혹은 https:// 로 시작하는 텍스트는 a 태그를 이용하여 링크로 변환해주세요.
  // 정규표현식을 사용하지 마세요.
  // 예시) content: "여기서 보셔도 돼요 https://i.ibb.co/Mnz4ysz/i-OS.jpg
  var t = 0;
  var p; 
  var q;
  var result = '';
  while(1) {
    p = content.indexOf('http', t);
    //1. 링크가 없다면 content 그대로 return 함
    if (p == -1) {
         result = content;
         break;
    }
    // t ~ p-1까지는 text
    var text = content.substring(t, p);
    q = content.indexOf(' ', p + 1);
    //**2. 하이퍼링크로 끝나는 경우(예제에 해당하는 경우임) **
    if (q == -1) {
      var lastLink = content.substring(p);
      var lastHyperLink =  `<a href=${lastLink} target="_blank">${lastLink}</a>`;
      result = text + lastHyperLink;
      break;
    }
    // p ~ q까지는 link
    var link = content.substring(p, q);
    var hyperLink = `<a href=${link} target="_blank">${link}</a>`;
    var fraction = text + hyperLink;
    //3. 가나다라 http://www.naver.com 마바사 http://www.daum.net 타파하 같은 경우
    result += fraction;
    t = q;
  }
  return result;
}
//1-2번 문제 
function prettifyISOString(iso) {
  // TODO: 인자로 전달되는 ISO String을 "시간:분" 형태로 변환하여 반환하세요. 예) "20:13"
  // 정규표현식을 사용하지 마세요.
  // 예시) createdAt: "2021-07-10T11:58:09.000Z"
  var dotIndex = iso.indexOf(':');
  var hour = iso.substring(dotIndex-2, dotIndex);
  var minute = iso.substring(dotIndex+1, dotIndex+3);
  var result = hour + ':' + minute;
  return result;
}

const messageListElement = document.querySelector(".message-list");

for (let i = 0; i < CHAT_HISTORY.length; i++) {
  const chat = CHAT_HISTORY[i];

  const messageElement = document.createElement("li");

  if (chat.type === "text") {
    messageElement.innerHTML = createTextMessage(chat);
  } else if (chat.type === "image") {
    messageElement.innerHTML = createImageMessage(chat);
  }

  messageElement.classList.add("message");
  messageListElement.appendChild(messageElement);
}
//2번 문제 : 새로운 메세지 추가하기 
function getMessage(event) {
  event.preventDefault();
  var inputMessage = newMessage.value;
  addToHistory(inputMessage);
  newMessage.value = "";
}

function addToHistory(message) {
    var chatObj = {
      type: "text",
      content: message,
      username: "서현욱",
      color: "#da1ebf",
      createdAt: String(new Date())
    };
    CHAT_HISTORY.push(chatObj);

    const messageElement = document.createElement("li");
    messageElement.innerHTML = createTextMessage(chatObj);
    messageElement.classList.add("message");
    messageListElement.appendChild(messageElement);
}

var newMessage = document.querySelector("#message-input");
var sendingBtn = document.querySelector(".message-button");
sendingBtn.addEventListener('click', getMessage);