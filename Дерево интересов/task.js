const arrayInterests = Array.from(document.querySelectorAll(".interest"))

const mainInterests = arrayInterests.filter((item)=>item.querySelector("ul")!=null)
// const notMainInterests = arrayInterests.filter((item)=>item.querySelector("ul") == null)
// const notMainCheckBox = notMainInterests.map((item) => item.querySelector('label').getElementsByClassName("interest__check")[0])
// console.log(notMainCheckBox)
const mainCheckBox = mainInterests.map((item) => item.querySelector('label').getElementsByClassName("interest__check")[0])

mainCheckBox.map(item => item.onclick = ()=>{
    console.log(item.checked)
    const grupCheck = Array.from(item.closest('li').querySelectorAll('label'))
    for ( i = 0;i<grupCheck.length;i++){
        grupCheck[i].getElementsByClassName("interest__check")[0].checked = item.checked
    }
    

 
})


