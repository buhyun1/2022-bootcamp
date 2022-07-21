
            $(".txt").on("keyup",function(e){
            
              if(e.keyCode == 13 && $(".txt").val() != ""){
              
                //Task에 입력 값 넣기
                var task = $("<div class='task'></div>").text($(".txt").val());
                
                //삭제버튼
                var del = $("<i class='icon ion-ios-trash'></i>").click(function(){
                  var p = $(this).parent();
                  p.fadeOut(function(){
                    p.remove();
                  })
                });
                
                //체크 버튼
                var check = $("<i class='icon ion-md-checkmark'></i>").click(function(){
                  var p = $(this).parent();
                  p.fadeOut(function(){
                    $(".done").append(p);
                    p.fadeIn();
                  })
                  $(this).remove();
                });
                
                //Task에 삭제 & 체크 버튼 추가하기
                task.append(del,check)
                
                //할일 목록에 추가
                $(".notdone").append(task);
                
                //입력 창 비우기
                $(".txt").val("");
              }
            })
      