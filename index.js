window.onload=function(){
	alert ('Este es un mensjae de alerta desde JavaScript');

}

document.addEventListener("DOMContentLoaded", function () {
	        const form = document.getElementById("movie-form");
	        const searchButton = document.getElementById("search-button");
	        const directorElement = document.getElementById("director");
	        const yearElement = document.getElementById("year");

		searchButton.addEventListener("click", function () {
		            const movieTitle = document.getElementById("movie-title").value;
		            const apiKey = "d245f1b0";

			    fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`)
		            .then(response => response.json())
		            .then(data => {
				    if (data.Response === "True") {
					    directorElement.textContent = data.Director;
					    yearElement.textContent = data.Year;
				} else {
					directorElement.textContent = "No se encontró la película.";
					 yearElement.textContent = "";
					                    }
				                    })
			                .catch(error => {
				console.error("Error al realizar la solicitud a la API:", error);
				 directorElement.textContent = "Error al buscar la película.";
				yearElement.textContent = "";
						                });
			        });
	    });



