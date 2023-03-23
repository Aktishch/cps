import formValidate from './functions/form-validate'
import dialog from './functions/dialog'

const formSubmit = (event: Event): void => {

  event.preventDefault()

  const form = event.target as HTMLFormElement

  if (!formValidate.init(form)) return

  const formData: FormData = new FormData(form)
  const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement

  let requestUrl: string = ''

  requestUrl = '/all-on-4/ajax/submit-handler.php'
  submitBtn.setAttribute('disabled', 'disabled')

  dialog.open('fancybox-loading', '/all-on-4/dialogs/loading.php')

  fetch(requestUrl, {

    method: 'POST',
    body: formData

  }).then((response: Response): void => {

    response.text()

  }).then((): void => {

    dialog.close()

    if (form.dataset.form == 'submit') {

      dialog.open('fancybox-dialog', '/all-on-4/dialogs/dialog-submit.php')

      form.reset()

      submitBtn.removeAttribute('disabled')

    }

    if (form.dataset.form == 'quiz') {

      form.remove()

      const quizResult = document.querySelector('*[data-quiz-result]') as HTMLElement

      quizResult.classList.remove('d-none')

    }

  }).catch((error: string): void =>

    console.log('The form has not been sent', error)

  )

}

const init = (): void => {

  document.addEventListener('submit', ((event: Event): void => {

    if ((event.target as HTMLFormElement).hasAttribute('data-form')) formSubmit(event)

  }) as EventListener)

}

export default { init }