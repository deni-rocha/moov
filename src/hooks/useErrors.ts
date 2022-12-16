import Swal from 'sweetalert2'

interface IMessage {
  409: string
  defaut: string
}
function alertError(title: string, color: string, background: string): void {
  void Swal.fire({
    title,
    color,
    background,
    icon: 'error',
    customClass: 'alertLogin',
    width: '300px',
    position: 'top-end',
    showConfirmButton: true,
    confirmButtonColor: color
  })
}
export const useErrors = (err: number | undefined, message: IMessage): void => {
  switch (err) {
    case 500:
      alertError('erro no servidor', '#4C4C4C', '#ffffff')
      break
    case 409:
      alertError(message[409], '#4C4C4C', '#ffffff')
      break
    default:
      alertError(message.defaut, '#4C4C4C', '#ffffff')
  }
}
