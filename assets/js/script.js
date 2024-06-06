// ALERTA
    function showAlert() {
        alert('Esto es una alertaaaa!');
    }
// FIN ALERTA


// POPOVVER
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })

    // popoverTriggerList.map: Recorre cada elemento del array
// FIN POPOVVER


// TOAST
    function showToast() {
        var button = document.querySelector('button[onclick="showToast()"]');
        var toastContent = button.getAttribute('data-bs-content');
        var toastBody = document.getElementById('toastBody');
        toastBody.textContent = toastContent;

        var toastElement = document.getElementById('liveToast');
        var toast = new bootstrap.Toast(toastElement);
        toast.show();
    }
  // FIN TOAST
   

// OFFCANVAS
document.addEventListener('DOMContentLoaded', function () {
    var offcanvasButton = document.getElementById('offcanvasButton');
    var offcanvasElement = document.getElementById('offcanvasExample');
    var offcanvasBody = document.getElementById('offcanvasBody');

    offcanvasButton.addEventListener('click', function () {
        var offcanvasContent = offcanvasButton.getAttribute('data-bs-content');
        offcanvasBody.textContent = offcanvasContent;

        var offcanvas = new bootstrap.Offcanvas(offcanvasElement);
        offcanvas.show();
    });
});
// FIN OFFCANVAS