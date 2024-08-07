export const useCategory = defineStore('category',()=>{
const activeId = ref<number>(1)

const setActiveId = (newActiveID:number):number=>{
return activeId.value=newActiveID
}

return {activeId,setActiveId}
})