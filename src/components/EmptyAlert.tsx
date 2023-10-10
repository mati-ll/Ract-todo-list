
export default function EmptyAlert({ showAlert }: { showAlert: boolean }) {

    return (

        showAlert ?
            <div className="alert alert-danger" role="alert">
                Title and Description cannot be empty.
            </div>
            : null


    )
}