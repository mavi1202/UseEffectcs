
import { useState, useEffect } from "react"
import axios from "axios"


export function Exemplo2() {
    const [cep, setCep] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [bairro, setBairro] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
    const [uf, setUf] = useState("")

    useEffect(() => {
        if (cep.length === 8){
            axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
                setLogradouro(response.data.logradouro)
                setBairro(response.data.bairro)
                setCidade(response.data.localidade)
                setEstado(response.data.estado)
                setUf(response.data.uf)
                console.log(response)
            })
        }
    } , [cep])

    return (
        <section>

            <h2>Exemplo2: Buscar endereço</h2>

            <div>
                <input type="number" placeholder="Digite seu CEP" onChange={(input)=> setCep(input.target.value)} />

            {cep.length === 8 && (
                <>
                <h3>Informações do CEP</h3>
                <ol>
                    <li>Logradouro: {logradouro}</li>
                    <li>Bairro: {bairro}</li>
                    <li>Localidade: {cidade}</li>
                    <li>Estado: {estado} - {uf}</li>
                </ol>
                </>
            ) }

            </div>
        </section>
    )
}