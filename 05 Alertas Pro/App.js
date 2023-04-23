const A1=()=>{
    Swal.fire({
        title: 'Datos Guardados de Forma exitosa',
        width: 600,
        padding: '3em',
        color: '#716add',
        background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
      })
}
const A2=()=>{
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Estas seguro?',
        text: "No se guardaran los Cambios que hiciste",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Me hire',
        cancelButtonText: 'No, Me quedo',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Guardado',
            'Datos guardados Correctamente',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelar',
            'Ni modo papi no se guardaron tus datos ',
            'Ni modo papi '
          )
        }
      })
}
const A3=()=>{
    Swal.fire({
        title: 'Ingresa tu Usuario de GitHub',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off'
        },
        showCancelButton: true,
        confirmButtonText: 'Buscar',
        showLoaderOnConfirm: true,
        preConfirm: (login) => {
          return fetch(`//api.github.com/users/${login}`)
            .then(response => {
              if (!response.ok) {
                throw new Error(response.statusText)
              }
              return response.json()
            })
            .catch(error => {
              Swal.showValidationMessage(
                `Ingresa el Usuario Correctamente: ${error}`
              )
            })
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          })
        }
      })
}

const A4=()=>{
    Swal.fire({
        title: '¿Quieres guardar esta imagen?',
        text: 'No podras cambiar de foto en 2 semanas',
        imageUrl: 'https://media.admagazine.com/photos/6361ba09695629a0e1a9fb5a/1:1/w_2250,h_2250,c_limit/Rammstein_Berlin_06.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Ni modo papi no cargo la Imagen',
      })
}
const A5=()=>{
    let timerInterval
Swal.fire({
  title: 'En un momento se guardan tus datos',
  html: 'Se cerrara en <b></b> milisegundos.',
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
})
}
