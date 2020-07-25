//转换为从头到尾，调换一下顺序（？不知道会不会影响复杂度）
function last_length(s){
				if(s.length == 0){
					return 0;
				}
				// for(i=s.length-1;i--){
					
				// }
				var count=0;
				
				for(var i=1;i<s.length;i++){
					if(s[s.length-i]!==' '){
						count++;
				}
				if(s[s.length-i]==' '){
					alert(count);
					return count;
				}	
				}
				// while(s[s.length]!==" "){
				// 	count++;
				// }
				return count;
			}
			var s = "hello world";
			console.log(last_length(s));