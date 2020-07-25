function arr_add1(arr){
	arr[arr.length-1]+=1;
	for(var i=0; i<arr.length-1; i++){
		if(arr[arr.length-1-i]>=10){
			arr[arr.length-1-i]=arr[arr.length-1]%10;
			arr[arr.length-2-i]++;
		}
	}
	if(arr[0]>=10){
		for(var i =0 ; i<arr.length-1;i++){
			arr[arr.length-i]=arr[arr.length-i-1];
		}
		arr[1]=arr[0]%10;
		arr[0]=parseInt(arr[0]/10);
	}
	alert(arr);
}
var arr=[9,9,9];
arr_add1(arr);
