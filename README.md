# YJU WDB2A반 1조 미니 프로젝트 :: Tetris  
<img width="100%" height="100%" src="https://user-images.githubusercontent.com/103083251/171994777-a09313b6-40ef-419d-9eb6-ea0d0cf18e1b.png">  

#### 👋 영진전문대학교 2학년 WD-A반 1조(hongzo) @ 첫번째 팀 프로젝트  
**테트리스 구현**을 목표로 만들어진 repository입니다. 더불어 **git/github 활용법에 대한 스터디**를 겸하고 있습니다.

<br>

## 조원
<table>
  <tr> 
    <td align="center"><a href=https://github.com/Hannah0su><img src="https://user-images.githubusercontent.com/102000749/165738552-60e1eac0-3c50-4568-ae38-767c44b3b018.jpg" width="100px;" alt=""/><br /><sub><b>Ha Youngsu</b></sub></a><br /><a href="https://hannah0su.github.io/" title="Code">🏠</a>
    </td>
    <td align="center"><a href=https://github.com/ooyniz><img src="https://user-images.githubusercontent.com/83005178/166416247-3908c2e9-ed1c-4e44-aa6a-68f3db0f45db.png" width="100px;" alt=""/><br /><sub><b>Kwak Yujin</b></sub></a><br />🏠
    </td>
    <td align="center"><a href=https://github.com/baegjhoon><img src="https://user-images.githubusercontent.com/102000749/165739357-9ea66cf1-8a6e-4b9a-bf77-0a8c9e1a465a.png" width="100px;" alt=""/><br /><sub><b>Baeg Junghoon</b></sub></a><br />🏠
    </td>
    <td align="center"><a href=https://github.com/sila0319><img src="https://user-images.githubusercontent.com/102000749/165739259-24741b3b-92d2-49df-8496-7dab8f58bd97.png" width="100px;" alt=""/><br /><sub><b>Ryu wonkyu</b></sub></a><br />🏠
    </td>
  </tr>
</table>

<br>

---

