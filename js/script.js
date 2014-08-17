	
	
	function start(){
		//Name the function that will perform request
		var httpRequest;
		var jsonresponse;
		
		//cross browser instance
		if (window.XMLHttpRequest) { // Mozilla, Safari, ...
	      httpRequest = new XMLHttpRequest();
		} else if (window.ActiveXObject){ //if IE 8 and older
				httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
		}
		//send request
		httpRequest.onreadystatechange = httpResult; //what to do after response
		httpRequest.open("GET","http://data.mtgox.com/api/2/BTCUSD/money/ticker_fast?pretty", true);
		httpRequest.send();
		
		//function performed after request
		function httpResult(){
			if (httpRequest.readyState === 4 && httpRequest.status === 200){
					var response = JSON.parse(httpRequest.responseText);
					//alert(response.data.last.value)
					jsonresponse = response.data.last.display
					//alert(jsonresponse)
					
					document.getElementById("bitcoinprice").innerHTML=response.data.last.display
			}
		}
		
	}