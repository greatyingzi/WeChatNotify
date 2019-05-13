// ==UserScript==
// @name         WeChat Notify
// @namespace    http://tampermonkey.net/
// @version      0.1
// @license      MIT
// @description  try to take over the world!
// @author       影子
// @match        https://wx.qq.com/
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

(function() {
    'use strict';
    //debugger;
    var oldMsg = "";
     setInterval(function(){
        // Your code here...
        var redPop = document.getElementsByClassName("icon web_wechat_reddot_middle ng-binding ng-scope");
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
            if (itemMsg != null){
                var msg = itemMsg.innerText;
                if(msg===oldMsg){
                }else{
                    oldMsg = msg;
                    alert(msg);
                }
            }
        }
    },1000)
})();