# 🔍 목차  
[1. Github 관리 전략 ](#github-관리-전략)  
  > [1.1. Commit Convention ](#pushpin-commit-convention)  
    [1.2. 개인 작업 진행 순서 ](#개인-작업-진행-순서)  
    [1.3. Issue 작성법 ](#issue-작성법)  
    [1.4. Issue Convention ](#pushpin-issue-convention)  
    [1.5. Projects 탭 활용 ](#projects-탭-활용)  
    [1.6. git Branch 전략 ](#git-branch-전략)  
    [1.7. Issue 번호를 태깅하여 Branch 생성 ](#issue-번호를-태깅하여-branch-생성)  
    [1.8. PR Convention ](#pushpin-pr-convention)  
  
[2. TETRIS : 테트리스 ](#tetris--테트리스)  
  > [2.1. How to PLAY ](#how-to-play)  
    [2.2. 조작법 ](#조작법)  
    [2.3. Develop ](#develop)  
    [2.4. 패치 노트 ](#패치-노트)  
    [2.5. 스크린샷 ](#스크린샷)  
  
[3. etc ](#etc)
  > [3.1. 기술 스택 ](#기술-스택)  
    [3.2. Reference ](#reference)  

<br>  

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
:fire: `main 브랜치`에서 수정하지 않도록 주의, **현재 브랜치를 확인**해주세요!  
:fire: `develop 브랜치`가 최신이니, `clone 시` `아래 명령어`를 사용해서 clone 하시고 작업하시면 됩니다!!  
```
git clone -b develop https://github.com/baegjhoon/YJU-WDB2A-Tetris.git
```  
😆 | `작업 전에 할 일`  ⭐️ 작업 별로 링크를 걸어두었으니 참고해 주세요 ⭐️
:--:|:--
1 | 작업 내용에 대한 [`Issue`를 작성](#issue-작성법) 합니다.  
2 | [`Projects`](#projects-탭-활용)에서 해당 작업의 Issue를 `In progress`로 옮깁니다.  
3 | 작성했던 issue 번호를 태깅하여 [`branch를 생성`](#issue-번호를-태깅하여-branch-생성) 합니다.  
4 | 반드시! [`checkout` 명령어](#issue-번호를-태깅하여-branch-생성)를 통해 **작업을 진행할 branch로 이동**해주세요.  
5 | 작업 전, [`develop 브랜치`를 `pull`](#issue-번호를-태깅하여-branch-생성) 받고 시작해주세요!  
  
👏 | `작업을 다했다면 !`
:--:|:--
1 | `push 전에` 정상적으로 작동하는지, 눈에 보이는 오류는 없는지 확인합니다.
2 | `git add . ` <- 명령어로 모든 변경사항을 add 합니다.
3 | [`git commit -m "[Type] 작업 내용에 대한 요약 #(issue번호)" `](#pushpin-commit-convention) <- 명령어로 commit 합니다.
4 | `git push -u origin (브랜치이름) ` <- 명령어로 github에 push 합니다.
5 | 파일이 정상적으로 해당 branch에 들어갔는지 확인 -> [`PR양식에 맞춰 Pull requests`](#pushpin-pr-convention) 합니다.
6 | PR 후 카톡 남겨주시면 확인 후 merge 하겠습니다!


<br>  

## Issue 작성법
- 누가 어떤 작업을 하고있는지를 파악하기 위해 issue를 작성합니다.
- `issue`를 기반으로 개발을 진행합니다.  
<img width="100%" src="https://user-images.githubusercontent.com/103083251/170811257-f2436ad4-3126-4395-ba66-aea5133159e9.JPG"/>  

### :pushpin: Issue Convention
1. issue의 `제목`은 `[Commit Type] 작업 내용 요약` 으로 통일합니다.  
2. issue의 `내용`에는 브랜치에서 진행할 `간단한 작업 내용`과 `연관된 issue와 PR`을 태그하고, `참조한 문서`를 작성합니다.
```
## 작업 내용  
- [ ] 관련 작업 1  
- [ ] 관련 작업 2  
  
## Related issue, PR  
- #이슈 번호

## References
- 해당 작업을 하며 참조한 문서의 URL 첨부
```
3. issue 설정: `Assignees(작업자)`와 `Labels`을 설정합니다.
<br>  

## Projects 탭 활용  
<img width="100%" src="https://user-images.githubusercontent.com/103083251/170812937-d22dee25-36e7-4f2a-8e10-f46039dbdf4a.png"/>  

- `To do` : 할 일  
- `In progress` : 진행 중인 일  
- `Done` : 완료된 Issue  
  
1. `+`를 눌러 `#이슈 번호`를 검색하여 Issue를 추가할 수 있습니다.  
2. Issue를 추가하면 사진과 같은 `블록`이 생깁니다.  
3. (스크래치 처럼) 마우스로 잡아서 해당하는 `작업 진행 영역`에 가져다 놓으면 됩니다.  
4. `Issue 단위의 작업`을 완료했다면 Done에 놓아주세요!
<br>  

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

1. 작업을 진행할 **branch를 생성**합니다.  
2. 꼭! `checkout 명령어`를 통해 **작업을 진행할 브랜치로 이동**해주세요.  
3. 작업 전, 반드시 `develop 브랜치`를 `pull` 받고 시작합니다.
```
git branch 브랜치이름/#이슈번호

git checkout 브랜치이름

git pull origin develop
```


## :pushpin: PR Convention  
:fire: 반드시! `base 브랜치`를 `develop`로 설정해주세요.  
:fire: `compare 브랜치`가 `자신이 작업한 branch`가 맞는지 확인해주세요.  
<img width="70%" height="70%" src="https://user-images.githubusercontent.com/103083251/171990678-7ca28b54-93bf-4048-84d5-b6d1e7e0b790.jpg"/>  
<br>  
<img width="100%" src="https://user-images.githubusercontent.com/103083251/171991926-a07ee531-fc5b-4eb5-921a-e9f3f516bc93.jpg"/>  
<br>  

:satisfied: | `Pull request 순서 !`
:--:|:--
1 | `base: main`에서 -> `base: develop`로 변경합니다.
2 | `compare: (본인이 작업한 브랜치)`가 맞는지 확인 -> 아니라면 변경해줍니다.
3 | 작업한 파일이 정확하게 들어갔는지 확인합니다.
4 | `PR 제목`은 `Issue 제목`과 동일하게 작성합니다.
5 | [`아래 양식`](#pull-request-작성-양식)을 복사해서 내용을 작성합니다.
6 | `Reviewer(선택)`, `Assignees`, `Labels`를 설정합니다. [(Issue 때와 동일)](#issue-작성법)
7 | 마지막으로 확인 후 `Create pull request`를 클릭하면 PR 완료! 고생하셨습니다 👏
 
### Pull request 작성 양식
```
## 작업 내용
-  #issue번호
   * [x] 작업 1
   * [x] 작업 2
   * [x] 작업 3
   * [x] 작업 4

- Resolved: #issue번호
```

<br>

---

# TETRIS : 테트리스  
<img width="80%" height="80%" src="https://user-images.githubusercontent.com/103083251/172001960-004b0581-79e8-4b5b-9f9d-3b12c1999c61.png"/>  
테트리스는 1984년, 소련의 프로그래머 '알렉세이 파지노프'가 만든 고전 퍼즐 게임입니다.  

게임의 룰은 간단합니다. 블록을 쌓으면서 한 줄이 꽉 채워지면 그 줄은 사라지고 점수를 얻습니다. 이런 식으로 블록이 맨 위까지 쌓이지 않도록 버티는 게임입니다.  

<br>  

## How to PLAY  
- [**Click to PLAY**](https://yju-tetris-project.herokuapp.com/)  
[`https://yju-tetris-project.herokuapp.com/`](https://yju-tetris-project.herokuapp.com/)  
  
1. `닉네임` 입력 후 `PLAY` 버튼을 눌러주세요.  
2. `준비` 버튼을 눌러주세요. (멀티 플레이 시, 모두가 `준비`가 되어야만 게임이 시작됩니다.)  
3. 게임이 시작되면 블록이 내려옵니다.  그럼 게임을 즐겨주세요! :laughing:  
* [**조작법** (클릭!)](#조작법)
* 한 줄을 완성하면 점수를 얻습니다.  
* 블록이 맨 위까지 쌓이면 게임이 끝납니다.  
* `Level`이 오를수록 속도가 빨라집니다.  
  
:fire: 게임 도중엔 `나가기`가 불가능합니다.  
:fire: 게임이 진행되고 있으면 로그인(난입)이 불가능합니다.  
:fire: `최고 점수`는 `인터넷 기록`을 지우면 초기화됩니다.  

<br>  

### 조작법  
* `←`, `→` 방향키: 블록 이동  
* `↑` 방향키 : 블록 회전  
* `↓` 방향키 : 소프트 드롭 (블록 빠르게 내려오기)  
* `Spacebar` : 하드 드롭 (블록 떨어뜨리기)  
* `P` : 일시정지  

<br>  

### Develop  
- `npm install`  
- `node server`  

<br>  

## 패치 노트  
(구현된 기능들을 차례대로 작성할 예정)

<br>  

## 스크린샷  
(로그인 화면 & 플레이 화면 사진 첨부)  

<br>  

---

# etc  

<!--## 팀원 역할  

<br>  -->

## 기술 스택  
(js, css, node.js, heroku, 등등)   

<br>

<!-- ## 소스 코드  
(각 파일들을 하이퍼링크로 작성할 예정)  -->

## Reference  
(스터디에 참조한 글들의 링크 작성)  
