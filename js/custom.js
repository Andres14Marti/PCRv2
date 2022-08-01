/* Theme Name: The Project - Responsive Website Template
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version:1.4.0
 * Created:March 2015
 * License URI:http://support.wrapbootstrap.com/
 * File Description: Place here your custom scripts
 */

(function($){
	$(document).ready(function()
	{
		//MOSTRAR FRASES DISTINTAS AL ESCANEAR EL QR DE PASTORAL JUVENIL
		if(window.location.href.includes("juvenil_frase"))
		{
			var number = Math.floor(Math.random() * 13) + 1;

			switch(number)
			{
				case 1:
					$("#texto_frase").text('"Que nadie menosprecie tu juventud"');
					$("#texto_autor").text("Timoteo 4,12");
					break;

				case 2:
					$("#texto_frase").text('"Me basta que sean jóvenes para amarlos"');
					$("#texto_autor").text("San Juan Bosco");
					break;

				case 3:
					$("#texto_frase").text('"La Santidad consiste en estar siempre Alegres"');
					$("#texto_autor").text("Santo Domingo Savio");
					break;

				case 4:
					$("#texto_frase").text('"Ten paciencia con todas las cosas, pero sobre todo contigo mismo"');
					$("#texto_autor").text("San Francisco de Asís");
					break;

				case 5:
					$("#texto_frase").text('"La santidad comienza con un si a Dios"');
					$("#texto_autor").text("San Juan Pablo II");
					break;

				case 6:
					$("#texto_frase").text('"Ustedes son la riqueza, pero hay que transformarla en esperanza"');
					$("#texto_autor").text("Papa Francisco");
					break;

				case 7:
					$("#texto_frase").text('"Queridos jóvenes, la felicidad que buscan, la felicidad que tienen derecho a saborear, tiene un nombre, un rostro: el de Jesús de Nazaret oculto en la Eucaristía. solo Él da plenitud de vida a la humanidad"');
					$("#texto_autor").text("Benedicto XVI");
					break;

				case 8:
					$("#texto_frase").html('"Y eso es lo que necesitamos de los jóvenes hoy: jóvenes con esperanza y jóvenes con fortaleza. No queremos jóvenes debiluchos, jóvenes que están <em>ahí no más</em>"');
					$("#texto_autor").text("Papa Francisco");
					break;

				case 9:
					$("#texto_frase").text('"Les pido que sean revolucionarios… tengan el coraje de ir contra la corriente. Tengan el coraje de ser felices"');
					$("#texto_autor").text("Papa Francisco");
					break;

				case 10:
					$("#texto_frase").text('"No somos fruto de la casualidad o la irracionalidad, sino que en el origen de nuestra existencia hay un proyecto de amor de Dios"');
					$("#texto_autor").text("San Juan Pablo II");
					break;

				case 11:
					$("#texto_frase").text('"No brilles para que otros te vean. Brilla para que atraves de ti, otros puedan verlo a El"');
					$("#texto_autor").text("C.W Lewis");
					break;

				case 12:
					$("#texto_frase").text('"La fe no se opone a vuestros ideales más altos, al contrario, los exalta y perfecciona"');
					$("#texto_autor").text("San Juan Pablo II");
					break;

				default:
					$("#texto_frase").text('"Sí, queridos amigos, Dios nos ama. Ésta es la gran verdad de nuestra vida y que da sentido a todo lo demás"');
					$("#texto_autor").text("San Juan Pablo II");;
					break;
			}
		}
		
	}); // End document ready

})(this.jQuery);
