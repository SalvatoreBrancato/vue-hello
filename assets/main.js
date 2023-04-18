const {createApp} = Vue

createApp({
    data(){
        return{
            saluto: `Benvenuto`,
            testoCentrato : `text-center`,
            setInput: `d-flex w-25 flex-column`,
            nome: ``,
            cognome: ``

        }
    }
    // methods:{

    // }
}).mount(`#app`)