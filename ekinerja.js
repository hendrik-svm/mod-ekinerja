//AWAL --------------------------------------------------------------------------------
// CDN
// waitForKeyElements
const script1 = document.createElement('script');
const posisi_script1 = document.querySelector("head");
script1.setAttribute('src', 'https://gist.github.com/raw/2625891/waitForKeyElements.js');
script1.setAttribute('id', 'script1');
posisi_script1.insertBefore(script1, posisi_script1.childNodes[0]);


// DIV author
const div1 = document.createElement('div');
const posisi_div1 = document.querySelector("body > footer");
div1.setAttribute('class', 'text-center');
div1.setAttribute('id', 'div1');
const isi_div1 = document.createTextNode('Mod Ekinerja V.0.1 By : Hendrik Svm');
div1.appendChild(isi_div1);
posisi_div1.appendChild(div1);

// klik tombol pekerjaan
document.querySelector("#pekerjaan_li").addEventListener('click', function () {

})

// cek apakah ada daftar list pekerjaan 
waitForKeyElements("#mytable", wait1);

function wait1(jNode) {
	console.log("wait1")
	if (document.querySelector("#submenu > ul > li:nth-child(1)").outerText == " Input Pekerjaan") {
		// waitForKeyElements("#mytable > tbody", wait2);

		// function wait2(jNode) {
		// console.log("wait2")
		if (document.querySelector("#mytable > tbody > tr:nth-child(2) > td:nth-child(1)") != null) {
			// Button
			if (document.getElementById("button1") == null) {
				const button1 = document.createElement('button');
				const posisi_button1 = document.querySelector("#kinerja_pns > div > div.span12 > div > form");
				button1.setAttribute('type', 'button');
				button1.setAttribute('class', 'btn btn-danger text-center ');
				button1.setAttribute('id', 'button1');
				const isi_button1 = document.createTextNode('Hitung Jam Kerja');
				button1.appendChild(isi_button1);
				posisi_button1.appendChild(button1);
			}
		} else {
			if (document.getElementById("button1") != null) {
				document.getElementById("button1").remove();
			}
		}
		// }
	}
}
//AKHIR --------------------------------------------------------------------------------
