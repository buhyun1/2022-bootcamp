### 형상관리 시스템은 왜 나오게 되었을까요?<br/> 
> **형상관리란?**<br/>  어떤 문서나 파일이 변경된 경우 변경된 내용과 그 원인을 기록했다가 나중에 필요한 경우 찾아 볼 수있도록 관리하는 것<br/><br/>
> **사용이유**<br/> 대규모 개발 프로젝트에서 누가 어떤 작업을 했는지 분명히 알고, 그 기록을 알 수 있으므로 효율적인 작업 가능하기 위해 사용<br/>

### git은 어떤 형상관리 시스템이고 어떤 특징을 가지고 있을까요?<br/>  분산형 형상관리 시스템이란 무엇일까요?<br/> 
> **분산 버전 관리 시스템**<br/> 
> 해당 저장소에 변경 기록들과 함께 복제하는 시스템<br/> 중앙서버에 문제가 생겨도 clients중 하나를 골라 변경기록들과 함께 서버를 복원시킬 수 있다<br/><br/>
> **분산 버전 관리 시스템의 특징**<br/>
> 저장소를 복제할 때 변경사항의 기록들(commit)을 함께 복제해온다는 특징이 있다.<br/>

### git은 어떻게 개발되게 되었을까요?<br/> git이 분산형 시스템을 채택한 이유는 무엇일까요?<br/> 

### git과 GitHub은 어떻게 다를까요?<br/> 
>`Git` 버전관리 툴,<br/> `GitHub` git을 이용한 서비스<br/> 
### git의 clone/add/commit/push/pull/branch/stash 명령은 무엇이며 어떨 때 이용하나요?<br/> 그리고 어떻게 사용하나요?<br/> 
>`git clone` 원격 저장소의 데이터를 카피해오는 행위
>```
>$ git clone https://github.com/buhyun1/TIL.git
>```
>`git add` <br/>commit을 하기전에 변경된 사항들을 추가해나가는 행위<br/> git이 관리하도록 올리는 행위<br/>
 git add 명령어를 통해 staging area에 변경사항들을 올릴 수 있다.<br/>
>```
>$ git add filename
>$ git add -A  //작업 디렉토리 전체에서 변경된 사항들을 스테이징 에리어에 올려줌.
>$ git add . //현재 디렉토리 하위에 있는 변경사항들만 스테이징 에리어에 올려줌.
>```
>`git commit` 로컬 저장소에 staged된 변경사항들에 대하여 변경을 확정짓고 기록을 하는 행위.
>```
>$ git commit -m "commit message"
>```
>`git push` 로컬 저장소에 남은 기록들을 원격 저장소에 보내는 행위
>```
>$ git push <저장소명> <브랜치명>
>$ git push origin master
>$ git remote //<저장소명>은 아래 명령어로 확인할 수 있다.
>$ git push -u origin master //-u 옵션은 최초 한번만 저장소명, 브랜치명을 입력하고 이후에는 git push만 사용해도 되게 해준다.  
>$ git push -f origin master //가급적 사용하지 말것, -f 옵션으로 강제로 현재 로컬 저장소의 변경사항을 원격 저장소에 덮어씌우는 행위
>```
>`git pull` 원격저장소의 변경사항들을 로컬 저장소로 가져와 merge하는 행위, pull = (변경사항을 가져오는 fetch) + (가져온 변경사항을 적용하는 merge)
>```
>$ git pull
>```
>`git branch` 깃에서 관리하는 작업트리를 다룰 수 있는 명령어
> ```
>$ git branch //브랜치 목록을 불러온다.
>$ git branch <branch_name> //이름이 branch_name인 브랜치를 생성한다.  
>```
>`git stash` <br/>현재 작업중인 변경사항을 임시 공간에 저장해두기 위한 명령어<br/> 
>현재 브랜치에서 발생한 변경사항들을 커밋해주지 않으면 브랜치 변경이 불가능한데<br/> 현재 변경사항을 커밋하고 싶진 않지만
>브랜치는 변경하고 싶을 때 stash명령어를 통해 풀어나갈 수 있다.
>```
>$ git stash 
>$ git stash list //stashed된 변경사항들의 목록을 불러온다.
>$ git stash apply <stash_name> //stash_name stash를 불러온다. stash_name이 없다면 가장 최근의 stash를 불러온다.   
>$ git stash drop <name> //name의 stash를 제거한다. name이 주어지지 않으면 가장 최근의 stash를 제거한다.  
>$ git stash pop //apply와 동시에 drop을 해주는 명령어
>```

### git의 Object, Commit, Head, Branch, Tag는 어떤 개념일까요?<br/> git 시스템은 프로젝트의 히스토리를 어떻게 저장할까요?<br/> 
>```Object``` git이 파일들을 관리하기 위해 만드는 파일,  tree, blob, commit, tag 4가지로 이루어 짐.<br/>
>```Head``` 커밋을 가르키는 포인터와 같은 역할<br/> 
>```Branch``` 작업 트리를 나타냄<br/> 
>```Tag``` 특정 커밋에 태그를 달아주는 역할<br/>

### 리모트 git 저장소에 원하지 않는 파일이 올라갔을 때 이를 되돌리려면 어떻게 해야 할까요?
>첫번째 ```git reset``` 을 사용해 커밋을 취소하는 방식<br/>
>두번째 ```git revert``` 를 사용해 커밋 내용을 되돌리는 방식<br/>
 
참고 사이트 https://www.yalco.kr/lectures/git-github/
