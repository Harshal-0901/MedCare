import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import Image from "next/image";
import Link from "next/link";
import * as Sentry from "@sentry/nextjs";

const  NewAppointment= async ({ params: { userId } }: SearchParamProps) => {

  const patient = await getPatient(userId);
  Sentry.metrics.set("user_view_new_appointment",patient.name);
  return (
    <div className="flex h-screen max-h-screen">

      {/* TODO OTP Verification | PasskeyModel  */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="logo"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />
          <AppointmentForm
          
          patientId={patient?.$id}
          userId={userId}
          type="create"
          
          />

          <p className="justify-items-end text-dark-600 xl:text-left">
            &copy; 2024 Careplus <Link href={'https://linkedin.com/in/eboominathan'} >@ Boominathan Elango</Link>
            </p>

        </div>
      </section>
        <Image 
        src='/assets/images/appointment-img.png'
        height={1000}
        width={1000}
        alt="onboarding-image"
        className="side-img max-w-[390px] bg-bottom"
        />

     
    </div>
  );
}

export default NewAppointment;
