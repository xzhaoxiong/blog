// r就是resolve
const home = r => require.ensure([], () => r(require('@/views/Home.vue')), 'home');
const login = r => require.ensure([], () => r(require('@/views/login.vue')), 'login');
const about = r => require.ensure([], () => r(require('@/views/About.vue')), 'about');
// 路由也是正常的写法  这种是官方推荐的写的 按模块划分懒加载
const routes = [ 
    {
        path: '/',
        component:resolve => require(['@/views/Home'],resolve)
    },
    {
        path: '/login',
        component:resolve => require(['@/views/login'],resolve)
        }
        ,
        {
            path: '/about',
            component:resolve => require(['@/views/About'],resolve)
            }
]; 

export default routes;