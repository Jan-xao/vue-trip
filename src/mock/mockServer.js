/**
 * 使用mockjs来mock数据, 提供mock数据API接口
 */
import Mock from 'mockjs'
import data from './data.json'

// 注册接口
// Mock.mock( rurl, template )
// 当拦截到匹配 rurl 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回
Mock.mock('/api1/users', {
  code: 0,
  data: data
})

// 不用export