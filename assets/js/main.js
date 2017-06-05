$(document).ready(function () {

		var index = 0;
		showImage(index);

		/** cambio de imágenes por control antes **/
		$(".prev").click(function () {
				hideImage(index);
				index--;
				if (index == -1) {index = 4;}
				showImage(index);
		});

		/** cambio de imágenes por control siguiente **/
		$(".next").click(nextImage);

		/** cambia de imágenes por input radio **/
		$("input[type='radio']").click(function () {
				hideImage(index);
				index = $(this).val();
				showImage(index);
		});

		/** cambia de imàgen cada 5 segundos **/
		setInterval(nextImage, 5000);

		function nextImage() {
				hideImage(index);
				index++;
				if (index == 5) {index = 0;}
				showImage(index);
		}

		function hideImage(index) {
				$((".container-img div:eq(" + index + ")")).css("display", "none");
		}

		function showImage(index) {
				$((".container-img div:eq(" + index + ")")).fadeIn("slow");
				$("input[value=" + index + "]").prop("checked", "checked");
		}
});
