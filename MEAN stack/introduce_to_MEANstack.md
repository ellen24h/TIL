## MEAN stack

### MongoDB
가볍고 빠르며 규모 조절성이 뛰어난 NoSQL 데이터베이스이다. 
MongoDB는 사용자의 comment나 Blog 또는 그 외 항목들과 같은 데이터를 저장해야 하는 트래픽이 많은 웹사이트를 위한 백엔드 스토리지를 제공한다. 신속히 규모를 조절할 수 있고 쉽게 구현할 수 있기 때문이다.

__MongoDB가 node.js스택에 적합한 이유__
- 문서지향 : MongoDB는 문서 지향적이기 때문에, data는 server 측과 clienct 측, 양쪽 스트립트에서 다루는 것과 굉장히 유사한 형태로 DB에 저장된다. 그렇게 때문에 data를 record에서 object로 또는 object에서 record로 바꿀 필요가 없다.
- 고성능 : MongoDB는 가장 성능이 뛰어난 DB중 하나다. 특히 최근 더욱 더 많은 사람이 웹사이트를 이용함에 따라, 많은 트래픽을 지원할 수 있는 Backend가 굉장히 중요해졌따.
- 고가용성 : MongoDB의 복제 모델은 고성능을 유지하면서도 높은 규모 조절성을 유지할 수 있게 한다.
- 뛰어난 규모조절성 : MongoDB구조는 여러 서버에 데이터를 분산시킴으로써 수평적으로 규모를 조절하기가 용이하다.
- SQL 주입금지 : MongoDB는 SQL 주입을 허용하지 않는다. SQL 문자열을 사용해 객체가 저장되는 게 아니라, 객체형식으로 저장되기 때문이다.

### AngularJS
AngularJS는 google이 개발한 client 측 framework이다. 압축된 jquery library와 마찬가지로 javascript로 작성된 framework이다. MVC framework를 사용해서 잘 설계된 좋은 구조의 Web page와 application을 구현할 수 있는 framework를 제공하고자 하는 것이 AngularJS의 기원이다.

AngularJS는 browser의 사용자 입력을 처리하는 기능, Client 측 data를 조작하는 기능, 그리고 브라우저 view에 요소를 출력하는 방식을 제어하는 기능들을 제공한다. 

__Angular JS가 제공하는 몇 가지 장점들__
- 결합성 : 강력한 범위 scope 구조를 활용해 Data를 HTML 요소로 완벽하게 결합할 수 있다.
- 확장성 : AngularJS architecture는 사용자 정의의 구현을 제공할 수 있게 언어의 거의 모든 것을 쉽게 확장할 수 있게 한다.
- 명료성 : 깔끔하고 논리적인 코드를 작성할 수 있다.
- 재사용성 : AngularJS의 확장성과 명료성을 조합하면 재사용할 수 있는 코드를 쉽게 작성할 수 있다. 사실, 때때로 해당 언어는 코드를 재사용 해 사용자 맞춤형 서비스를 생성하게 한다.
- 지원성 : Google이 이 프로젝트에 투자를 많이 하고 있으므로, 이미 실패한 기존 초기 framework보다 유리하다.
- 호환성 : AngularJS는 javascript 언어를 바탕으로 하고 있으며, Jquery와 밀접한 관계까 있다. 그러므로 개발 환경에 AngularJS를 통합하고, AngularJS framework 구조 내의 기존 코드 일부를 재사용하기가 쉽다.

### Node.js-to-AngularJS 스택 소개

HTTP Header들 : HTTP는 webpage의 동작을 정의하기 위해 browser가 사용할 수 있는 여러 개의 header들과 client 측 script를 정의한다. 예를 들면, cookie들은 HTTP header에 저장된다. 또한 HTTP header는 요청 내부의 Data 종류 뿐 아니라, browser로 되돌아 올 것이라고 예상되는 Data의 종류들도 정의한다.

### Node.js 입문

npm 명령 행 옵션(패키지 명이 필요한 경우 express를 예시로 사용) search // 저장소내의 모듈 패키지 검색 
ex) 
	npm search express

install // 저장소 내 package.json 파일을 사용하거나 로컬 위치에서 패키지 설치 
ex) 
	npm install
	npm install express 
	npm install express@0.1.1 
	npm install ../toModule.tgz

install -g // 전역적으로 접근 가능한 위치에 패키지 설치 
ex) 
	npm install express -g

remove // 모듈 제거 
ex) 
	npm remove express

pack // package.json 파일에 정의된 모듈을 .tgz 파일로 패키징 
ex) 
	npm pack

view // 모듈 상세 표시 
ex) 
	npm view express

publish // package.json에 정의된 모듈을 레지스트리에 배포 
ex) 
	npm publish

unpublish // 배포된 모듈 배포 취소 
ex) 
	npm unpublish myModule

owner // 저장소 내 패키기 사용자 정보를 추가하거나 삭제, 목록 표시 
ex) 
	npm add bdayley myModule 
	npm rm ddayley myModule 
	npm ls myModule

require() 함수는 설치된 모듈의 이름이나 .js 파일이 위치한 경로를 전달인자로 갖는다.
ex)
	require("censorify") require("./lib/utils.js")

.js 파일 확장자는 선택적인 사항으로 생략할 수 있다.

Reference : https://github.com/zhenos/originalWaveWeb/wiki/Node.js,-MongoDB%EC%99%80-AngularJS%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%9B%B9-%EA%B0%9C%EB%B0%9C

