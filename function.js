const node_for_click_all = document.getElementById("for_click_all")
const node_for_click_first_p = document.getElementById("for_click_first_p")

function find_edit_all(){
    const p1  = document.getElementsByTagName('p')[1]
    console.log(p1.innerText)
    p1.innerText = 'new value for 1st paragraph'

    const p2  = document.getElementsByTagName('p')[2]
    console.log(p2.innerText)
    p2.innerText = 'new value for 2nd paragraph'
}

function find_edit_first_p(){
    const first_p = document.getElementsByTagName('p')[1]
    first_p.innerText = 'new value only for 1st paragraph'

}

node_for_click_all.addEventListener("click",find_edit_all)
node_for_click_first_p.addEventListener("click", find_edit_first_p)