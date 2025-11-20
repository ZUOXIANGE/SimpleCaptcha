# SimpleCaptcha

基于 ASP.NET Core 的 SVG 验证码示例，包含“数学题验证码”和“字母数字验证码”。支持通过 `level=low|medium|high` 调整干扰强度。

## 说明
- 干扰包含噪线、散点、曲线、滤镜扭曲、局部遮挡、混合模式
- 验证成功后验证码失效，默认过期 120 秒
