<template>
  <div id="docx"></div>
</template>

<script>
import jsPreviewDocx from '@js-preview/docx';
import '@js-preview/docx/lib/index.css';

export default {
  components: {},
  data() {
    return {
      docx: 'http://static.shanhuxueyuan.com/test6.docx', //设置文档网络地址，可以是相对地址
    };
  },
  mounted() {
    //初始化时指明要挂载的父元素Dom节点
    const myDocxPreviewer = jsPreviewDocx.init(document.getElementById('docx'));

    //传递要预览的文件地址即可
    myDocxPreviewer
      .preview(
        'https://501351981.github.io/vue-office/examples/dist/static/test-files/test.docx'
      )
      .then((res) => {
        console.log('预览完成');
      })
      .catch((e) => {
        console.log('预览失败', e);
      });
  },
  methods: {
    rendered() {
      console.log('渲染完成');
    },
  },
};
</script>
