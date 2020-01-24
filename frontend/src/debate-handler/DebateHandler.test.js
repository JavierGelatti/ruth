import { oradores } from './DebateHandler'

const orador = (nombre, inicio, fin) => ({
    nombre, inicio: inicio || null, fin: fin || null
})

describe("#oradores reducer", () => {
    it("con un evento desconocido, no hace nada", () => {
        expect(oradores([], {data: {tipo: ""}})).toEqual([])    
    })

    it("cuando un orador pide hablar y no hay nadie en la cola, es el orador 'talking'", () => {
        let evento = {
            data: {tipo: "Quiero Hablar"}, 
            fecha: 1, 
            autor: "Alguien"
        }

        expect(oradores([], evento)).toEqual([orador("Alguien", 1)])   
    })
})