# 제조도 프론트엔드 코딩테스트

## 기술 스펙 (Tech Stacks)

## 구현 설명

### 패키지(라이브러리 등) 사용 근거

- **antd (Ant Design)**
    
    빠른 UI 생성을 위해 사용,
    
    Form의 name 속성 등을 사용하여 form의 데이터 송수신이 비교적 러닝커브가 낮음
    
- **react-query**
    
    query-key를 이용하여 간결한 API 통신코드 작성에 용이하다고 판단하여 사용
    
- **axios**
    
    기본 API 통신을 위해 적용
    
- **react-router-dom**
    
    SPA로 동작하는 웹페이지 생성을 위한 라우팅 기능을 이용하기 위해 사용
    
- **styled-components**
    
    CSS를 작성할때 전역으로 설정되는 것을 방지하고
    컴포넌트 별로 스타일을 적용하여 유지보수가 용이한 점
    
- **prettier**
    
    코드의 가독성을 보다 높이기 위해 사용

### 코딩 컨벤션 적용

- 폴더명은 모두 camelCase로 생성
- pages : 라우팅 처리가 되어있는 페이지 컴포넌트 폴더
- app내의 root폴더는 root.{name} / app.{name}
- 전역에서 사용할 모듈, CSS
// root.modules / root.styled
- app 의 공통 사용 폴더 입니다
// app.feature / app.layout / app.components
- 기능별로 폴더구조 분리
    - screen/Screen~.tsx : 하나의 기능에서 사용되는 화면 시작점
    - component/ : 하나의 기능에서 사용되는 비즈니스 로직이 담긴 컴포넌트
    - query/ : useQuery, useMutation 등 react-Query 모듈 함수
    - app.feature/{feature}/ ~ constant, store, module, hook 필요 시 추가

**네이밍 컨벤션**

- 컴포넌트명 : PascalCase 적용
- 모듈함수, 상수 : camelCase 적용
- CSS 클래스 : kebab-case 적용

### 회고

**배운 점**

- 

---

**고치고 싶은 점**

- 

---

**공부해야 한다고 생각하는 것**

- 