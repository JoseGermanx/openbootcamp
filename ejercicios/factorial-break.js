function factorial (n) {
	let resultado = 1;
    if (n < 0) return "No existe el factorial de un número negativo"
    if (n === 0 || n === 1) return 1
  
	while (n) {
		resultado *= n
		n--
		if (n === 1) break
	}
    
	return resultado; 
}
