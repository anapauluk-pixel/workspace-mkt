console.log('app.js carregado');
``
    const viewSelector =
document.getElementById('viewSelector');

viewSelector.addEventListener('change', function(){

    document
    .querySelectorAll('.view-content')
    .forEach(view => {

        view.style.display = 'none';

    });

    document
    .getElementById(this.value)
    .style.display = 'block';

});
