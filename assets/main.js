const {createApp} = Vue

createApp({
    data(){
        return{
            saluto: `Benvenuto`,
            testoCentrato : `text-center`,
            setInput: `d-flex w-25 flex-column`,
            margine: `mb-2 ms-2`,
            nome: ``,
            cognome: ``,
            image: `https://picsum.photos/200/300`,
            alt: `foto lorem picsum`

        }
    },
    methods:{
        myfunction(){
            if (this.saluto == `Benvenuto`) {
                this.saluto = `Ciao` 
            } else{
                this.saluto = `Benvenuto`
            }
            
        }
    }
}).mount(`#app`)