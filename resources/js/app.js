import "./bootstrap";

let lists = document.querySelectorAll(".list");
let parents = document.querySelectorAll(".parent");

lists.forEach((list) => {
    list.addEventListener("dragstart", (e) => {
        let selected = e.target;
        let this_parent = selected.parentElement;
        console.log(this_parent);

        parents.forEach((parent) => {
            parent.addEventListener("dragover", (e) => {
                e.preventDefault();
            })
            parent.addEventListener("drop", (e) => {
                parent.appendChild(selected);
                this_parent.appendChild(parent.children[0])
                selected = null;
            })
        })
    })

    
})
