import Vue from 'vue'
import VueRouter from 'vue-router'
import About from './../site/About.vue'
import Contact from './../site/Contact.vue'
import Index from './../site/Index.vue'
import uploadFile from './../convertfile/uploadFile.vue'


Vue.use(VueRouter)

const router =  new VueRouter({
    routes:[
        {
            path:'/',
            component: Index
        },
        {
            path:'/about',
            component: About
        },
        {
            path:'/contact',
            component: Contact
        },
        {
            path:'/uploadFile',
            component: uploadFile
        },
    ]
})

export default router