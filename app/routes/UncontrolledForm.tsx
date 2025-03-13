import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import ChooseInput from "~/components/input/ChooseInput";
import CountrySelect from "~/components/input/CountrySelect";
import InputFeald from "~/components/input/InputFeald";
import MeleInput from "~/components/input/MeleInput";
import UploadImage from "~/components/input/UploadImage";
import { formSchema, pictureSchema } from "~/hepler/validationSchema";
import { setCountries } from "~/store/slices/countrySlice";
import { useNavigate } from 'react-router-dom'
import { setData } from "~/store/slices/uncontrolledSlice";

const inputData = [
  {
    label: 'Name:',
    type: 'text',
    for: 'name',
    warnText: 'The name must begin with a capital letter.',
  },
  {
    label: 'Age:',
    type: 'number',
    for: 'age',
    warnText: 'Age must be a positive number.',
  },
  {
    label: 'Email:',
    type: 'email',
    for: 'email',
    warnText: 'example@gmail.com',
  },
  {
    label: 'Password:',
    type: 'password',
    for: 'password',
    warnText: 'The password must contain at least 8 characters, one uppercase and lowercase letter, a number and a special character.',
  },
  {
    label: 'Repead Password:',
    type: 'password',
    for: 'confirmPassword',
    warnText: 'Passwords must match',
  },
]

const UncontrolledForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const acceptRef = useRef<HTMLInputElement>(null);
  const pictureRef = useRef<HTMLInputElement>(null);

  const refsArr = [nameRef, ageRef, emailRef, passwordRef, confirmPasswordRef];
  const updatedInputData = inputData.map((el, id) => ({
    ...el,
    ref: refsArr[id],
  }));

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [picturePreview, setPicturePreview] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current?.value || "",
      age: ageRef.current?.value || "",
      email: emailRef.current?.value || "",
      password: passwordRef.current?.value || "",
      confirmPassword: confirmPasswordRef.current?.value || "",
      gender: genderRef.current?.value || "",
      country: countryRef.current?.value || "",
      accept: acceptRef.current?.checked || false,
      picture: picturePreview,
    };

    try {
        pictureSchema.parse(formData.picture);
        formSchema.parse(formData);
        setErrors({});
        if (countryRef.current?.value) dispatch(setCountries(countryRef.current?.value));
        if (countryRef.current?.value) dispatch(setData(formData));
        navigate("/", { replace: true });
      } catch (err: any) {
        setErrors(err.formErrors.fieldErrors); 
      }
  };

  const handlePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPicturePreview(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 border rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Un Controlled Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {updatedInputData.map((el, id) => (
          <InputFeald key={id} forInput={el.for} label={el.label} type={el.type} ref={el.ref} warnText={el.warnText} errors={errors} />
        ))}
        <MeleInput forInput={"gender"} label={"Male:"} ref={genderRef} warnText={"Country must be in Latin characters."} errors={errors} />
        <CountrySelect forInput={"country"} label={"Country"} warnText={"Choose a country"} errors={errors} ref={countryRef} />
        <ChooseInput forInput={"accept"} ref={acceptRef} warnText={"Give your consent"} errors={errors} />
        <UploadImage 
          forInput={"picture"} 
          label={"Upload an image:"} 
          type={"file"} 
          ref={pictureRef} 
          warnText={"Choose PNG and JPEG images allowed."} 
          errors={errors}
          handlePictureChange={handlePictureChange}
          picturePreview={picturePreview}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
