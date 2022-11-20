//Criar uma variável para manipular o XML
xmlhttp = new XMLHttpRequest();
//Seleciona o arquivo XML
xmlhttp.open("GET","xml/conteudo.xml",false);
//Enviar o arquivo para a leitura
xmlhttp.send();
//Informar que o arquivo enviado é um XML
xmlDoc = xmlhttp.responseXML;

x = xmlDoc.getElementsByTagName("conteudo")

function textoODS() {
	for (i=x.length-1;i>=0;i--) {
		document.write("<p class='text-left' id='text-ods'><strong>" + x[i].getElementsByTagName("inicioods")[0].childNodes[0].nodeValue + "</strong>" + x[i].getElementsByTagName("parteumods")[0].childNodes[0].nodeValue + "<br>" + x[i].getElementsByTagName("partedoisods")[0].childNodes[0].nodeValue + "<br>" + x[i].getElementsByTagName("partetresods")[0].childNodes[0].nodeValue + "<br>" + x[i].getElementsByTagName("partequatroods")[0].childNodes[0].nodeValue +"</p>");}
    }
