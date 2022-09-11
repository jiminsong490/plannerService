# README

1. 목표 = 개인 플래너 기능 + 그룹원의 일정을 동시에 볼 수 있는 일정 관리 서비스
2. 사용한 기술
- back : express, passport, sequelize | session + cookie  
- front : react | styeld-components
3. 프로젝트 기간 = 22.08.27 ~ xx

4. 기여도 = 100%

5. 진행하면서 느낀 점
- 프론트와 백을 분리하게 되면서 이전에는 간단했던 작업들이 복잡해짐
- ex) passport의 자격 확인 -> 백은 cors, 프론트는 fetch의 credentials 옵션을 include로 설정해주고 cors의 origin 옵션에 프론트 주소를 설정
- google 계정으로 로그인 할때 passport-google을 사용하지 않고 프론트에서 넘겨주는 code를 사용하여 token을 발급받아 로그인하는 방법을 알게됨, 구현은 실패
 
