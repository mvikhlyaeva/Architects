 var test = document.querySelectorAll('img');
 var first = true;
 var t;
 var i;

for(let k=0;k<4;k++)
 test[k].onclick = function() {
 	if(first){
 		t = test[k].getAttribute('src');
 	    i = k;
 	    first = false;
 	    test[k].style.cssText = "border: 5px solid #888;";
 	    console.log("1");
 	}
 	else{
        test[i].setAttribute ('src',test[k].getAttribute('src'));
        test[k].setAttribute ('src', t);
        first = true;
        test[i].style.cssText = "border: none;";
        console.log("2");
 	}    
}
