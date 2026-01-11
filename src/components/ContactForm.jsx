import { useForm } from "react-hook-form";

export default function ContactForm({ property }) {
  const {
    register,
    handleSubmit,
    formState: { 
        errors, 
        isSubmitting,
        isSubmitSuccessful 
    },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form data:", data);
    reset();

    //simulate submitting the form
    setTimeout(() => {
      reset();
    }, 1600);
  };

  return (
    <section className="contact-section">

      <h3>Interested in this property?</h3>
      <p className="contact-subtitle">
        Leave your details and we’ll get in touch shortly.
      </p>

      {isSubmitSuccessful ? (
        <div className="contact-success">
          Thank you! We’ll contact you soon.
        </div>
        ) : (
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>

            <div className="form-group">
                <input
                    placeholder="Your name"
                    {...register("name", { required: "Name is required" })}
                />
                {errors.name && <span>{errors.name.message}</span>}
            </div>

            <div className="form-group">
                <input
                    placeholder="Email"
                    {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^\S+@\S+$/,
                        message: "Invalid email"
                    }
                    })}
                />
                {errors.email && <span>{errors.email.message}</span>}
            </div>

            <div className="form-group">
                <textarea
                    placeholder="Message"
                    defaultValue={`Hello, I'm interested in the property "${property.title}".`}
                    {...register("message", { required: true })}
                />
            </div>

            <div className="form-group">
                <button disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send message"}
                </button>
            </div>
        </form>
        )}
    </section>
  );
}
