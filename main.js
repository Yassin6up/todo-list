const input = document.getElementById("input")
const btn = document.getElementById("btn")



btn.addEventListener("click", function() {


    if (input.value == '') {

    } else {
        let addELE = document.createElement("div")

        let text = document.createTextNode(`| ${input.value}`)
        let remove = document.createElement("button")
        let removtext = document.createTextNode("remov")

        addELE.className = "list"
        addELE.append(text)

        // btn remove
        remove.append(removtext)
        addELE.append(remove)
        remove.className = "remov"

        document.body.appendChild(remove)
        document.body.appendChild(addELE)
        input.value = ""
        remove.onclick = function(){
            addELE.remove()
            remove.remove();
        }
    }
    

})
