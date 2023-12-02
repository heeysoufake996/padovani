document.getElementById('ler-mais').addEventListener('click', function() {
    document.getElementById('texto-inicial').style.display = 'none';
    document.getElementById('texto-restante').style.display = 'block';
});

document.getElementById('ler-menos').addEventListener('click', function() {
    document.getElementById('texto-inicial').style.display = 'block';
    document.getElementById('texto-restante').style.display = 'none';
});
