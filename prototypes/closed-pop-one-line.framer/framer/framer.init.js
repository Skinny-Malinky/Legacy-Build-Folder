!function(){function e(){return-1==window.location.protocol.indexOf("file")}function t(){return Utils.isWebKit()}function r(){s.parentElement.removeChild(s),a()}function o(e){s=document.createElement("div"),s.classList.add("framerAlertBackground"),s.innerHTML=e,document.addEventListener("DOMContentLoaded",function(){document.body.appendChild(s)}),window.dismissAlert=r}function n(){var e="";e+="<div class='framerAlert'>",e+="<strong>Error: Not A WebKit Browser</strong>",e+="Your browser is not supported. <br> Please use Safari or Chrome.<br>",e+="<a class='btn' href='javascript:void(0)' onclick='dismissAlert();'>Try anyway</a>",e+="</div>",o(e)}function i(){var e="";e+="<div class='framerAlert'>",e+="<strong>Error: Local File Restrictions</strong>",e+="Preview this prototype with Framer Mirror or learn more about ",e+="<a href='https://github.com/koenbok/Framer/wiki/LocalLoading'>file restrictions</a>.<br>",e+="<a class='btn' href='javascript:void(0)' onclick='dismissAlert();'>Try anyway</a>",e+="</div>",o(e)}function a(e){CoffeeScript.load("app.coffee",e)}function d(){document.addEventListener("DOMContentLoaded",function(){""==document.title&&(window.FramerStudioInfo&&window.FramerStudioInfo.documentTitle?document.title=window.FramerStudioInfo.documentTitle:document.title=window.location.pathname.replace(/\//g,""))})}function c(){if(!Utils.isFramerStudio())return d(),t()?e()?void a(function(){var e;"undefined"!=typeof Framer&&null!==Framer&&null!=(e=Framer.CurrentContext)&&"function"==typeof e.emit&&e.emit("loaded:project")}):i():n()}var s;c()}();