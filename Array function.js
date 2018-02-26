;(function(){//判断一个数是不是数组元素
			Array.prototype.isArr = function(n){
				var flat=false;
				for(var i=0;i<this.length;i++){
					if(n===this[i]){
						flat=true;
						break;
					}
				}
				return flat;
		}
			//数组去重
			Array.prototype.distinct = function(){
				var newArr=[];
				var len=this.length;
				var obj={};
				for(var i=0;i<len;i++){
					var t = this[i];
					if(obj[t]===undefined){
						newArr.push(t);
						obj[t]='X';
					}
				}
				return newArr;
			}
			//数组元素出现的频率
			Array.prototype.count = function(){
				//var newArr=[];
				var len=this.length;
				var obj={};
				for(var i=0;i<len;i++){
					var t = this[i];
					if(!obj.hasOwnProperty(t)){//!(t in obj)
						obj[t]=1;
					}else{
						obj[t]+=1;
					}
				}
				return obj;
				}
			//找出数组中最大的元素
			Array.prototype.getMax=function(){
				var max = this[0];
				var len = this.length;
				for(var i=0;i<len;i++){
					max = max>this[i]?max:this[i]
				}
				return max;
			}
			//找出数组中最小的元素
			Array.prototype.getMin=function(){
				var min = this[0];
				var len = this.length;
				for(var i=0;i<len;i++){
					min = min<this[i]?min:this[i]
				}
				return min;
			}
			//求数组元素的平均数
			Array.prototype.avg = function(){
				var sn = 0;
				var len = this.length;
				for(var i=0;i<len;i++){
					sn += this[i];
				}
				return sn/len;
				
			}
			//克隆数组
			Array.prototype.clone = function(){
				var newArr = [];
				console.log(this)
				for(var i=0;i<this.length;i++){
					if(Array.isArray(this[i])){
						newArr.push(this[i].clone());
					}else{
						newArr.push(this[i]);
					}
				}
				return newArr;
			}
			})();
			
			