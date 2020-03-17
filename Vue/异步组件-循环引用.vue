<template>
    <div>
        异步组件,可解决循环引用等问题
    </div>
</template>
<script>
    export default {
        beforeCreate: function () {// 方案一
            this.$options.components.TreeFolderContents = require('./tree-folder-contents.vue').default
        },
        components: {//推荐使用 webpack的异步组件 通过 import 引入,异步组件的注册是一个箭头函数
            TreeFolderContents: () => import('./tree-folder-contents.vue')
        },
    }
</script>