/* ===============================================================
   OrbitalAg – Validação de Formulário
   =============================================================== */

export function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
}

export function validateField(name, value) {
  const val = value.trim();

  if (!val) {
    return 'Este campo é obrigatório.';
  }

  switch (name) {
    case 'nome':
      if (val.length < 3) return 'Nome deve ter pelo menos 3 caracteres.';
      break;
    case 'email':
      if (!validateEmail(val)) return 'Insira um e-mail válido.';
      break;
    case 'assunto':
      if (val.length < 3) return 'Assunto deve ter pelo menos 3 caracteres.';
      break;
    case 'mensagem':
      if (val.length < 15) return 'Mensagem deve ter pelo menos 15 caracteres.';
      break;
    default:
      break;
  }

  return '';
}

export function validateForm(fields) {
  const errors = {};
  let isValid = true;

  Object.keys(fields).forEach((key) => {
    const error = validateField(key, fields[key]);
    if (error) {
      errors[key] = error;
      isValid = false;
    }
  });

  return { errors, isValid };
}
