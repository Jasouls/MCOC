import axios from 'axios'

// 首页新闻推荐
export function request1(config) {
  let instance = axios.create()
  instance.interceptors.response.use(
    config => {
      const res = config.data.result.list
      return res
    },
    error => {
      return error
    }
  )
  return instance(config)
}

// 新闻中心
export function request2(config) {
  let instance = axios.create()
  instance.interceptors.response.use(
    config => {
      let res = config.data.result.list
      res = res.filter((item, index) => index < 3)
      return res
    },
    error => {
      return error
    }
  )
  return instance(config)
}

// news/now
export function request3(config) {
  let instance = axios.create()
  instance.interceptors.response.use(
    config => {
      let res = config.data.result.list
      return res
    },
    error => {
      return error
    }
  )
  return instance(config)
}

// herolist
export function request4(config) {
  let instance = axios.create()
  instance.interceptors.response.use(
    config => {
      let res = config.data.hero
      return res
    },
    error => {
      return error
    }
  )
  return instance(config)
}

// herolist-1
export function request5(config) {
  let instance = axios.create()
  instance.interceptors.response.use(
    config => {
      let res = config.data.hero
      res = res.filter(item => item.type === '宇宙系')
      return res
    },
    error => {
      return error
    }
  )
  return instance(config)
}
// herolist-2
export function request6(config) {
  let instance = axios.create()
  instance.interceptors.response.use(
    config => {
      let res = config.data.hero
      res = res.filter(item => item.type === '科技系')
      return res
    },
    error => {
      return error
    }
  )
  return instance(config)
}
// herolist-3
export function request7(config) {
  let instance = axios.create()
  instance.interceptors.response.use(
    config => {
      let res = config.data.hero
      res = res.filter(item => item.type === '变异系')
      return res
    },
    error => {
      return error
    }
  )
  return instance(config)
}
// herolist-4
export function request8(config) {
  let instance = axios.create()
  instance.interceptors.response.use(
    config => {
      let res = config.data.hero
      res = res.filter(item => item.type === '格斗系')
      return res
    },
    error => {
      return error
    }
  )
  return instance(config)
}
// herolist-5
export function request9(config) {
  let instance = axios.create()
  instance.interceptors.response.use(
    config => {
      let res = config.data.hero
      res = res.filter(item => item.type === '生化系')
      return res
    },
    error => {
      return error
    }
  )
  return instance(config)
}
// herolist-6
export function request10(config) {
  let instance = axios.create()
  instance.interceptors.response.use(
    config => {
      let res = config.data.hero
      res = res.filter(item => item.type === '神秘系')
      return res
    },
    error => {
      return error
    }
  )
  return instance(config)
}
