#jQuery란?

### Library
자주 사용하는 코드들을 재사용할 수 있는 형태로 가공해서 프로그래밍 효율을 높여주는 코드들
-> 사용하는 코드를 잘 추상화시켜서 남들이 사용할 수 있게 만들어주면 나도 library를 만들어 줄 수 있다.

### jQuery란?
1. element를 선택하는 강력한 방법 -> 한번에 선택할 수 있게!
2. 선택된 엘리먼트들을 효율적으로 제어할 수 있는 다양한 수단을 제공 -> HTML이나 javascript는 아주 간단한 형태의 조작방법들만 제공하지만, jQuery는 아주 많은, 실무에서 사용하는 것 중심으로 정리가 되어 있어서 javascript를 이용해서 직접 구현하는것보다 훨씬 시간도 적게 들고 많은 것을 할 수 있다.
3. javascript library

### Helloworld text찍기
두개의 element를 가지고 있다.

example 

	<html>
		<body>
			<div class="welcome"></div>
			<div class="welcome"></div>
			<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
			<script type="text/javascript">
				$('.welcome').html('hello world! coding everybody!').css('background-color', 'yellow');
			</script>
		</body>
	<html>

### jQuery의 문법
$(제어대상).method1().method2(); -> chaining
주어와 서술어로 되어있다.
우리가 사고하는 방식으로 서술할 수 있다.

jQuery를 사용하면 javascript 코딩 생산성이 10배 익숙해진다.

# Javascript VS jQuery

Javascript

	<html>
		<head>
			<script type = "text/javascript">
				function addEvent(target, eventType, eventHandler, useCapture) {
					if (target.addEventListener) { // W3C DOM
						target.addEventListener(eventType, eventHandler, useCapture?useCapture:false);
					} else if (target.attachEvent) { // IE DOM
						var r = target.attachEvent("on" + eventtype, eventHandler);
					}
				}
				function clickHandler(event) {
					var nav = document.getElementById('navigation');
					for (var i = 0; i < nav.childNodes.length; i++) {
						var child = nav.childNodes[i];
						if (child.nodeType==3)
							continue;
						child.className = '';
					}
					event.target.className = 'selected';
				}
				addEvent(window, 'load', function(eventObj) {
					var nav = document.getElementById('navigation');
					for (var i = 0; i < nav.childNode.length; i++) {
						var child = nav.childNodes[i];
						if (child.nodeType == 3) 
							continue;
						addEvent(child, 'click', clickHandler);
					}
				})
			</script>
			<style type="text/css">
				#navigation li {
					list-style:none;
					float:left;
					padding:5px;
				}

				#navigation {
					cursor:pointer;
				}

				#navigation .selected {
					background-color:red;
					color: white;
				}
			</style>
		</head>
		<body>
			<ul id = "navigation">
				<li>HTML</li>
				<li>CSS</li>
				<li>javascript</li>
				<li class = "selected">jQuery</li>
				<li>PHP</li>
				<li>mysql</li>
			</ul>
		</body>
	</html>

jQuery

	<html>
		<head>
			<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
			<script type="text/javascript">
				$('#navigation li').live('click', function() {
					$('#navigation li').removeClass('selected');
					$(this).addClass('selected');
				})
			</script>
		</head>
	</html>

# wrapper
###wrapper란?
jQuery(element object|'css style 선택자')

###wrapper의 안전한 사용
$(엘리먼트)와 jQuery(엘리먼트)는 같은 의미이지만 $를 사용하는 다른 라이브러리들과의 충돌 때문에 다음과 같은 방법을 사용한다.
example

	<script type="text/javascript">
		// $대신 jQuery를 사용
		jQuery('body').html('hello world');
	</script>
	-
	<script type="text/javascript">
		// $를 함수의 지역변수로 선언해서 외부에 있을지 모르는 타 라이브러리의 $와의 충돌을 예방
		(function($){
			//jQuery 코드가 위치함
			$('body').html('hello world');
		})(jQuery)
	</script>

