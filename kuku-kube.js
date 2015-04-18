d=function(){
	var box=$('#box span');
	var first, second;
	var index=[0,0];
	var counter=[0,0];
	first=$(box[0]).css('background-color').toString();
	second=$(box[0]).css('background-color').toString();

	box.each(function(i,e){
		var item= $(e).css('background-color').toString();
	
		if (item==first){
			// console.log('first');
			counter[0]+=1;
			index[0]=i;
		}else{
			// console.log('second'+i);
			counter[1]+=1;
			index[1]=i;
		}
		
	});
	var clickItem=0; var diffItem=0
	if (counter[0]==1) {clickItem=index[0]; diffItem=1;}
	if (counter[1]==1) {clickItem=index[1]; diffItem=0;}
	var diffColor=$(box[clickItem]).css('background-color').toString();
	var sameColor=$(box[diffItem]).css('background-color').toString();
	console.log(sameColor);
	$(box[clickItem]).css('background-color',sameColor).click();

}

var mytimeOut;
var intrVal=3000; //change this for the awesomeness

//awesome
var steps=700;
var limitIntrval=300;
var repeatNo=2;

var stop=false;
var cnt=0;

function awesome(howmuch, howmany){

	
		mytimeOut= setInterval(function(){ 
				cnt++;
				console.log(cnt);
				if (!stop) d();
				
				if (cnt>=howmany && howmuch-steps>limitIntrval){

					console.log('second');
					cnt=0;
					stop=true;
					clearInterval(mytimeOut);
					awesome(howmuch-steps, howmany);
					stop=false;
					
				}else if (howmuch-steps<limitIntrval){

					console.log('third');
					cnt=0;
					stop=true;
					clearInterval(mytimeOut);
					awesome(limitIntrval, howmany);
					stop=false;

				}

				if ($('.time').text()==0) clearInterval(mytimeOut);
			}, howmuch);
}

$('body').bind('keypress', function(e) {
	console.log(e.keyCode);
	//auto a 97
	//stop d/s 100
	//do it once w  119

	if (e.keyCode==100 || e.keyCode==115){
		clearInterval(mytimeOut);
	}
	if (e.keyCode==97){
		console.log('a');
		d();
		mytimeOut= setInterval(function(){ d(); }, intrVal);	
	}
	if (e.keyCode==119){
		d();
	}
	if (e.keyCode==120 || e.keyCode==46){
		console.log('x');
		awesome(intrVal,repeatNo);
		
	}

});

document.oncontextmenu = function() {return false;};

$(document).mousedown(function(e){ 
    if( e.button == 2 ) { 
      d();
      return false; 
	} 	
});