const signupBtnNormal = document.getElementById('signup-btn-normal');
const vipBtnNormal = document.getElementById('vip-btn-normal');
const signupBtnVIP = document.getElementById('signup-btn-vip');
const vipBtnVIP = document.getElementById('vip-btn-vip');
const targetNormal = document.querySelector('.target_normal');
const targetVIP = document.querySelector('.target_VIP');

signupBtnNormal.addEventListener('click', () => {
  targetNormal.style.display = 'none';
  targetVIP.style.display = 'block';
});

vipBtnNormal.addEventListener('click', () => {
  targetNormal.style.display = 'none';
  targetVIP.style.display = 'block';
});

signupBtnVIP.addEventListener('click', () => {
  targetNormal.style.display = 'block';
  targetVIP.style.display = 'none';
});

vipBtnVIP.addEventListener('click', () => {
  targetNormal.style.display = 'block';
  targetVIP.style.display = 'none';
});

document.getElementById('form-normal').addEventListener('submit', (e) => {
  e.preventDefault();
  const correo = document.getElementById('validationDefault01').value;
  const contrasena = document.getElementById('validationDefault02').value;

  if (correo && contrasena) {
    const cuentaNormal = new CuentaNormal(correo, contrasena);
    cuentaNormal.mostrarInformacion();
    document.getElementById('validationDefault01').value = '';
    document.getElementById('validationDefault02').value = '';
    document.getElementById('invalidCheck2').checked = false;
  } else {
    alert('Por favor, complete todos los campos.');
  }
});

document.getElementById('form-vip').addEventListener('submit', (e) => {
  e.preventDefault();
  const nombreUsuario = document.getElementById('validationDefault03').value;
  const correo = document.getElementById('validationDefault04').value;
  const contrasena = document.getElementById('validationDefault05').value;

  if (nombreUsuario && correo && contrasena) {
    const cuentaVIP = new CuentaVIP(correo, contrasena, nombreUsuario);
    cuentaVIP.mostrarInformacion();
    document.getElementById('validationDefault03').value = '';
    document.getElementById('validationDefault04').value = '';
    document.getElementById('validationDefault05').value = '';
    document.getElementById('invalidCheck3').checked = false;
  } else {
    alert('Por favor, complete todos los campos.');
  }
});


class CuentaNormal {
  constructor(correo, contrasena) {
    this.correo = correo;
    this.contrasena = contrasena;
    this.nombreUsuario = this.generarNombreUsuario();
  }

  generarNombreUsuario() {
  
    return "Usuario" + Math.floor(Math.random() * 1000);
  }

//   mostrarInformacion() {
//     console.log("Cuenta Normal:");
//     console.log("Correo: " + this.correo);
//     console.log("Contraseña: " + this.contrasena);
//     console.log("Nombre de usuario: " + this.nombreUsuario);
//   }
mostrarInformacion(){
    alert(`
    Hola ${this.nombreUsuario}
    ${this.correo} su contraseña es ${this.contrasena}
    `)
}
}


class CuentaVIP extends CuentaNormal {
  constructor(correo, contrasena, nombreUsuario) {
    super(correo, contrasena);
    this.nombreUsuario = nombreUsuario;
  }

//   mostrarInformacion() {
//     console.log("Cuenta VIP:");
//     console.log("Correo: " + this.correo);
//     console.log("Contraseña: " + this.contrasena);
//     console.log("Nombre de usuario personalizado: " + this.nombreUsuario);
//   }
mostrarInformacion(){
    alert(`
    Hola ${this.nombreUsuario}
    -${this.correo} su contraseña es ${this.contrasena}
    `)
}
}
