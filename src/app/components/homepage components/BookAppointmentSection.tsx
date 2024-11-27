import ContactForm from "../contactForm"

function BookAppointmentSection() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center">
        <div>
            <h2>Ready to keep your health in check?</h2>
            <p>Book an appointment with me</p>
        </div>
        <ContactForm />
    </div>
  )
}

export default BookAppointmentSection