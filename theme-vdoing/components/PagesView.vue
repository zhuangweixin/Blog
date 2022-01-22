<template>
  <div class="page-view">
    <!-- 文章字数 -->
    <div title="文章字数" class="book-words iconfont icon-book">
      <a href="javascript:;" style="margin-left: 3px; color: #888">{{
        wordsCount
      }}</a>
    </div>

    <!-- 预阅读时长 -->
    <div v-if="readingTime" title="预阅读时长" class="reading-time iconfont icon-shijian">
      <a href="javascript:;" style="margin-left: 3px; color: #888">{{
        readingTime
      }}</a>
    </div>
    <!-- 浏览量 -->
    <div v-if="pageView" title="浏览量" class="page-view iconfont icon-view">
      <a
        style="color: #888; margin-left: 3px"
        href="javascript:;"
        id="busuanzi_value_page_pv"
        class="view-data"
        ><i title="正在获取..." class="loading iconfont icon-loading"></i
      ></a>
    </div>
  </div>
</template>

<script>
let busuanzi;
export default {
  data() {
    return {
      // Young Kbt
      wordsCount: 0,
      readingTime: 0,
      pageView: true,
      pageIteration: 3000,
    };
  },
  mounted() {
    this.$filterPosts.forEach((itemPage) => {
      if (itemPage.path == this.$route.path) {
        const { eachFileWords, pageView, pageIteration, readingTime } =
          this.$themeConfig.blogInfo;
        this.pageIteration = pageIteration;
        if (eachFileWords) {
          eachFileWords.forEach((itemFile) => {
            if (itemFile.permalink == itemPage.frontmatter.permalink) {
              this.wordsCount = itemFile.wordsCount;
              if (readingTime || readingTime == undefined) {
                this.readingTime = itemFile.readingTime;
              }else {
                this.readingTime = false;
              }
            }
          });
        }
        this.pageView = pageView == undefined ? true : pageView;
        if(this.pageView){
          this.getPageViewCouter(this.pageIteration);
        }
        return;
      }
    });
  },
  watch: {
    $route(to, from) {
      if (from.path === '/' && from.matched && from.matched.length === 0) {    // 如果页面是刷新或者第一次进入
        // 刷新或者第一次进入不需要在这里重新获取
      }else if (to.path !== '/' && to.path != from.path) {
        if(this.pageView){
          this.getPageViewCouter(this.pageIteration);
        }
      }
    }
  },
  methods: {
    /**
     * 文章页的访问量
     */
    getPageViewCouter(iterationTime = 3000) {
      if (busuanzi) {
        busuanzi.fetch();
      } else {
        busuanzi = require("busuanzi.pure.js");
      }
      var i = 0;
      var defaultCouter = "9999";
      // 如果 require 没有获取成功，则手动获取
      // 但是容易产生访问量叠加，如果只需要第一次获取数据（可能获取失败），可注释掉，此内容是第一次获取失败后，重新获取访问量，可能导致访问量再次 + 1
      // 取决于访问人的网络，以及 setTimeout 的时间（需求调节）
      setTimeout(() => {
        let interval = setInterval(() => {
          const pageView = document.querySelector(".view-data");
          if (pageView) {
            i += iterationTime;
            if (i > iterationTime * 10) {
              pageView.innerText = defaultCouter;
              clearInterval(interval); // 10 秒后无法获取，则取消获取
            }
            if (pageView.innerText == "") {
              // 手动获取访问量
              busuanzi.fetch();
            } else {
              clearInterval(interval);
            }
          } else {
            clearInterval(interval);
          }
        }, iterationTime);
      }, iterationTime);
    },
  },
};
</script>

<style scoped>
.page-view > div {
  float: left;
  margin-left: 20px;
  font-size: 0.8rem;
}

@keyframes turn {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.loading {
  display: inline-block;
  animation: turn 1s linear infinite;
  -webkit-animation: turn 1s linear infinite;
}
</style>
