function factorial (n) {
	var resultado = 1; 
    if (n < 0) return "No existe el factorial de un número negativo"
    if (n === 0 || n === 1) return "Es 1 la solución"
    if (n > 0) {
	for (i=1; i<=n; i++) {
		resultado = resultado * i; 
	}
    }
	return resultado; 
}