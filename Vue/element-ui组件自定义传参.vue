<template>
    <div>
        组件自定义传参,以select为例，如果select写在循环里，触发change事件时可能不只需要传递被选中项的值，还要传递index过去，来改变同一循环中的其他标签的状态。 下面这样写是无效的：
        <div v-for="(item,index) in itemList">
            <el-select v-model="item.value" @change="changeStatus(val, index)">
                <el-option v-for="op in options" :key="op.key" :label="op.label"
                           :value="op.label"></el-option>
            </el-select>
        </div>
        这样再封装一层就可以了：
        <div v-for="(item,index) in itemList">
            <el-select v-model="item.value" @change="(val)=>{changeStatus(val, index)}">
                <el-option v-for="op in options" :key="op.key" :label="op.label"
                           :value="op.label"></el-option>
            </el-select>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                itemList: [],
                options: []
            }
        },
        methods: {
            changeStatus(v, i) {
            }
        }
    }
</script>