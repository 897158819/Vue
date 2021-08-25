<template>
    <div class="Find">
        <el-row>
            <el-col :span="2" :offset="6">推荐</el-col>
            <el-col :span="2">排行榜</el-col>
            <el-col :span="2">歌单</el-col>
            <el-col :span="2">主播电台</el-col>
            <el-col :span="2">歌手</el-col>
            <el-col :span="2">新碟上架</el-col>
        </el-row>
        <div class="Find_Content">
            <router-view/>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.el-row{
    height:30px;
    line-height: 30px;
    background-color: red;
    font-size: 12px;
    color: white;
}
</style>