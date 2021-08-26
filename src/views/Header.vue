<template>
    <header class="header">
        <div class="header_nav">
            <div class="header_logo">logo</div>
            <ul>
                <li>发现音乐</li>
                <li>我的音乐</li>
                <li>朋友</li>
                <li>商城</li>
                <li>音乐人</li>
                <li>下载客户端</li>
            </ul>
            <div class="header_search"><input type="text" placeholder="音乐/视频/电台/用户"></div>
            <div class="header_framer">创作者中心</div>
            <div class="header_my">主页</div>
        </div>
    </header>
</template>

<style scoped>
.header{
    width:100%;
    background-color: #242424;
    color: #bcbcbc;
    height: 70px;
    line-height: 70px;
}
.header_nav{
    width:996px;
    margin: 0 auto;
}
.header_nav::after{
    content: " ";
    clear: both;
    display: block;
    width: 0;
    height: 0;
}
.header_logo:hover{
    cursor: pointer;
}
ul li{
    /* display: block; */
    padding:0 20px;
}
.header_logo,.header_nav ul li,.header_framer,.header_search,.header_my{
    float: left;
}

</style>