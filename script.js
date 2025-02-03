function startAnalysis() {
    let temp = parseFloat(document.getElementById("temperature").value);
    let resultText = document.getElementById("result");
    let statusFill = document.getElementById("statusFill");
    let scanner = document.getElementById("scanner");

    if (isNaN(temp)) {
        resultText.innerText = "⚠️ ERROR: No es un número, genio.";
        return;
    }

    scanner.style.display = "block";
    resultText.innerText = "";
    
    setTimeout(() => {
        scanner.style.display = "none";
        let messages = [
            "✅ ¡Estás perfecto! Aunque sudes, es solo tu cuerpo en modo sauna.",
            "🔥 Si tienes fiebre, es solo una prueba de que podrías ser un volcán en tu otra vida.",
            "💪 Tu cuerpo está haciendo un speedrun de inmunidad. Vas ganando.",
            "📡 La NASA confirmó que esta temperatura es normal en ciertos planetas.",
            "🦎 Si te sientes raro, probablemente sea porque estás evolucionando a tu siguiente fase.",
            "🤖 Tu fiebre no es un problema, es una actualización del sistema.",
            "🎉 ¡Felicidades! Has desbloqueado el modo difícil de la vida.",
            "🧠 41°C? Es como un overclock para tu cerebro. Más velocidad, menos preocupaciones.",
            "🌍 En algunas culturas, esta temperatura te convierte en chamán. ¡Felicidades!",
            "💥 Podrías estar ardiendo en fiebre, pero sigue sin ser tan caliente como el sol."
        ];

        resultText.innerText = messages[Math.floor(Math.random() * messages.length)];

        let fillWidth = temp < 36 ? "30%" : temp > 38 ? "99%" : "70%";
        statusFill.style.width = fillWidth;
        statusFill.style.background = temp > 38 ? "red" : "green";
    }, 3000);
}
