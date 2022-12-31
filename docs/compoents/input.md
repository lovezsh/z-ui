# input - 输入框

## 基础用法

<div class="z-wrap">
  <input type="text" class="z-input">
</div>

::: details 查看代码
```html
<div class="z-wrap">
  <input type="text" class="z-input">
</div>
```
:::

## 标题 label

<div class="z-wrap">
  <label>标题: </label>
  <input type="text" class="z-input">
</div>

::: details 查看代码
```html
<div class="z-wrap">
  <input type="text" class="z-input">
</div>
```
:::

## 进阶用法

更复杂的使用场景.

## 一行两个

<div class="z-wrap">
  <div class="z-item">
    <label>昵称: </label>
    <input type="text" class="z-input">
  </div>
  <div class="z-item">
    <label>邮箱: </label>
    <input type="text" class="z-input">
  </div>
</div>

::: details 查看代码
```html
<div class="z-wrap">
  <div class="z-item">
    <label>昵称: </label>
    <input type="text" class="z-input">
  </div>
  <div class="z-item">
    <label>邮箱: </label>
    <input type="text" class="z-input">
  </div>
</div>
```
:::

---

## 一行三个

可增加 `column` 调整为上下结构。

<div class="z-wrap">
  <div class="z-item column">
    <label>昵称: </label>
    <input type="text" class="z-input">
  </div>
  <div class="z-item column">
    <label>邮箱: </label>
    <input type="text" class="z-input">
  </div>
  <div class="z-item column">
    <label>网站: </label>
    <input type="text" class="z-input">
  </div>
</div>

::: details 查看代码
```html
<div class="z-wrap">
  <div class="z-item column">
    <label>昵称: </label>
    <input type="text" class="z-input">
  </div>
  <div class="z-item column">
    <label>邮箱: </label>
    <input type="text" class="z-input">
  </div>
  <div class="z-item column">
    <label>网站: </label>
    <input type="text" class="z-input">
  </div>
</div>
```
:::

---

| 类名        |      作用      |
| ----------- | :-----------: |
| z-input     | input 框基础样式 |
| z-input column      | 将 label 和 input 调整为上下结构 |