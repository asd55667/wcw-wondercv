export function hasClass(el, className) {
  return el.classList.contains(className)
}

export function addClass(el, className) {
  el.classList.add(className)
}

export function getData(el, name, val) {
  const prefix = 'data-'
  if (val) {
    return el.setAttribute(prefix + name, val)
  }
  return el.getAttribute(prefix + name)
}

let elementStyle = document.createElement('div').style

let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform',
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false
})()

export function prefixStyle(style) {
  if (vendor === false) {
    return false
  }

  if (vendor === 'standard') {
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}

export function hasParent(dom, parentDom) {
  parentDom = Array.isArray(parentDom) ? parentDom : [parentDom]
  while (dom) {
    if (parentDom.find(p => p === dom)) {
      return true
    } else {
      dom = dom.parentNode
    }
  }
}

export function scrollInto(dom) {
  dom.scrollIntoView({ behavior: 'smooth' })
}

export const cloneNode = function(node, javascriptEnabled) {
  // Recursively clone the node.
  let clone =
    node.nodeType === 3
      ? document.createTextNode(node.nodeValue)
      : node.cloneNode(false)
  for (let child = node.firstChild; child; child = child.nextSibling) {
    if (
      javascriptEnabled === true ||
      child.nodeType !== 1 ||
      child.nodeName !== 'SCRIPT'
    ) {
      clone.appendChild(cloneNode(child, javascriptEnabled))
    }
  }

  if (node.nodeType === 1) {
    // Preserve contents/properties of special nodes.
    if (node.nodeName === 'CANVAS') {
      clone.width = node.width
      clone.height = node.height
      clone.getContext('2d').drawImage(node, 0, 0)
    } else if (node.nodeName === 'TEXTAREA' || node.nodeName === 'SELECT') {
      clone.value = node.value
    }

    // Preserve the node's scroll position when it loads.
    clone.addEventListener(
      'load',
      function() {
        clone.scrollTop = node.scrollTop
        clone.scrollLeft = node.scrollLeft
      },
      true,
    )
  }

  // Return the cloned node.
  return clone
}

export const EMPTY_IMG =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
