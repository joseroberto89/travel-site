import Axios from "axios"

class ClientArea {
    constructor() {
        this.injectHTML()
        this.form = document.querySelector(".client-area__form")
        this.field = document.querySelector(".client-area__input")
        this.contentArea = document.querySelector(".client-area__content-area")
        this.events()
    }

    events() {
        this.form.addEventListener("submit", e => {
            e.preventDefault()
            this.sendRequest()
        })
    }

    sendRequest() {
        Axios.post("https://jose-roberto-travel-site.netlify.app/.netlify/functions/secret-area", {password: this.field.value}).then(response => {
            this.form.remove()
            this.contentArea.innerHTML = response.data
        }).catch(() => {
            this.contentArea.innerHTML = `<p class="client-area__error">This Cupon is <strong>NOT VALID</strong></p>`
            this.field.value = ""
            this.field.focus()
        })
    }

    injectHTML() {
        document.body.insertAdjacentHTML("beforeend", `
        <div class="client-area">
            <div class="wrapper wrapper--medium">
                <h2 class="section-titles section-titles--blue">Cupons</h2>
                <form class="client-area__form" action="">
                <input class="client-area__input" type="text" placeholder="Enter the Cupon Code">
                <button class="btn btn--orange btn--solve">Submit</button>
                </form>
                <div class="client-area__content-area"></div>
            </div>
        </div>
        `)
    }
}

export default ClientArea