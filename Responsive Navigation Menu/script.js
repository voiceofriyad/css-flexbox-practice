let open = document.getElementById ("open"),
    close = document.getElementById ("close"),
    menu = document.getElementById ("menu")

// open.addEventListener ("click", () => {
//     open.classList.toggle ("hide")
//     close.classList.toggle ("hide")
// })
// close.addEventListener ("click", () => {
//     open.classList.toggle ("hide")
//     close.classList.toggle ("hide")
// })

common = (o, c, m) => {
    o.addEventListener ("click", () => {
        o.classList.toggle ("hide")
        c.classList.toggle ("hide")

        if (m == "slide-in") {
            menu.classList.toggle ("slide")
        }
        if (m == "slide-out") {
            menu.classList.toggle ("slide")
        }
    })
}
common (open, close, "slide-in")
common (close, open, "slide-out")
