;(function(){
  'use strict';

  new Vue({
    // 数据仓库
    el:'#main',
    data:{
      list:[],
      // 输入的数据属于谁
      current:{}

      },
      
      methods:{

        // 添加数据的方法
        add: function(){
          // 不接受空数据和空格
          var current =this.current;
          // 如果有数据和如果数据不为0才产生数据
          if(!current && current.title !=0){
            return;
          }
          // 数据每次提交都拷贝一次
          var todo = Object.assign({}, this.current);
          // 收到数据推送进currentt
          this.list.push(todo);
        },

        // 修改数据的方法
        updata: function(){

        },
        // 删除数据的方法
        remove:function(id){

          this.list.splice(id,1);
        }
      }

    
  });
})()