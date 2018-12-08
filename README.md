This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### 1. react project 시작

* npm / Node.js / yarn 설치

* `yarn create react-app my-app` 실행
	* https://github.com/facebook/create-react-app#quick-overview
	* `my-app` 이라는 디렉토리가 생성되고 git repository가 설정됨

### 2. local 에서 개발서버를 실행

* `yarn start`


### 3. production code를 빌드

* `yarn run build`
* `build` directory에 html, css, js 가 묶여서 빌드
* 이후에 package.json에 홈페이지와 기타 설정은 yarn manager의 명령을 따라서하자.
	* deploy용 브랜치가 생성되서 remote 에 올가가게 된다.
	* git pages 기능으로 디플로이.

