var casa = prompt('🧙‍♀️Saudações, meu caro Bruxo(a), me diga, qual dessas características mais combina com você: Coragem, Liderança, Inteligência ou Lealdade?🧙‍♂️')

switch(casa) {
    
    case 'Coragem':
    case 'coragem':
    
    window.location.href = 'grifinoria.html';

    break

    case 'Liderança':
    case 'liderança':
    case 'Lideranca':
    case 'lideranca':
    
    window.location.href = 'sonserina.html';

    break

    case 'Inteligência':
    case 'inteligência':
    case 'Inteligencia':
    case 'inteligencia':
    
    window.location.href = 'corvinal.html';

    break

    case 'Lealdade':
    case 'lealdade':
    
    window.location.href = 'lufalufa.html';

    break

    default:

      window.location.href = 'error.html'

    break

}
