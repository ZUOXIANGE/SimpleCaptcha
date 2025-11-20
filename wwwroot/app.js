// API 基地址（同域部署时为空字符串）
const apiBase = ''

// 当前数学/文字验证码的 ID
let mathId = null
let textId = null

// 刷新数学题：创建新验证码并加载图片
async function newMath() {
  const res = await fetch(`${apiBase}/api/captcha/math/new`)
  const data = await res.json()
  mathId = data.id
  const img = document.getElementById('mathImg')
  img.src = `${apiBase}/api/captcha/math/image/${mathId}?t=${Date.now()}`
  document.getElementById('mathStatus').textContent = ''
  document.getElementById('mathAnswer').value = ''
}


// 提交数学题答案进行校验
async function verifyMath() {
  const answer = parseInt(document.getElementById('mathAnswer').value, 10)
  if (!mathId || Number.isNaN(answer)) return
  const res = await fetch(`${apiBase}/api/captcha/math/verify`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: mathId, answer })
  })
  const data = await res.json()
  document.getElementById('mathStatus').textContent = data.success ? '验证通过' : '答案错误'
  if (data.success) mathId = null
}




// 绑定数学题按钮事件
document.getElementById('btnRefreshMath').addEventListener('click', newMath)
document.getElementById('btnVerifyMath').addEventListener('click', verifyMath)

newMath()

// 刷新文字验证码：创建新验证码并加载图片
async function newText() {
  const res = await fetch(`${apiBase}/api/captcha/text/new`)
  const data = await res.json()
  textId = data.id
  const img = document.getElementById('textImg')
  img.src = `${apiBase}/api/captcha/text/image/${textId}?t=${Date.now()}`
  document.getElementById('textStatus').textContent = ''
  document.getElementById('textInput').value = ''
}

// 提交文字内容进行校验（不区分大小写）
async function verifyText() {
  const value = document.getElementById('textInput').value
  if (!textId || !value) return
  const res = await fetch(`${apiBase}/api/captcha/text/verify`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: textId, text: value })
  })
  const data = await res.json()
  document.getElementById('textStatus').textContent = data.success ? '验证通过' : '输入错误'
  if (data.success) textId = null
}

// 绑定文字验证码按钮事件
document.getElementById('btnRefreshText').addEventListener('click', newText)
document.getElementById('btnVerifyText').addEventListener('click', verifyText)

newText()