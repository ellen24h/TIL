# Overview of WebUI Basic - 1st week

## 목표
- Web, WebUI를 왜 배우는가, 배우고 나면 무엇을 할 수 있는가?
- 어떻게 공부하는가, 무엇을 꼭 해야하는가?
- 브라우저는 어떻게 동작하는가?

## 우리가 경험하고 있는 Web
- 우리는 다양한 기기에 포함되어 있는 `Browser`를 통해 쉽게 웹을 경험하고 있다.

## Web의 동작
- 가야 할 주소가 있어야 하고 : `host name`
- 구체적인 요청 사항이 있을 수 있고 : `path`, `query string`
- 약속된 방식으로 요청해야 한다 : `scheme`
- `client` --request--> `server` 
- `client` <--response-- `server`

## Web의 흐름과 필요기술들 : 내가 보낸 요청이 어떻게 처리되는가?
- client browser - web server - DB
1. `특정 URI`로 서버에 접근하여 `resource`를 `요청`한다.
	- HTTP 프로토콜 사용하여 웹자원 요청
2. `server`에서는 필요한 정보가 있는지 서버의 `저장소`를 통해 확인한다.
	- DB에 정보 보관되고 있음
3. `저장소`에서는 추출한 정보를 `server`가 받아서 `client`에게 보내준다.
	- web 표준에 맞는 response
4. `client`는 `server`가 보내준 정보를 받는다.
	- HTTP 통신 과정에서 브라우저는 처리할 준비를 하고 있음
5. 사용자가 쉽게 알아볼 수 있도록 `정해진 UI의 형태`에 맞게 정보를 보여준다.


## Web UI의 요소
- Web Design : 직관적, 감성 호소
- HTML : 컨텐츠의 구조를 정의
- CSS : 스타일과 레이아웃의 완성
- JavaScript : 사용자와 반응하고 서버와 소통 

## 이상적인 UI개발자
- UI 구성요소간의 관계 잘 이해
- 내가 만들고 싶은 UI를 만들 수 있다

## 브라우저의 동작 원리
- HTML, CSS, JavaScript와 UI 파일 해석하여 동작
1. HTML 파일 -> 트리로 변환 -> 화면 구조 
2. CSS 분석 -> 트리로 변환 -> 화면 배치, 스타일
3. JS -> UI의 동작 추가로 조작
- img: http://calendar.perfplanet.com/2012/deciphering-the-critical-rendering-path/