###제어 대상을 지정하는 방법
jQuery(selector, [context])

	<html>
		<body>
			<ul>
				<li>
					test2
				</li>
			</ul>
			<ul class="foo">
				<li>
					test1
				</li>
			</ul>
			<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jQuery.min.js"></script>
			<script type="text/javascript">
				(function($){
					$('ul'.foo).click(function() {
						$('li', this).css('background-color','red'); //'background-color', 'red' 이런식으로 주면 inline으로 css 속성을 준다는 소리.
						//this는 context(맥락) event가 호출이 되었는데, event 안에서 this라는 의미는 event를 발생시킨 element, 즉 ul.foo의
						//여러개의 element중 li를 가지고 있는 놈을 찾는다는 소리다. 즉, this라는 element안에서의 li만 리턴한다.
					})
				}
			</script>
		</body>
	</html>


jQuery(element)

	<html>
	<body>
		<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/min/js"></script>
		<script type="text/javascript">
			jQuery(document.body).css("background-color", "black");
		</script>
	</body>
	</html>

#선택자
###선택자란?
jQuery wrapper에는 CSS선택자가 위치할 수 있는데, 이를 통해서 제어하려는 엘리먼트를 빠르고 정확하게 지정할 수 있다.
###선택자 탐색기 

	<!DOCTYPE html>
		<html>
		    <head>
		        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		        <style>
		            body{
		                font-size:12px;
		            }
		            .selected,.selected_parent {
		                background-color: red !important;
		                color:white;
		                border:2px solid red !important;
		            }
		            input.btn {
		                width:130px;
		            }
		            ul, .live{
		                float:left;
		                width:150px;
		                padding-left:20px;
		                margin:0;
		            }
		            textarea{
		                float:left;
		                width: 400px;
		                height:150px;
		                font-size:11px;
		                margin-left:20px;
		            }
		            .clear{
		                clear: both;
		            }
		            .sample{
		                margin-bottom: 20px;
		            }
		        </style>
		        <script src="http://code.jquery.com/jquery-latest.js"></script>
		    </head>
		    <body>
		        <fieldset>
		            <legend> 기본 </legend>
		            <div class="sample">
		                <ul id="tutorials">
		                    <li class="tutorial" id="HTML"> HTML </li>
		                    <li class="tutorial" id="CSS"> CSS </li>
		                    <li class="tutorial" id="javascript"> javascript </li>
		                    <li class="tutorial" id="jquery"> jQuery </li>
		                    <li class="tutorial" id="PHP"> PHP </li>
		                    <li class="tutorial" id="MYSQL"> MYSQL </li>
		                </ul>
		<textarea>
		<ul id="tutorials">
		    <li class="tutorial" id="HTML"> HTML </li>
		    <li class="tutorial" id="CSS"> CSS </li>
		    <li class="tutorial" id="javascript"> javascript </li>
		    <li class="tutorial" id="jquery"> jQuery </li>
		    <li jclass="tutorial" id="PHP"> PHP </li>
		    <li class="tutorial" id="MYSQL"> MYSQL </li>
		</ul>
		</textarea>
		            <div class="clear"></div>
		                </div>
		            <input class="btn" type="button" id="#jquerybtn" value="#jquery" /> - id 선택자 <br />
		            <input class="btn" type="button" id=".tutorial" value=".tutorial" /> - class 선택자 <br />
		            <input class="btn" type="button" value="li" /> - 엘리먼트 선택자 <br />
		            <input class="btn" type="button" value="#jquery, #MYSQL" /> - 다중 선택자 <br />
		        </fieldset>
		        
		        
		        <fieldset>
		            <legend> filter </legend>
		            <div class="sample">
		                <ul id="list">
		                    <li> HTML </li>
		                    <li> CSS </li>
		                    <li> javascript </li>
		                    <li> PHP </li>
		                    <li> MYSQL </li>
		                </ul>
		<textarea>
		<ul id="list">
		    <li> HTML </li>
		    <li> CSS </li>
		    <li> javascript </li>
		    <li> PHP </li>
		    <li> MYSQL </li>
		</ul>    
		</textarea>
		                <div class="clear"></div>
		            </div>
		            <input class="btn" type="button" value="#list li:eq(2)" /> - 인자와 인덱스가 동일한 엘리먼트를 찾아내는 선택자 <br />
		            <input class="btn" type="button" value="#list li:gt(1)" /> - 인자 보다 인덱스가 큰 엘리먼트를 찾아내는 선택자 <br />
		            <input class="btn" type="button" value="#list li:lt(2)" /> - 인자 보다 인덱스가 작은 엘리먼트를 찾아내는 선택자 <br />
		            <input class="btn" type="button" value="#list li:even" /> - 첫번째, 세번째... 홀 수의 인덱스 값을 가진 엘리먼트에 대한 선택자 <br />
		            <input class="btn" type="button" value="#list li:odd" /> - 두번째, 네번째.... 짝 수의 인덱스 값을 가진 엘리먼트에 대한 선택자 <br />
		            <input class="btn" type="button" value="#list li:first" /> - 첫번재 인덱스 엘리먼트에 대한 선택자 <br />
		            <input class="btn" type="button" value="#list li:last" /> - 마지막 인덱스 엘리먼트에 대한 선택자 <br />
		        </fieldset>
		        
		        
		        <fieldset>
		            <legend> 속성 </legend>
		            <div class="sample">
		                <ul id="attribute">
		                    <li target="ABCD">ABCD</li>
		                    <li target="BCDE">BCDE</li>
		                    <li target="CDEF">CDEF</li>
		                    <li target="DEFG">DEFG</li>
		                    <li target="EFGH">EFGH</li>
		                    <li id="FGHI" target="FGHI">FGHI</li>
		                </ul>
		<textarea>
		<ul id="attribute">
		    <li target="ABCD">ABCD</li>
		    <li target="BCDE">BCDE</li>
		    <li target="CDEF">CDEF</li>
		    <li target="DEFG">DEFG</li>
		    <li target="EFGH">EFGH</li>
		    <li id="FGHI" target="FGHI">FGHI</li>
		</ul>    
		</textarea>
		                <div class="clear"></div>
		            </div>
		            <input class="btn" type="button" value="[target*=&quot;BC&quot;]" /> - 속성의 값에 주어진 문자열이 포함되는 엘리먼트를 찾아내는 선택자 <br />
		            <input class="btn" type="button" value="[target=&quot;DEFG&quot;]" /> - 속성의 값과 주어진 문자열이 일치하는 엘리먼트를 찾아내는 선택자 <br />
		            <input class="btn" type="button" value="[target!=&quot;DEFG&quot;]" /> - 속성의 값과 주어진 문자열이 일치하지 않는 엘리먼트를 찾아내는 선택자 <br />
		<input class="btn" type="button" value="[target^=&quot;B&quot;]" /> - 속성의 값으로 주어진 문자열이 처음 등장하는 엘리먼트를 찾아내는 선택자 <br />
		<input class="btn" type="button" value="[target$=&quot;H&quot;]" /> - 속성의 값으로 주어진 문자열이 마지막으로 등장하는 엘리먼트를 찾아내는 선택자 <br />
		<input class="btn" type="button" value="[target]" /> - 속성이 존재하는 엘리먼트를 찾아내는 선택자 <br />
		<input class="btn" type="button" value="[target][id]" /> - 속성들이 존재하는 엘리먼트를 찾아내는 선택자
		        </fieldset>
		        <fieldset>
		            <legend>Form</legend>
		                <div class="live">
		                    <div>
		                        <input type="text" disabled="disabled" value="disabled" />
		                        <input type="text" value="enabled"/>
		                    </div>
		                    <div><input type="checkbox" checked="checked" /></div>
		                    <div><input type="checkbox" /></div>
		                </div>
		<textarea class="sample">
		<div>
		    <input type="text" disabled="disabled" value="disabled" />
		    <input type="text" value="enabled"/>
		</div>
		<div><input type="checkbox" checked="checked" /></div>
		<div><input type="checkbox" /></div>
		</textarea>
		            <div class="clear"></div>
		            <input class="btn" type="button" value="[type=&quot;text&quot;]" /> - 폼 엘리먼트를 선택할 때는 속성 셀렉터를 사용한다. <br />
		            <input class="btn" type="button" value="[type=&quot;text&quot;]:disabled" /> - disabled 속성의 값이 disabled인 엘리먼트를 찾아내는 선택자<br />
		            <input class="btn" type="button" value="[type=&quot;text&quot;]:enabled" /> - disabled 속성의 값이 enabled인 엘리먼트를 찾아내는 선택자<br />
		            <input class="btn" type="button" value="input:checked" /> - 체크박스 중 체크가 된 엘리먼트를 찾아내는 선택자 <br />
		        </fieldset>
		        <script>
		            $('input').click(function() {
		                $this = $(this);
		                $('*').removeClass('selected');
		                switch($this.attr('value')) {
		                    case '#jquery':
		                        $('#jquery').addClass('selected');
		                        break;
		                    case '.tutorial':
		                        $('.tutorial').addClass('selected');
		                        break;
		                    case 'li':
		                        $('li').addClass('selected');
		                        break;
		                    case '#jquery, #MYSQL':
		                        $('#jquery, #MYSQL').addClass('selected');    
		                        break;
		                    case '#list li:eq(2)':
		                        $('#list li:eq(2)').addClass('selected');
		                        break;
		                    case '#list li:gt(1)':
		                        $('#list li:gt(1)').addClass('selected');
		                        break;
		                    case '#list li:lt(2)':
		                        $('#list li:lt(2)').addClass('selected');
		                        break;
		                    case '#list li:even':
		                        $('#list li:even').addClass('selected');
		                        break;
		                    case '#list li:odd':
		                        $('#list li:odd').addClass('selected');
		                        break;
		                    case '#list li:first':
		                        $('#list li:first').addClass('selected');
		                        break;
		                    case '#list li:last':
		                        $('#list li:last').addClass('selected');
		                        break;
		                    case '[target*="BC"]':
		                        $('li[target*="BC"]').addClass('selected');
		                        break;
		                    case '[target="DEFG"]':
		                        $('li[target="DEFG"]').addClass('selected');
		                        break;
		                    case '[target!="DEFG"]':
		                        $('li[target!="DEFG"]').addClass('selected');
		                        break;
		                    case '[target^="B"]':
		                        $('li[target^="B"]').addClass('selected');
		                        break;
		                    case '[target$="H"]':
		                        $('li[target$="H"]').addClass('selected');
		                        break;
		                    case '[target]':
		                        $('li[target]').addClass('selected');
		                        break;
		                    case '[target][id]':
		                        $('li[target][id]').addClass('selected');
		                        break;
		                    case '[type="text"]':
		                        $('[type="text"]').addClass('selected');                    
		                        break;
		                    case '[type="text"]:disabled':
		                        $('[type="text"]:disabled').addClass('selected');
		                        break;
		                    case '[type="text"]:enabled':
		                        $('[type="text"]:enabled').addClass('selected');
		                        break;
		                    case 'input:checked':
		                        $('input:checked').parent().addClass('selected');;
		                        break;
		                    
		                }
		            })
		        </script>
		    </body>
		</html> 

#Chain
###Chain이란?
jQuery의 메소드들은 반환값으로 자기 자신을 반환해야 한다는 규칙을 가지고 있다.

이를 이용하면 한번 선택한 대상에 대해서 연속적인 제어를 할 수 있다.

예제1. jQuery를 이용하여 코딩하는 경우

	<html>
	    <body>
	        <a id="tutorial" href="http://jquery.com" target="_self">jQuery</a>
	        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
	        <script type="text/javascript">
	            jQuery('#tutorial').attr('href', 'http://jquery.org').attr('target', '_blank').css('color', 'red');
	        </script>
	    </body>
	</html>

예제2. javascript를 이용하여 코딩하는 경우

	<html>
	     <body>
	         <a id="tutorial" href="http://jquery.com" target="_self">jQuery</a>
	         <script type="text/javascript">
	             var tutorial = document.getElementById('tutorial');
	             tutorial.setAttribute('href', 'http://jquery.org');
	             tutorial.setAttribute('target', '_blank');
	             tutorial.style.color = 'red';
	         </script>
	     </body>
	 </html>

###Chain의 장점
1. 코드가 간결해진다.
2. 인간의 언어와 유사해서 사고의 자연스러운 과정과 일치한다.

###탐색(traversing)
- chain의 대상을 바꿔서 체인을 계속 연장시킬 수 있는 방법
- http://api.jquery.com/category/traversing/

예제3. traversing을 이용해서 chain안에서 대상을 움직일 수 있다.

	<html>
	    <body>
	        <ul class="first">
	            <li class="foo"> list item 1 </li>
	            <li> list item 2 </li>
	            <li class="bar"> list item 3 </li>
	        </ul>
	        <ul class="second">
	            <li class="foo"> list item 1 </li>
	            <li> list item 2 </li>
	            <li class="bar"> list item 3 </li>
	        </ul>
	        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
	        <script type="text/javascript">$('ul.first').find('.foo').css('background-color', 'red').end().find('.bar').css('background-color', 'green');</script>
	    </body>
	</html>

#Event
###Event란?
- 시스템에서 일어나는 사건을 의미한다.
- javascript나 jQuery에게 이벤트란 브라우져에서 일어나는 사건을 의미한다. (클릭, 마우스 이동, 타이핑, 페이지 로딩 등)
- 이벤트가 발생했을 때 작동할 로직을 시스템에게 알려두면 이벤트가 발생했을 때 시스템이 그 로직을 호출한다.
- 이벤트에 대한 기본적인 내용은 자바스크립트 이벤트 편 참고 http://opentutorials.org/course/49
	- addEventlistener는 하나의 엘리먼트에 여러개의 이벤트 핸들러를 걸수있다
	- 브라우저간의 호환성을 위해서 조건문을 사용했다. 이러한 기법을 크로스브라우징이라고 한다.
	- 이벤트 핸들러란 이벤트가 발생했을 때 실행될 로직을 의미한다.

	<html>
	    <head>
	        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" >
	    </head>
	    <body>
	        <input type="text" id="test" />
	        <script type="text/javascript">
	            // id test인 텍스트 필드를 가져온다
	            var test = document.getElementById('test');
	 
	            //이벤트 핸들러
	            function testHandler() {
	                alert('blur');
	            }
	 
	            //attachEvent는 ie에서만 지원하기 때문에 attachEvent가 지원되는지 확인하기 위해서 조건문을 사용
	                        //blur란 포커스가 텍스트 필드에서 벗어났을 때 발생하는 내장된 이벤트를 의미한다.        
	            if (test.addEventListener)// W3C DOM
	                test.addEventListener('blur', testHandler, false);
	            else if (test.attachEvent)// IE DOM
	                var r = test.attachEvent("on" + 'blur', testHandler);
	 
	            //이벤트 핸들러2
	            function testHandler2() {
	                alert('blur2');
	            }
	 
	            if (test.addEventListener)// W3C DOM
	                test.addEventListener('blur', testHandler2, false);
	            else if (test.attachEvent)// IE DOM
	                var r = test.attachEvent("on" + 'blur', testHandler2);
	 
	        </script>
	    </body>
	</html>

###jQuery의 이벤트
- 크로스브라우징의 문제를 해결해줌
- bind로 이벤트 핸들러를 설치하고, unbind로 제거 (예제1)
- trigger로 이벤트 핸들러를 강제로 실행 (예제2)
- click, ready와 같이 이벤트 헬퍼(helper)를 제공함
- live를 이용하면 현재 존재하지 않는 엘리먼트에 이벤트 핸들러를 설치할 수 있음.

예제 1. bind, unbind, trigger를 이용한 이벤트의 설치, 제거, 호출 

	<html>
	    <head>
	        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
	        <script type="text/javascript">
	            function clickHandler(e){
	                alert('thank you');
	            }
	            $(document).on('ready', function(){
	                 $('#click_me').bind('click', clickHandler);
	                 $('#remove_event').bind('click', function(e){
	                     $('#click_me').unbind('click', clickHandler);
	                 });
	                 $('#trigger_event').bind('click', function(e){
	                     $('#click_me').trigger('click');
	                 });
	             })
	        </script>
	    </head>
	    <body>
	        <input id="click_me" type="button" value="click me" />
	        <input id="remove_event" type="button" value="unbind" />
	        <input id="trigger_event" type="button" value="trigger" />
	    </body>
	</html>

예제2. 이벤트 헬퍼

	<html>
	    <head>
	        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
	        <script type="text/javascript">
	            function clickHandler(e){
	                alert('thank you');
	            }
	            $(document).ready(function(){
	                 $('#click_me').click(clickHandler);
	                 $('#remove_event').click(function(e){
	                     $('#click_me').unbind('click', clickHandler);
	                 });
	                 $('#trigger_event').click(function(e){
	                     $('#click_me').trigger('click');
	                 });
	             })
	        </script>
	    </head>
	    <body>
	        <input id="click_me" type="button" value="click me" />
	        <input id="remove_event" type="button" value="unbind" />
	        <input id="trigger_event" type="button" value="trigger" />
	    </body>
	</html>

예제3. live를 이용하면 존재하지 않는 엘리먼트에 대해서 이벤트를 설치할 수 있다.

	<html>
	    <head>
	        <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
	        <script type="text/javascript">
	            function clickHandler(e) {
	                alert('thank you');
	            }
	            $('#click_me').on('click', clickHandler); //화면상에 없더라도 이벤트를 설치할 수 있다.
	            $('#remove_event').on('click', function(e) {
	                $('#click_me').off('click', clickHandler);
	            });
	            $('#trigger_event').live('click', function(e) {
	                $('#click_me').trigger('click');
	            });
	        </script>
	    </head>
	    <body>
	        <input id="click_me" type="button" value="click me" />
	    <input id="remove_event" type="button" value="unbind" />
	    <input id="trigger_event" type="button" value="trigger" />
	    </body>
	</html>

http://api.jquery.com/category/event 

#엘리먼트제어
###엘리먼트제어
- jQuery는 엘리먼트를 제어하는 일관되고 풍부한 기능들을 제공한다.
- http://api.jquery.com/category/manipulation
###자식으로 삽입(.append(), .appendTo(), .html(), .prepend(), .prependTo(), .text())

	<!-- http://api.jquery.com/append/ -->
	<!DOCTYPE html>
	<html>
	    <head>
	        <style>
	            p {
	                background:yellow;
	            }
	        </style>
	        <script src="http://code.jquery.com/jquery-latest.js"></script>
	    </head>
	    <body>
	        <p>
	            I would like to say:
	        </p>
	        <script>$("p").append("<strong>Hello</strong>");</script>
	    </body>
	</html>

###형제로 삽입 (.after(), .before(), .insertAfter(), .insertBefore())

	<!-- http://api.jquery.com/after/ -->
	<!DOCTYPE html>
	<html>
	    <head>
	        <style>
	            p {
	                background:yellow;
	            }
	        </style>
	        <script src="http://code.jquery.com/jquery-latest.js"></script>
	    </head>
	    <body>
	        <p>
	            I would like to say:
	        </p>
	        <script>$("p").after("<b>Hello</b>");</script>
	    </body>
	</html>

###부모로 감싸기 (.unwrap(), .wrap(), .wrapAll(), .wrapInner())

	<!-- http://api.jquery.com/wrap/ -->
	<!DOCTYPE html>
	<html>
	    <head>
	        <style>
	            div {
	                border:2px blue solid;
	                margin:2px;
	                padding:2px;
	            }
	            p {
	                background:yellow;
	                margin:2px;
	                padding:2px;
	            }
	            strong {
	                color:red;
	            }
	        </style>
	        <script src="http://code.jquery.com/jquery-latest.js"></script>
	    </head>
	    <body>
	        <span>Span Text</span>
	        <strong>What about me?</strong>
	        <span>Another One</span>
	        <script>$("span").wrap("<div><div><p><em><b></b></em></p></div></div>");</script>
	    </body>
	</html>

###삭제 (.detach(), .empty(), .remove(), .unwrap())

	<!-- http://api.jquery.com/remove/ -->
	<!DOCTYPE html>
	<html>
	    <head>
	        <style>
	            p {
	                background:yellow;
	                margin:6px 0;
	            }
	        </style>
	        <script src="http://code.jquery.com/jquery-latest.js"></script>
	    </head>
	    <body>
	        <p>
	            Hello
	        </p>
	        how are
	        <p>
	            you?
	        </p>
	        <button>
	            Call remove() on paragraphs
	        </button>
	        <script>
	            $("button").click( function () {
	                $("p").remove();
	            });
	        </script>
	    </body>
	</html>

###치환 (.replaceAll(), .replaceWith())

	<!-- http://api.jquery.com/replaceAll/ -->
	<!DOCTYPE html>
	<html>
	    <head>
	        <script src="http://code.jquery.com/jquery-latest.js"></script>
	    </head>
	    <body>
	        <p> Hello </p>
	        <p> cruel </p>
	        <p> World </p>
	        <script>$("<b>Paragraph. </b>").replaceAll("p"); // check replaceWith() examples        </script>
	    </body>
	</html>

###클래스 (.addClass(), .hasClass(), .removeClass(), .toggleClass())

	<!-- http://api.jquery.com/toggleClass/ -->
	<!DOCTYPE html>
	<html>
	    <head>
	        <style>p {
	                margin: 4px;
	                font-size:16px;
	                font-weight:bolder;
	                cursor:pointer;
	            }
	            .blue {
	                color:blue;
	            }
	            .highlight {
	                background:yellow;
	            }
	        </style>
	        <script src="http://code.jquery.com/jquery-latest.js"></script>
	    </head>
	    <body>
	        <p class="blue"> Click to toggle </p>
	        <p class="blue highlight"> highlight </p>
	        <p class="blue"> on these </p>
	        <p class="blue"> paragraphs </p>
	        <script>
	             $("p").click( function () {
	                 $(this).toggleClass("highlight");
	             });
	         </script>
	    </body>
	</html>

### 속성제어 (.attr(), .prop(), .removeAttr(), .removeProp(), .val())

	<!DOCTYPE html>
	<html>
	    <head>
	        <style>p {
	                color:blue;
	                margin:8px;
	            }
	        </style>
	        <script src="http://code.jquery.com/jquery-latest.js"></script>
	    </head>
	    <body>
	        <input type="text" value="some text"/>
	        <p>
	        </p>
	        <script>$("input").keyup( function () {
	                var value = $(this).val();
	                $("p").text(value);
	            }).keyup();</script>
	    </body>
	</html>

#폼
###폼 
- 서버로 데이터를 전송하기 위한 수단
- jQuery는 폼을 제어하는데 필요한 이벤트와 메소드를 제공한다.
- jQuery 폼 API 문서: http://api.jquery.com/category/forms/

###예제1. (.focus(), .blur(), .change(), .select())

	<html>
	    <head>
	        <style>
	            span {
	            }
	        </style>
	        <script src="http://code.jquery.com/jquery-latest.js"></script>
	    </head>
	    <body>
	        <p>
	            <input type="text" />
	            <span></span>
	        </p>
	        <script>
	            $("input").focus( function () {
	                $(this).next("span").html('focus');
	            }).blur( function() {
	                $(this).next("span").html('blur');
	            }).change(function(e){
	                alert('change!! '+$(e.target).val());
	            }).select(function(){
	                $(this).next('span').html('select');
	            });
	        </script>
	    </body>
	</html>

###예제2. (.submit(), .val())

	<html>
	    <head>
	        <style>
	            p {
	                margin:0;
	                color:blue;
	            }
	            div, p {
	                margin-left:10px;
	            }
	            span {
	                color:red;
	            }
	        </style>
	        <script src="http://code.jquery.com/jquery-latest.js"></script>
	    </head>
	    <body>
	        <p>
	            Type 'correct' to validate.
	        </p>
	        <form action="javascript:alert('success!');">
	            <div>
	                <input type="text" />
	 
	                <input type="submit" />
	            </div>
	        </form>
	        <span></span>
	        <script>
	            $("form").submit( function() {
	                if ($("input:first").val() == "correct") {
	                    $("span").text("Validated...").show();
	                    return true;
	                }
	                $("span").text("Not valid!").show().fadeOut(1000);
	                return false;
	            });
	        </script>
	    </body>
	</html>
#탐색
- 컨텍스트를 유지하면서 제어의 대상이 되는 엘리먼트를 변경하는 기법
- http://api.jquery.com/category/traversing/
- http://opentutorials.org/example/jquery/example.traversing.html 

#애니메이션
###효과란?
- javascript의 css를 이용해서 HTML 엘리먼트에 동적인 효과를 ㅈ루 ㅅ ㅜ있다.
- JQuery의 효과 메소드를 호출하는 것만으로 간단히 효과를 줄 수 있다.

예제 1.

	<html>
	    <head>
	        <style>        span {
	                color:red;
	                cursor:pointer;
	            }
	            div {
	                margin:3px;
	                width:80px;
	                height:80px;
	            }
	            div {
	                background:#f00;
	            }
	</style>
	        <script src="http://code.jquery.com/jquery-latest.js"></script>
	    </head>
	    <body>
	        <input type="button" id="fadeout" value="fade out" />
	        <input type="button" id="fadein" value="fade in" />
	        <input type="button" id="hide" value="hide" />
	        <input type="button" id="show" value="show" />
	        <input type="button" id="slidedown" value="slide down" />
	        <input type="button" id="slideup" value="slide up" />
	        <input type="button" id="mix" value="mix" />
	        <div id="target">
	            target
	        </div>
	        <script>$('input[type="button"]').click( function(e) {
	                var $this = $(e.target);
	                switch($this.attr('id')) {
	                    case 'fadeout':
	                        $('#target').fadeOut('slow');
	                        break;
	                    case 'fadein':
	                        $('#target').fadeIn('slow');
	                        break;
	                    case 'hide':
	                        $('#target').hide();
	                        break;
	                    case 'show':
	                        $('#target').show();
	                        break;
	                    case 'slidedown':
	                        $('#target').hide().slideDown('slow');
	                        break;
	                    case 'slideup':
	                        $('#target').slideUp('slow');
	                        break;
	                    case 'mix':
	                        $('#target').fadeOut('slow').fadeIn('slow').delay(1000).slideUp().slideDown('slow', function(){alert('end')});
	                        break;
	                }
	            }) 
	        </script>
	    </body>
	</html>

예제 2.

	<html>
	    <head>
	        <style>        
	            div {
	                background-color:#bca;
	                width:100px;
	                border:1px solid green;
	            }
			</style>
	        <script src="http://code.jquery.com/jquery-latest.js"></script>
	    </head>
	    <body>
	        <button id="go">
	            &raquo; Run
	        </button>
	 
	        <div id="block">
	            Hello!
	        </div>
	        <script>/* Using multiple unit types within one animation. */
	 
	            $("#go").click( function() {
	                $("#block").animate({
	                    width: "300px",
	                    opacity: 0.4,
	                    marginLeft: "50px",
	                    fontSize: "30px",
	                    borderWidth: "10px"
	                }, 3000);
	            });</script>
	    </body>
	</html>

#ajax
###ajax란?
- Asynchronous JavaScript and XML 의 약자
- 자바스크립트를 이용해서 비동기식으로 서버와 통신하는 방식. 이 때 XML을 이용한다.
- 꼭 XML을 이용할 필요는 없고, 최근에는 json을 더 많이 이용한다.
- 비동기식이란 여러가지 일이 동시적으로 발생한다는 뜻으로, 서버와 통신하는 동안 다른 작업을 할 수 있다는 의미.

###$.ajax(settings)
- jQuery를 이용한 ajax통신의 가장 기본적인 API
- 주요속성
	- data: 서버에 전송할 data, key/value 형식의 객체
	- dataType: 서버가 리턴하는 데이터 타입(xml, json, script, html)
	- type: 서버로 전송하는 데이터의 타입 (POST, GET)
	- url: 데이터를 전송할 URL
	- success: ajax통신에 성공했을 때 호출될 이벤트 핸들러

예제 1. 웹페이지

	<!DOCTYPE html>
	<html>
	    <head>
	        <script src="http://code.jquery.com/jquery-latest.js"></script>
	    </head>
	    <body>
	        <div id="result"></div>
	        <input type="text" id="msg" />
	        <input type="button" value="get result" id="getResult" />
	        <script>
	            $('#getResult').click( function() {
	                $('#result').html('');
	                $.ajax({
	                    url:'http://opentutorials.org/example/jquery/example.jquery.ajax.php',
	                    dataType:'json',
	                    type:'POST',
	                    data:{'msg':$('#msg').val()},
	                    success:function(result){
	                        if(result['result']==true){
	                          $('#result').html(result['msg']);
	                        }
	                    }
	                });
	            })
	        </script>
	    </body>
	</html>

예제 2. 서버 쪽 로직 

	<?
	echo json_encode(array('result'=>true, 'msg'=>$_REQUEST['msg']));
	?>

Reference: https://opentutorials.org/course/53/45
