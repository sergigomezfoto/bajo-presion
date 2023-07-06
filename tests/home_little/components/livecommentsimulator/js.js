
        // Array de mensajes
        var messages = [
            "Ei! Què fas aquesta tarda? 🤔",
            "Hola! Estic estudiant per l'examen de matemàtiques de demà 😭 Tu?",
            "Jo també! Potser podríem estudiar junts? Podríem fer un zoom 📚💻",
            "Sí, bona idea! Fem un descans a les 5 i fem una mica de Fortnite? 🎮😁",
            "Perfecte! A les 5, Fortnite, i després seguim estudiant 👍😂",
            "D'acord, ens veiem a les 5! Bon estudi! 🤓👋",
            "Genial! Estic emocionat per la nostra sessió d'estudi i Fortnite. Ens veiem a les 5! 📖🎮🕔",
            "Estic segur que serem uns cracs  💪🧠",
            "Recorda portar tots els teus dubtes, estic aquí per ajudar-te! 🤗📚",
            "Estic preparant uns snacks per la nostra pausa de Fortnite. Espero que t'agradin les crispetes! 🍿😋",
            "Estic emocionat per jugar a Fortnite, espero que estiguis preparat per perdre! 😜🎮",
            "Després de Fortnite, tornarem a l'estudi. No hi ha descans en el camí cap a l'èxit! 💯🔥",
            "Estic segur que després d'aquesta sessió d'estudi, l'examen de matemàtiques serà un joc d'infants! 🧮👌",
            "Estic preparant el meu espai d'estudi. Tinc llibres, bolígrafs i una tassa de cafè a punt! ☕️📝",
            "Estic emocionat per veure't a les 5. Fins llavors, bon estudi! 🤓⏰",
            "Ens veiem a les 5 per una tarda d'estudi i diversió. No puc esperar! 🎉👋"
        ];

        var chat = document.getElementById('home-video-chat');

        // Función para añadir un nuevo mensaje al chat
        function addMessage(index) {
            var msg = document.createElement('p');
            msg.textContent = messages[index];
            chat.prepend(msg); // Añade el mensaje al principio del contenedor
            chat.style.transform = 'none'; // Resetea la posición del contenedor de mensajes
        }
        
        // Función para añadir la animación de "alguien está escribiendo"
        function addTypingIndicator() {
            var typingIndicator = document.createElement('div');
            typingIndicator.className = 'typing-indicator';
            typingIndicator.innerHTML = '<span></span><span></span><span></span>';
            chat.prepend(typingIndicator); // Añade la animación al principio del contenedor
            return typingIndicator;
        }
        
        // Función para simular la conversación
        function simulateChat() {
            var i = 0;
            var interval = setInterval(function() {
                if (i < messages.length) {
                    var typingIndicator = addTypingIndicator();
                    setTimeout(function() {
                        chat.removeChild(typingIndicator);
                        chat.style.transform = 'translateY(-100%)'; // Desplaza el contenedor de mensajes hacia arriba
                        addMessage(i);
                        i++;
                    }, 2000); // Tiempo que se muestra la animación de "alguien está escribiendo"
                } else {
                    clearInterval(interval);
                }
            }, 4000); // Intervalo entre mensajes
        }
        
        simulateChat();