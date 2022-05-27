# YJU WDB2A반 1조 미니 프로젝트 :: Tetris
#### 👋영진전문대학교 2학년 WD-A반 1조(hongzo) @ 첫번째 팀 프로젝트  
**테트리스 구현**을 목표로 만들어진 repository입니다. 더불어 **git/github 활용법에 대한 스터디**를 겸하고 있습니다.

<br>

## 조원
<table>
  <tr> 
    <td align="center"><a href=https://github.com/Hannah0su><img src="https://user-images.githubusercontent.com/102000749/165738552-60e1eac0-3c50-4568-ae38-767c44b3b018.jpg" width="100px;" alt=""/><br /><sub><b>Ha Youngsu</b></sub></a><br /><a href="https://hannah0su.github.io/" title="Code">🏠</a>
    </td>
    <td align="center"><a href=https://github.com/ooyniz><img src="https://user-images.githubusercontent.com/83005178/166416247-3908c2e9-ed1c-4e44-aa6a-68f3db0f45db.png" width="100px;" alt=""/><br /><sub><b>Kwak Yujin</b></sub></a><br />🏠
    </td>
    <td align="center"><a href=https://github.com/baegjhoon><img src="https://user-images.githubusercontent.com/102000749/165739357-9ea66cf1-8a6e-4b9a-bf77-0a8c9e1a465a.png" width="100px;" alt=""/><br /><sub><b>Baeg Junghun</b></sub></a><br />🏠
    </td>
    <td align="center"><a href=https://github.com/sila0319><img src="https://user-images.githubusercontent.com/102000749/165739259-24741b3b-92d2-49df-8496-7dab8f58bd97.png" width="100px;" alt=""/><br /><sub><b>Ryu wonkyu</b></sub></a><br />🏠
    </td>
  </tr>
</table>

<br>

---

# Github 관리 전략

## :pushpin: Commit Convention
[Type] | 설명 | 예시
:--:|:--:|:--:
Add | 기능 추가 :heavy_plus_sign: | "[Add] 난이도 기능 추가"
Fix | 버그 수정 :bug: | "[Fix] 블록이 회전하지 않던 문제 해결"
Chore | 간단한 코드 ・ 오타 수정 :zap: | "[Chore] 주석 오타 수정"
Update | 문서 업데이트 :pencil2: | "[Update] README.md OOO 추가"
Design | UI 디자인 변경 (CSS) :art: | "[Design] 로그인 버튼 UI 수정"
Deployment | 배포할 때 쓸 예정 :tada: | -  

---

## 개인 작업 진행 순서
1. 작업 내용에 대한 **Issue를 작성**합니다.  
2. **Projects**에서 해당 작업의 Issue를 `In progress`로 옮깁니다.  
3. 작성했던 issue 번호를 태깅하여 **branch를 생성**합니다.  
4. 반드시! `checkout` 명령어를 통해 작업을 진행할 branch로 이동해주세요.  
5. 작업 전, `develop 브랜치`를 `pull` 받고 시작해주세요!  

:fire: `main 브랜치`에서 수정하지 않도록 주의, **현재 브랜치**를 확인해주세요!  
:fire: `clone 시`에도 `develop 브랜치`로 설정 --> URL을 복사해주세요!

## Issue 작성법 (작성 예정)

## Projects 탭 활용 (작성 예정)

## Git Branch 전략
```
main -- develop -- add/#1     // main - develop - (커밋타입)/#(이슈번호)
                \_ add/#2     // 구조로 이루어져 있습니다.
```
* 모든 작업은 **각자의 branch에서** 이루어집니다.  
* 자신의 branch가 맞는지 매번 꼭 확인해 주세요!
  
  
## Issue 번호를 태깅하여 Branch 생성
* 작업 전, 항상 작업 내용에 대한 `issue를 작성`해주세요.  
* `'브랜치이름'`에는 작업에 해당하는 `'Commit Type'`을 그대로 사용하시면 됩니다.  
* `'이슈번호'`에는 작업 전 작성했던 `issue 번호`를 적어주세요.

1. 작업을 진행할 branch를 생성합니다.  
2. 꼭! `checkout 명령어`를 통해 작업을 진행할 브랜치로 이동해주세요.  
3. 작업 전, 반드시 `develop 브랜치`를 `pull` 받고 시작합니다.
```
git branch 브랜치이름/#이슈번호

git checkout 브랜치이름

git pull origin develop
```


## :pushpin: PR 규칙
- 

## :pushpin: 참고사항
- 
