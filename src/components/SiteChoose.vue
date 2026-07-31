<template>
  <el-select v-model="value" placeholder="Select" style="width: 300px">
    <el-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      <span style="float: left">{{ item.label }}</span>
      <span
        style="
          float: right;
          color: var(--el-text-color-secondary);
          font-size: 13px;
        "
      >
        {{ item.value }}
      </span>
    </el-option>
  </el-select>
  <el-button type="primary" plain @click="open">跳转</el-button>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value = ref("");
const cities = [
  {
    value: "个人主页网站",
    label: "hi.mcenahle.page",
  },
  {
    value: "邮箱系统",
    label: "mail.mcenahle.page",
  },
  {
    value: "个人博客网站",
    label: "blog.mcenahle.page",
  },
];

const open = () => {};
</script>
