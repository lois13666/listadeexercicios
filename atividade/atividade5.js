function abluble(){
    na=prompt("Digite sua primeira nota:")
    nb=prompt("Digite sua segunda nota:")
    nc=prompt('Digite sua terceira nota:')
    media= na / 3 + nb / 3 + nc / 3
    if (media >= 6)
    {
        alert("VC PASSOU!")
    } 
    else if (media < 6)
    {
        alert("VC FOI REPROVADO!")
    }
}
abluble()