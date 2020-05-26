// 这里就不是page了 是Component
Component({
	data:{
		
	},
	methods:{
		demo(e){
			console.log(e)
		}
	},
	// 父组件传递给子组件的参数
	properties:{
		// 类型 数组 
		info:Array
	}
})