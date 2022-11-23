import Swal from 'sweetalert2'

export function alertLoginError(): void {
  void Swal.fire({
    title: 'login inválido',
    color: 'white',
    icon: 'error',
    customClass: 'custom-sweetalert',
    width: '300px',
    background: '#4C4C4C',
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000
  })
}

export function alertLoginSucess(): void {
  void Swal.fire({
    title: 'conectado',
    color: '#4C4C4C',
    icon: 'success',
    customClass: 'custom-sweetalert',
    width: '300px',
    background: '#ffffff',
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000
  })
}
