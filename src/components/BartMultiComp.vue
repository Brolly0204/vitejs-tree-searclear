<script setup>
import { ref, markRaw, getCurrentInstance, onMounted, onUnmounted } from 'vue';
const mainRef = ref();
const chartRef = ref();
const { proxy } = getCurrentInstance();

const rawData = [
  [100, 302, 301, 334, 390, 330, 320],
  [320, 132, 101, 134, 90, 230, 210],
  [220, 182, 191, 234, 290, 330, 310],
  [150, 212, 201, 154, 190, 330, 410],
  [820, 832, 901, 934, 1290, 1330, 1320],
];
const totalData = [];
for (let i = 0; i < rawData[0].length; ++i) {
  let sum = 0;
  for (let j = 0; j < rawData.length; ++j) {
    sum += rawData[j][i];
  }
  totalData.push(sum);
}
const grid = {
  left: 100,
  right: 100,
  top: 50,
  bottom: 50,
};
const series = [
  'Direct',
  'Mail Ad',
  'Affiliate Ad',
  'Video Ad',
  'Search Engine',
].map((name, sid) => {
  return {
    name,
    type: 'bar',
    stack: 'total',
    barWidth: '60%',
    label: {
      show: true,
      formatter: (params) => Math.round(params.value * 1000) / 10 + '%',
    },
    data: rawData[sid].map((d, did) =>
      totalData[did] <= 0 ? 0 : d / totalData[did]
    ),
  };
});
console.log(totalData);
console.log('series', series);
const option = {
  legend: {
    selectedMode: false,
  },
  grid,
  yAxis: {
    type: 'value',
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  series,
};

// console.log(positive, negative, topData);
onMounted(() => {
  chartRef.value = markRaw(proxy.$echarts.init(mainRef.value, 'dark', {}));
  chartRef.value.setOption(option);
});

const resizeFn = () => {
  if (chartRef.value) {
    console.log('resize');
    chartRef.value.resize();
  }
};

onMounted(() => {
  console.log('onMounted');
  window.addEventListener('resize', resizeFn);
});
onUnmounted(() => {
  console.log('onUnmounted');
  chartRef.value.dispose();
  window.removeEventListener('resize', resizeFn);
});

defineOptions({
  name: 'BartMultiComp',
});

defineProps({
  msg: String,
});

const count = ref(0);
</script>
<template>
  <h1>{{ msg }}</h1>
  <div ref="mainRef" class="bar"></div>
</template>

<style scoped>
.bar {
  width: 100%;
  height: 80vh;
}
</style>
