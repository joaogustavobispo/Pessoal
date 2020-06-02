var popUp = document.getElementsByClassName("popUp")[0];

function popUpOpen() {
    window.location.href = 'mailto: joao.bispo@uvvnet.com.br'
}

function portifolio() {
    var follow = confirm("Ainda em produção. Me siga no instagram: @joaogustavobispo, para ficar por dentro das próximas atualizações. Ok?");

    if (follow) {
        window.location.href = "https://www.instagram.com/joaogustavobispo", "_blanck";
    }
}
