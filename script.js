var removeBlue=document.getElementById('removeBlue'),
    removeRed=document.getElementById('removeRed'),
    addNewStyle=document.getElementById('addNewStyle');


function deleteClass(theClass){
	var theStyleSheets=document.styleSheets;
	var ruleSelector=null;
	var pattern=new RegExp('('+theClass+')'+'\\s*'+'{');

	for(var i=0; i< theStyleSheets.length; i++){
		for(var j=0; j<theStyleSheets[i].cssRules.length;j++){
			ruleSelector=theStyleSheets[i].cssRules[j].cssText;
			if(pattern.test(ruleSelector)){
			  theStyleSheets[i].deleteRule(j);
			}
		}
	}
}

function newStyle(){
  var newStyleElement=document.createElement('style');
  document.head.appendChild(newStyleElement);
  var newStyleSheet=newStyleElement.sheet;
  newStyleSheet.insertRule('#description{font-size:1.1em;margin-left:25%;}',newStyleSheet.cssRules.length);
  newStyleSheet.insertRule('div.square-corners{height:75px;width:75px}',newStyleSheet.cssRules.length);
  newStyleSheet.insertRule('div.rounded-corners{height:75px;width:75px}',newStyleSheet.cssRules.length);
  newStyleSheet.insertRule('div.circular{height:75px;width:75px}',newStyleSheet.cssRules.length);
  newStyleSheet.insertRule('h2{color:#383838}',newStyleSheet.cssRules.length);
}

removeBlue.addEventListener('click',function(event){
  deleteClass('blue');
});
removeRed.addEventListener('click',function(event){
  deleteClass('red');
});

addNewStyle.addEventListener('click',function(event){
  newStyle();
})
