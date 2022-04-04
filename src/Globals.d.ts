declare module '*.module.css';

declare module '*.svg?inline' {
  const content: any
  export default content
}

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*index.node' {
  let hello: () => string
  let get_num_of_cpus: () => number
}
