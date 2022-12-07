import Swal from 'sweetalert2'

export function alertError(
  title: string,
  color: string,
  background: string
): void {
  void Swal.fire({
    title,
    color,
    background,
    icon: 'error',
    customClass: 'alertLogin',
    width: '300px',
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000
  })
}

export function alertSucess(
  title: string,
  color: string,
  background: string
): void {
  void Swal.fire({
    title,
    color,
    background,
    icon: 'success',
    customClass: 'alertLogin',
    width: '300px',
    position: 'top-end',
    showConfirmButton: false,
    timer: 1000
  })
}

export function alertErrorDeleteUser(title: string): void {
  void Swal.fire({
    title,
    color: '#4C4C4C',
    background: '#ffffff',
    icon: 'error',
    customClass: 'alertLogin',
    position: 'center',
    showConfirmButton: false,
    timer: 1500
  })
}
