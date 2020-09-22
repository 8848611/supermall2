import axios from 'axios'

export function request(config) {
        // 1.创建axios实例
        const instance = axios.create({
            baseURL: 'http://localhost:3000',
            timeout: 1000,
        })

        //2.1请求拦截器
        instance.interceptors.request.use(aa=>{
            //console.log(aa)//拿到请求参数
            // 用处: 1.在请求接口的时候,想让页面有个请求过程的图标
                    // 2.某些网络请求(比如登录(token)),必须携带一些信息
            return aa
        },err=>{
            console.log(err)
        })
        //2.2响应拦截器
        instance.interceptors.response.use(res=>{
            //console.log(res)
            return res
        },err=>{
            console.log(err)
        })
        // 3.发送网络请求
        return  instance(config) //axios本身返回的就是一个Promise对象
}