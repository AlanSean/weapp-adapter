import Canvas from './Canvas'

export { default as document } from './document'
export { default as navigator } from './navigator'
export { default as XMLHttpRequest } from './XMLHttpRequest'
export { default as WebSocket } from './WebSocket'
export { default as Image } from './Image'
export { default as Audio } from './Audio'
export { default as FileReader } from './FileReader'
export { default as HTMLElement } from './HTMLElement'
export { default as localStorage } from './localStorage'
export { default as location } from './location'
export * from './WindowProperties'
export * from './constructor'

// 暴露全局的 canvas
const canvas = new Canvas()

export { canvas }
export { setTimeout }
export { setInterval }
export { clearTimeout }
export { clearInterval }
export { requestAnimationFrame }
export { cancelAnimationFrame }
