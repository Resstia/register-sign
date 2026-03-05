const formulario        = document.getElementById('formulario-registro');
const formularioInicio   = document.getElementById('formulario-inicio');
const password          = document.getElementById('contraseña');
const confirmarPassword = document.getElementById('confirmarPassword');
const seguridad         = document.getElementById('nivelseguridad');
const usuario           = document.getElementById('nombreusuario');
const correoElectronico = document.getElementById('correo');
const errorConfirmar    = document.getElementById('errorConfirmar');
const errorInicio        = document.getElementById('errorInicio');

// cambio de forms
document.getElementById('irAInicio').addEventListener('click', (e) => {
    e.preventDefault();
    formulario.classList.add('form-oculto');
    formularioInicio.classList.remove('form-oculto');
    formularioInicio.reset();
    errorInicio.classList.remove('visible');
});

document.getElementById('irARegistro').addEventListener('click', (e) => {
    e.preventDefault();
    formularioInicio.classList.add('form-oculto');
    formulario.classList.remove('form-oculto');
    formulario.reset();
    seguridad.style.width = '0%';
    errorConfirmar.classList.remove('visible');
});

// boton revelar
function crearToggle(botonId, inputEl) {
    document.getElementById(botonId).addEventListener('click', () => {
        inputEl.type = inputEl.type === 'password' ? 'text' : 'password';
    });
}

crearToggle('togglePassword',      password);
crearToggle('toggleConfirm',       confirmarPassword);
crearToggle('toggleInicioPassword', document.getElementById('inicioPassword'));

// Medidor de nivel de fortaleza de la contraseña en tiempo real 
password.addEventListener('input', () => {
    const valor = password.value;
    let fortaleza = 0;

    if (valor.length > 5)      fortaleza += 30;
    if (valor.match(/[A-Z]/))  fortaleza += 30;
    if (valor.match(/[0-9]/))  fortaleza += 40;

    seguridad.style.width = fortaleza + '%';

    if      (fortaleza < 40) seguridad.style.background = '#8B2020';
    else if (fortaleza < 70) seguridad.style.background = '#f59e0b';
    else                     seguridad.style.background = '#4A7C59';

    
    if (confirmarPassword.value) validarCoincidencia();
});


confirmarPassword.addEventListener('input', validarCoincidencia);

function validarCoincidencia() {
    if (confirmarPassword.value && confirmarPassword.value !== password.value) {
        errorConfirmar.classList.add('visible');
    } else {
        errorConfirmar.classList.remove('visible');
    }
}


formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    
    if (password.value !== confirmarPassword.value) {
        errorConfirmar.classList.add('visible');
        confirmarPassword.focus();
        return;
    }

    if (formulario.checkValidity()) {

        const datosUsuario = {
            nombreusuario : usuario.value,
            email         : correoElectronico.value,
            password      : password.value,
            fecha         : new Date().toLocaleString()
        };
        
        const usuariosGuardados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];

        usuariosGuardados.push(datosUsuario);

        localStorage.setItem('usuariosRegistrados', JSON.stringify(usuariosGuardados));

        alert('🚀 ¡Datos guardados con éxito en el almacenamiento local!');
        console.log('Usuarios registrados:', JSON.parse(localStorage.getItem('usuariosRegistrados')));

        formulario.reset();
        seguridad.style.width = '0%';
        errorConfirmar.classList.remove('visible');

    } else {
        alert('❌ Por favor, corrige los errores en el formulario.');
    }
});


formularioInicio.addEventListener('submit', (e) => {
    e.preventDefault();

    const inicioUsuario  = document.getElementById('inicioUsuario').value;
    const inicioPassword = document.getElementById('inicioPassword').value;

    
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuariosRegistrados')) || [];
    const usuarioEncontrado = usuariosGuardados.find(
        u => u.nombreusuario === inicioUsuario && u.password === inicioPassword
    );

    if (usuarioEncontrado) {
        errorInicio.classList.remove('visible');
        alert(`👋 ¡Bienvenido, ${usuarioEncontrado.nombreusuario}!`);
        formularioInicio.reset();
    } else {
        errorInicio.classList.add('visible');
    }
});
