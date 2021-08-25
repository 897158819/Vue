import { ElButton, ElContainer, ElHeader, ElMain, ElFooter, ElRow,ElCol } from "element-plus";

const element = {
    install:function(Vue) {
        Vue.use(ElButton),
        Vue.use(ElContainer),
        Vue.use(ElHeader),
        Vue.use(ElMain),
        Vue.use(ElFooter),
        Vue.use(ElRow),
        Vue.use(ElCol)
    }
}
export default element