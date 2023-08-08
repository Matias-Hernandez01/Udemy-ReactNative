import { useState, useRef } from "react";


export const useCalculadora = () => {
 
  enum Operadores {
    sumar, restar, multiplicar, dividir
  }


  const [numeroAnterior, setNumeroAnterior] = useState("0")
  const [numero, setNumero] = useState("0")

  const ultimaOperacion = useRef<Operadores>();


  const limpiar = () => {
    setNumero("0") 
    setNumeroAnterior("0")
  }

  const armarNumero = (numeroTexto: string) => {
    if(numero.includes(".") && numeroTexto === ".") return;
    if(numero.startsWith("0") || numero.startsWith("-0")){ 
      if(numeroTexto === "."){
        setNumero(numero + numeroTexto)
      } else if(numeroTexto === "0" && numero.includes(".")){
        setNumero(numero + numeroTexto)
      } else if(numeroTexto !== "0" && !numero.includes(".")){
        setNumero(numeroTexto)
      } else if(numeroTexto === "0" && !numero.includes(".")){
        return;
      } else if(numeroTexto === "0" && numero.includes("0")&& numero.includes(".")){
        return;
      }

    }else {
      setNumero(numero + numeroTexto)
    }
  }

  const positivoNegativo = ()=>{
    if(Number(numero) > 0){
      setNumero("-" + numero)
    } else {
      setNumero(numero.replace("-", ""))
    }
  }

  const btnDelete = () => {
    let numeroNegativo= "";
    let numeroTemp = numero;
    if(numero.includes("-")){
      numeroNegativo= "-";
      numeroTemp = numero.substring(1);
    }
    if(numeroTemp.length > 1){
      setNumero(numeroNegativo + numeroTemp.slice(0 , -1))
    } else {
      setNumero("0")
    }
  }

  const cambiarNumPorAnterior = ()=> {
    if(numero.endsWith(".")){
      setNumeroAnterior(numero.slice(0, -1))
    } else {
      setNumeroAnterior(numero)
    }
    setNumero("0")

  }

  const botonDividir = ()=>{
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.dividir;
  }
  const botonMultiplicar = ()=>{
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.multiplicar;
  }
  const botonSumar = ()=>{
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.sumar;
  }
  const botonRestar = ()=>{
    cambiarNumPorAnterior()
    ultimaOperacion.current = Operadores.restar;
  }

  const calcular = ()=>{
     const num1 = Number(numero);
     const num2 = Number(numeroAnterior);

    console.log("num1",num1);
    console.log("num2",num2);
    

     if(num1 && !num2){
      setNumero(`${num1}`)
     }

     switch(ultimaOperacion.current){
      case Operadores.sumar: { 
          setNumero(`${num1 + num2}`)
        break;
      }
      case Operadores.restar: {
          setNumero(`${num2 - num1}`)
        break;
      }
      case Operadores.multiplicar:{
          setNumero(`${num1 * num2}`)
        break;
      }
      case Operadores.dividir:
        
        if(num1 === 0){
          setNumero('0')
        } else{
          setNumero(`${num2 / num1}`)
        }
      break;
     }
     setNumeroAnterior(`0`)
  }

  return  {
    numero,
    numeroAnterior,
    limpiar,
    btnDelete,
    armarNumero,
    botonSumar,
    botonRestar,
    botonMultiplicar,
    botonDividir,
    calcular,
    positivoNegativo
  }


}