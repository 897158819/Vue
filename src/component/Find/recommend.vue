<template>
    <div class="recommend">
        <div class="recommend_nav">
            <ul>
              <li>推荐</li>
              <li>排行榜</li>
              <li>歌单</li>
              <li>主播电台</li>
              <li>歌手</li>
              <li>新碟上架</li>
            </ul>
        </div>
        <div class="recommend_banner">

        </div>
        <div class="recommend_content">
          <div class="recommend_hot">
            <div class="hot_nav">
              <div class="hot_title">热门推荐</div>
              <ul>
                <li><a href="">华语</a></li>
                <li><a href="">流行</a></li>
                <li><a href="">摇滚</a></li>
                <li><a href="">民谣</a></li>
              </ul>
            </div>
          </div>
        </div>
    </div>
</template>

<style scoped>
.recommend{
  width: 100%;
  
}
.recommend_nav {
  background-color: red;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
}
.recommend_nav ul {
  width: 996px;
  margin: 0 auto;
  height: 30px;
}
.recommend_nav ul li{
  float: left;
  padding: 0 40px;
  color: white;
}
.recommend_nav ul li:first-child{
  margin-left: 30px;
}
.recommend_banner{
  height: 252px;
  /* background-color: yellow; */
}
.hot_title,.hot_nav ul li{
  float: left;
}
</style>