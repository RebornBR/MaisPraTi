let prompt = require('prompt-sync')();


function adicionarHorario(quantidade) {
    let horarios = []
    for (let i = 0; i < quantidade; i++) {
        let horario = {
            hora: 0,
            minuto: 0,
            segundo: 0
        }
        console.log(`Digite o horário ${i + 1}:`);
        horario.hora = parseInt(prompt('Horas: '));
        horario.minuto = parseInt(prompt('Minutos: '));
        horario.segundo = parseInt(prompt('Segundos: '));
        if (horario.hora >= 0 && horario.hora <= 23 && horario.minuto >= 0 && horario.minuto <= 59 && horario.segundo >= 0 && horario.segundo <= 59) {
            horarios.push(horario);
            console.log('Horário válido!, adicionado com sucesso!');
        }else {
            console.log('Horário inválido, tente novamente!');
            i--;
        }
    }
    console.log('Horários Registrados:');
    horarios.forEach((horario, index) => {
        console.log(`Horário ${index + 1}: ${horario.hora.toString().padStart(2, '0')}:${horario.minuto.toString().padStart(2, '0')}:${horario.segundo.toString().padStart(2, '0')}`);
    });
}

adicionarHorario(5)