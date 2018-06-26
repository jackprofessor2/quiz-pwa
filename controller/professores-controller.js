/** professores-controller.js */
$(function() {
    var action = "create";
    var selected_index = -1;
    var tblProfessores = localStorage.getItem('tblProfessores');

    tblProfessores = JSON.parse(tblProfessores);

    if(tblProfessores === null) {
        tblProfessores = [];
    }

    function create() {
        var professores = JSON.stringify[{
            ID: $('#').val(),
            Nome: $('#nome').val(),
            Instituicao: $('#instituicao'),
            Email: $('#email').val(),
            Senha: $('#senha').val()
        }];

        tblProfessores.push(professores);
        window.alert('Informações salvas com sucesso!');
        return true;
    }

    function edit() {
        tblProfessores[selected_index] = JSON.stringify[{
            ID: $('#').val(),
            Nome: $('#nome').val(),
            Instituicao: $('#instituicao'),
            Email: $('#email').val(),
            Senha: $('#senha').val()
        }];

        tblProfessores.push(professores);
        window.alert('Informações editadas com sucesso!');
        return true;
    }

});