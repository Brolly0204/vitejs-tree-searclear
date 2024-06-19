<script setup>
import { ref, markRaw, getCurrentInstance, onMounted, onUnmounted } from 'vue';
const mainRef = ref(null);
const secondRef = ref(null);
const thridRef = ref(null);
const chartRef = ref();
const secChartRef = ref();
const thirChartRef = ref();
const { proxy } = getCurrentInstance();
onMounted(() => {
  const option = {
    tooltip: {
      trigger: 'item',
      axisPointer: {
        //type: 'shadow',
      },
      formatter(params) {
        if (!Array.isArray(params)) {
          const {
            name,
            data: { info = {} },
          } = params;
          console.log(params);
          const content = Object.keys(info)
            .map((key) => {
              return `${key}: ${info[key]}`;
            })
            .join('<br>');
          return `
               ${name} <br>
              ${content}
            `;
        }
        return 111;
      },
    },
    legend: {
      data: ['合同金额', '已支付金额', '未支付金额'],
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: ['账户1', '账户2', '账户3', '账户4', '账户5'],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '未支付金额',
        type: 'bar',
        stack: 'a',
        data: [
          {
            value: 10,
            info: {
              a: 8,
              b: 8,
              c: 10,
            },
          },
        ],
        label: {
          show: true,
        },
      },
      {
        name: '已支付金额',
        type: 'bar',
        stack: 'a',
        data: [
          {
            value: 8,
            info: {
              a: 8,
              b: 8,
              c: 10,
            },
          },
        ],
        label: {
          show: true,
        },
      },
      {
        name: '合同金额',
        type: 'bar',
        stack: 'a',
        data: [
          {
            value: 8,
            info: {
              a: 8,
              b: 8,
              c: 10,
            },
          },
        ],
        label: {
          show: true,
        },
      },
      {
        name: '未支付金额',
        type: 'bar',
        stack: 'b',
        data: [5],
        label: {
          show: true,
        },
      },
      {
        name: '已支付金额',
        type: 'bar',
        stack: 'b',
        data: [6],
        label: {
          show: true,
        },
      },
      {
        name: '合同金额',
        type: 'bar',
        stack: 'b',
        data: [7],
        label: {
          show: true,
        },
      },
      {
        name: '未支付金额',
        type: 'bar',
        stack: 'c',
        data: [7],
        label: {
          show: true,
        },
      },
      {
        name: '已支付金额',
        type: 'bar',
        stack: 'c',
        data: [5],
        label: {
          show: true,
        },
      },
      {
        name: '合同金额',
        type: 'bar',
        stack: 'c',
        data: [3],
        label: {
          show: true,
        },
      },
      {
        name: '未支付金额',
        type: 'bar',
        stack: 'a',
        data: ['', 5],
        startIndex: 1,
      },
      {
        name: '已支付金额',
        type: 'bar',
        stack: 'a',
        data: ['', 6],
        startIndex: 1,
      },
      {
        name: '合同金额',
        type: 'bar',
        stack: 'a',
        data: ['', 8],
      },
      {
        name: '未支付金额',
        type: 'bar',
        stack: 'b',
        data: ['', 6],
      },
      {
        name: '已支付金额',
        type: 'bar',
        stack: 'b',
        data: ['', 10],
      },
      {
        name: '合同金额',
        type: 'bar',
        stack: 'b',
        data: ['', 8],
      },
    ],
  };
  chartRef.value = markRaw(proxy.$echarts.init(mainRef.value, 'dark', {}));
  chartRef.value.setOption(option);
});

defineOptions({
  name: 'BarTestComp',
});

defineProps({
  msg: String,
});

const count = ref(0);
</script>
<template>
  <div class="bar-container">
    <div ref="mainRef" class="bar"></div>
  </div>
</template>

<style scoped>
.bar-container {
  display: flex;
}
.bar {
  flex: 1;
  height: 80vh;
  min-width: 407px;
}
</style>
