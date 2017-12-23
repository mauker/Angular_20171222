//Criamos uma variavel para representar o PI
var PI = Math.PI;


/*Nós exportamos um objeto chamado "area" é uma function,
esta função fica disponível para ser utilizada por quem importar este arquivo*/
exports.area = function (r) { 
	return PI * r * r;
};

exports.circunferencia = function (r) { return 2 * PI * r; };