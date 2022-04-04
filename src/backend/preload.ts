import * as lib from '../../index.node'

window.addEventListener('DOMContentLoaded', () => {

  const replaceText = (selector: string, text: string): void => {
    const element: any = document.getElementById(selector)
    if (element) {
      element.innerText = text
    }
  }

  const body = document.getElementById('versions')

  if (body) {
    body.innerHTML += '<h4 class="version-title">VERSIONS</h4>'
    for (const dependency of ['chrome', 'node', 'electron']) {
      let dep: string | undefined = process.versions[dependency]
      if (dep) replaceText(`${dependency}-version`, dep)
      body.innerHTML += `<p>${dependency}: ${dep}</p>`
    }

    body.innerHTML += '<br /><br /><h4 class="rust">RUST</h4>'
    const numberOfCPUs = lib.get_num_of_cpus()
    const hello = lib.hello()

    body.innerHTML += `<p>${hello}</p>`
    body.innerHTML += `<p>Number of CPUs: ${numberOfCPUs.toString()}</p>`
  }

})
