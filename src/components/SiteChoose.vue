<template>
  <el-tabs type="border-card" tabPosition="left">
    <el-tab-pane label="主页网站">
      <p>
        现行状态：<el-tag type="success"
          ><el-icon><Check /></el-icon> 运行中</el-tag
        >
      </p>
      <p>
        个人主页网站中，主要提供了我的自我介绍，电子邮件等等信息。如有必要时，可通过该方式与我取得联系。
      </p>
      <el-button
        type="primary"
        plain
        tag="a"
        href="https://hi.mcenahle.page"
        target="_blank"
        rel="noopener noreferrer"
        style="margin-top: 12px"
      >
        跳转&nbsp;<el-icon> <TopRight /> </el-icon
      ></el-button>
    </el-tab-pane>
    <el-tab-pane label="邮箱系统">
      <p>
        现行状态：<el-tag type="success"
          ><el-icon><Check /></el-icon> 运行中</el-tag
        >
      </p>
      <p>邮箱系统用于接收 <code>i@mcenahle.page</code> 的所有邮箱及其发件。</p>
      <el-button
        type="primary"
        plain
        tag="a"
        href="https://mail.mcenahle.page"
        target="_blank"
        rel="noopener noreferrer"
        style="margin-top: 12px"
      >
        跳转&nbsp;<el-icon> <TopRight /> </el-icon
      ></el-button>
    </el-tab-pane>
    <el-tab-pane label="博客网站">
      <p>
        现行状态：<el-tag type="success"
          ><el-icon><Check /></el-icon> 运行中</el-tag
        >
      </p>
      <p>个人主要发文平台。</p>
      <el-button
        type="primary"
        plain
        tag="a"
        href="https://blog.mcenahle.page"
        target="_blank"
        rel="noopener noreferrer"
        style="margin-top: 12px"
      >
        跳转&nbsp;<el-icon> <TopRight /> </el-icon
      ></el-button>
    </el-tab-pane>
    <el-tab-pane label="DevDocs">
      <p>
        现行状态：<el-tag type="success"
          ><el-icon><Check /></el-icon> 运行中</el-tag
        >
      </p>
      <p>开发文档网站。</p>
      <el-button
        type="primary"
        plain
        tag="a"
        href="https://DevDocs.mcenahle.page"
        target="_blank"
        rel="noopener noreferrer"
        style="margin-top: 12px"
      >
        跳转&nbsp;<el-icon> <TopRight /> </el-icon
      ></el-button>
    </el-tab-pane>
    <el-tab-pane label="赞助页">
      <p>
        现行状态：<el-tag type="success"
          ><el-icon><Check /></el-icon> 运行中</el-tag
        >
      </p>
      <p>提供给我赞助的通道。</p>
      <el-button
        type="primary"
        plain
        tag="a"
        href="https://sponsor.mcenahle.page"
        target="_blank"
        rel="noopener noreferrer"
        style="margin-top: 12px"
      >
        跳转&nbsp;<el-icon> <TopRight /> </el-icon
      ></el-button>
    </el-tab-pane>
    <el-tab-pane label="公益记录">
      <p>
        现行状态：<el-tag type="success"
          ><el-icon><Check /></el-icon> 运行中</el-tag
        >
      </p>
      <p>记录我参与的所有公益记录。</p>
      <el-button
        type="primary"
        plain
        tag="a"
        href="https://charity.mcenahle.page"
        target="_blank"
        rel="noopener noreferrer"
        style="margin-top: 12px"
      >
        跳转&nbsp;<el-icon> <TopRight /> </el-icon
      ></el-button>
    </el-tab-pane>
    <el-tab-pane label="图床">
      <p>
        现行状态：<el-tag type="success"
          ><el-icon><Check /></el-icon> 运行中</el-tag
        >
      </p>
      <p>我的图床网站。不提供直接访问通道。</p>
    </el-tab-pane>
    <el-tab-pane label="图床管理">
      <p>
        现行状态：<el-tag type="success"
          ><el-icon><Check /></el-icon> 运行中</el-tag
        >
      </p>
      <p>管理我的图床。</p>
      <el-button
        type="primary"
        plain
        tag="a"
        href="https://admin.imgbed.mcenahle.page"
        target="_blank"
        rel="noopener noreferrer"
        style="margin-top: 12px"
      >
        跳转&nbsp;<el-icon> <TopRight /> </el-icon
      ></el-button>
    </el-tab-pane>
    <el-tab-pane label="mc 生存存档">
      <p>
        现行状态：<el-tag type="success"
          ><el-icon><Check /></el-icon> 运行中</el-tag
        >
      </p>
      <p>记录我的 mc 存档。</p>
      <el-button
        type="primary"
        plain
        tag="a"
        href="https://mss.mcenahle.page"
        target="_blank"
        rel="noopener noreferrer"
        style="margin-top: 12px"
      >
        跳转&nbsp;<el-icon> <TopRight /> </el-icon
      ></el-button>
    </el-tab-pane>
    <el-tab-pane label="证书存档网站">
      <p>
        现行状态：<el-tag type="success"
          ><el-icon><Check /></el-icon> 运行中</el-tag
        >
      </p>
      <p>记录我获得的所有证书。</p>
      <p style="color: red">需要通过验证才能访问内容。</p>
      <el-button
        type="primary"
        plain
        tag="a"
        href="https://certificates.mcenahle.page"
        target="_blank"
        rel="noopener noreferrer"
        style="margin-top: 12px"
      >
        跳转&nbsp;<el-icon> <TopRight /> </el-icon
      ></el-button>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { TopRight } from "@element-plus/icons-vue";
import { Check } from "@element-plus/icons-vue";
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
