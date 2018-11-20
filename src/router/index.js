import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./router.js"
// import {setTitle} from "@/lib/util.js"
Vue.use(VueRouter)

const router = new VueRouter({ 
    routes 
})

// Vue.use(Router)
// const router=new  Router({
// 	routes
// })
// const IS_LOGIN=true   //根据存储在cookie的登录信息判断是否登录的判断

router.beforeEach((to,form,next)=>{  //router实例的beforeEach方法是注册一个全局前置守卫，从from路由对象到to路由对象，即禁止在没有登录情况下，在网址栏输入admin会跳转到admin页面。
        next()
        // console.log('beforeEach',to,form,next)
})

// router.beforeResolve((to,form,next)=>{  //router实例的beforeResolve方法是注册一个全局守卫，从from路由对象到to路由对象，即页面跳转前所有钩子执行完最后执行该函数 ，

// })

// router.afterEach((to,form)=>{  //router实例的afterEach方法是注册一个全局后置守卫，从from路由对象到to路由对象，即页面跳转之后执行，
// 	//loading=false
// })

export default router;

/**
 * 1. 导航被触发
 * 2. 在失活的组件（即将离开的页面组件）里调用离开守卫 beforeRouteLeave
 * 3. 调用全局的前置守卫 beforeEach
 * 4. 在重用的组件里调用 beforeRouteUpdate
 * 5. 调用路由独享的守卫 beforeEnter
 * 6. 解析异步路由组件
 * 7. 在被激活的组件（即将进入的页面组件）里调用 beforeRouteEnter
 * 8. 调用全局的解析守卫 beforeResolve
 * 9. 导航被确认
 * 10. 调用全局的后置守卫 afterEach
 * 11. 触发DOM更新
 * 12. 用创建好的实例调用beforeRouterEnter守卫里传给next的回调函数
 */
