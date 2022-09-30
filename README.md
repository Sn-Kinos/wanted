# Project Wanted

## 사전 환경 구성 요소

- `.db.env`  
  `docker-compose` 를 통한 DB 구동에 사용되는 환경변수 정의
- `.env`  
  `Nest.js` 서버 구동에 필요한 환경변수 정의 (DB 연결 정보 등)

## 실행방법

### 사전 작업

```zsh
yarn
yarn schema:update
```

> `Zero-install` 기반으로 되어있으나 실행 환경 별 오작동 가능성을 차단하기 위함

### `Docker`

실행

```zsh
docker-compose up -d
```

종료

```zsh
docker-compose down -v
```

### `Node.js`

실행

```zsh
yarn build
yarn start
```

종료

각 OS 별 프로그램 종료 프로세스 수행하여 종료

## API Routes

별도 첨부된 Postman 파일에서 확인 가능

## 회고

### 아쉬운 점

- 테스트 코드를 도입하지 못함
- 리포지토리 패턴을 적용하지 못함
- 시간을 쪼개서 개발하지 못해 마지막 날 월차 사용
- Service, Controller 등 계층구조를 지켜서 개발하지 못함
