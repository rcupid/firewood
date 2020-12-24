
(function () {
  window.RUNTIME_CONFIG = window.RUNTIME_CONFIG || JSON.parse(window.localStorage.getItem('RUNTIME_CONFIG'))
  const domain = window.location.hostname.split('.')[2]
  if (domain !== 'zybang' && domain !== 'suanshubang') {
    return
  }
  const proxyServer = `http://yike.proxy.${domain}.com`
  const maxPort = 6030
  const minPort = 6001
  const hostTable = [
    {
      name: '本机',
      value: '',
    },
  ]
  for (let i = minPort; i <= maxPort; i++) {
    hostTable.push({
      name: i,
      value: `${proxyServer}:${i}`,
    })
  }
  const template = `
    <div id="RUNTIME">环境配置</div>
    <div id="INTERFACERUNTIME">
      <div class="box">
        <span class="title">接口服务器</span>
        <select id="runtime-host" name="">
          ${hostTable.map(v => `<option ${(!window.RUNTIME_CONFIG && !v.value) || v.name == (window.RUNTIME_CONFIG && window.RUNTIME_CONFIG.name) ? 'selected' : ''} value=${v.value}>${v.name}</option>`)}
        </select>
        <div class="buttons">
          <button class="confirm">确认</button>
          <button class="cancel">取消</button>
        </div>
        <i></i>
      </div>
    </div>
    <style>
      #RUNTIME {
        position: fixed;
        bottom: 50px;
        left : 30px;
        width: 40px;
        height: 40px;
        font-size: 14px;
        text-align: center;
        color: #fff;
        background: rgba(0,0,0,.3);
        z-index: 9998;
      }
      #INTERFACERUNTIME {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #ccc;
        justify-content: center;
        align-items: center;
        display: none;
        z-index: 9999;
      }
      .box {
        font-size: 12px;
      }
      #runtime-host {
        background: #fff;
      }
    </style>
  `
  const container = document.createElement('div')
  container.innerHTML = template
  document.body.appendChild(container)
  const runtimeButton = document.querySelector('#RUNTIME')
  const hostInterface = document.querySelector('#INTERFACERUNTIME')
  const cancelButton = document.querySelector('#INTERFACERUNTIME .cancel')
  const confirmButton = document.querySelector('#INTERFACERUNTIME .confirm')
  const runtimeHost = document.querySelector('#runtime-host')
  runtimeButton.addEventListener('click', () => {
    hostInterface.style.display = 'flex'
  })
  cancelButton.addEventListener('click', () => {
    hostInterface.style.display = 'none'
  })
  confirmButton.addEventListener('click', () => {
    const config = {
      value: runtimeHost.options[runtimeHost.selectedIndex].value,
      name: runtimeHost.options[runtimeHost.selectedIndex].text,
    }
    window.localStorage.setItem('RUNTIME_CONFIG', JSON.stringify(config))
    window.location.reload()
  })
}())
