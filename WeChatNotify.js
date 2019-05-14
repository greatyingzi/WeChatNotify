// ==UserScript==
// @name         WeChat Notify
// @namespace    http://tampermonkey.net/
// @version      0.1
// @license      MIT
// @description  try to take over the world!
// @author       影子
// @match        https://wx.qq.com/*
// @grant        none
// ==/UserScript==

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

function imitateClick(oElement, iClientX, iClientY) {
                var oEvent;
                if (document.createEventObject) { //For IE
                    oEvent = document.createEventObject();
                    oEvent.clientX = iClientX;
                    oEvent.clientY = iClientY;
                    oElement.fireEvent("onclick", oEvent);
                } else {
                    oEvent = document.createEvent("MouseEvents");
                    oEvent.initMouseEvent("click", true, true, document.defaultView, 0, 0, 0,
                                            iClientX, iClientY/*, false, false, false, false, 0, null*/);
                    oElement.dispatchEvent(oEvent);
                }
            }

function send(event){
    sendTextMessage();
}

(function() {
    'use strict';
    //debugger;
    var oldMsg = "";
    var tabs = document.getElementsByClassName("chat");
     setInterval(function(){
        // Your code here...
        /*var redPop = document.getElementsByClassName("icon web_wechat_reddot_middle ng-binding ng-scope");
        if(redPop != null){
            var item1 = redPop[0];
            if (item1!=null){
                var msgCount = redPop.innerText;
                //alert("you received a new message!");
            }
        }
        var msgList = document.getElementsByClassName("msg ng-scope");
        if(msgList != null){
            var itemMsg = msgList[0];
            var editArea = document.getElementById("editArea");
            if (itemMsg != null){
                var msg = itemMsg.innerText.trim();
                if(msg===oldMsg){
                }else{
                    oldMsg = msg;
                    //var editArea = document.getElementById("editArea");
                    if(editArea != null){
                        $('.edit_area').html(oldMsg);
                        $(".edit_area").trigger($.Event("keydown", { keyCode: 13,ctrlKey: true}));
                        $('.btn_send').click();
                    }
                }
            }
        }*/





    },5000)
 //切换tab页,防止微信自动退出
    var currentTabIndex = 1;
    setInterval(function(){
       changeTab();
    },10000)

    function changeTab(){
        var id = setInterval(function(){

        tabs[currentTabIndex].click();
        if(currentTabIndex == 0){
            currentTabIndex = 1;
           clearInterval(id);
        }else{
            currentTabIndex = 0;
        }
        },1000)
    }
})();
