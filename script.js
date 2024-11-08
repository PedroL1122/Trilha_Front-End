document.getElementById('editar-conteudo').addEventListener('click', () => {
    const sobre = prompt('Atualize a seção "Sobre Mim":');
    const motivacoes = prompt('Atualize a seção "Motivações":');

    if (sobre) {
        document.getElementById('sobre').querySelector('p').textContent = sobre;
    }
    if (motivacoes) {
        document.getElementById('motivacoes').querySelector('p').textContent = motivacoes;
    }

    alert('Conteúdo atualizado com sucesso!');
});
