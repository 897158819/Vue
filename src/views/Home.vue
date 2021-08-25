<template>
  <div class="home">
    <el-container>
      <el-header>
        <el-row class="home_header_nav">
            <el-col :span="3" :offset="3"><div>logo</div></el-col>
            <el-col :span="2">发现音乐</el-col>
            <el-col :span="2">我的音乐</el-col>
            <el-col :span="1">朋友</el-col>
            <el-col :span="1">商城</el-col>
            <el-col :span="1">音乐人</el-col>
            <el-col :span="2">下载客户端</el-col>
            <el-col :span="3"><input placeholder ="音乐/视频/电台/用户"/></el-col>
            <el-col :span="2"><div>创作者中心</div></el-col>
            <el-col :span="1"><div>nihao</div></el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>

      </el-footer>
    </el-container>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>
.el-header,.el-main{
  padding:0px !important;
}
.el-header{
  height:70px !important;
}

</style>
