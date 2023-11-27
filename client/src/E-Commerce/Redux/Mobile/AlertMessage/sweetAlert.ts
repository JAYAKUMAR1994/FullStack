// sweetAlert.ts

import Swal, { SweetAlertOptions } from 'sweetalert2';

export const useSweetAlert = () => {
  const showSuccessAlert = (val: string) => {
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: `${val} completed successfully.`,
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
        icon: 'animate__animated animate__heartBeat'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
        icon: 'animate__animated animate__flipOutX'
      }
    });
  };

  const showDeleteAlert = (val: string) => {
    return Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: `You want to delete ${val}?`,
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${val} has been deleted.`,
          showClass: {
            popup: 'animate__animated animate__fadeInDown',
            icon: 'animate__animated animate__heartBeat'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp',
            icon: 'animate__animated animate__flipOutX'
          }
        });
      }
    });
  };

  return {
    showSuccessAlert,
    showDeleteAlert,
  };
};
