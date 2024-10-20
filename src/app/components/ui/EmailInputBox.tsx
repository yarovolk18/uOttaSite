import { useState } from 'react';
import { FaArrowRightLong, FaCheck } from "react-icons/fa6";
import { db } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useSnackbar } from 'notistack';

const EmailInputBox: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isValidEmail(email)) {
      try {
        await addDoc(collection(db, "emails"), {
          email: email,
          timestamp: new Date(),
        });
        setIsSubmitted(true);
        setEmail('');
        enqueueSnackbar('Email successfully submitted!', { variant: 'success' });
      } catch (error) {
        console.error("Error adding email: ", error);
        enqueueSnackbar('Email submission failed. Please try again.', { variant: 'error' });
      }
    } else {
      enqueueSnackbar('Please enter a valid email address.', { variant: 'warning' });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center h-14 p-1 backdrop-blur-md bg-white/70 rounded-lg overflow-hidden w-full max-w-md shadow-xl"
    >
      <input
        type="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter your email for updates"
        className="flex-grow px-4 py-3 mt-[2px] text-sm text-[#4375B6] placeholder-[#4375B6] bg-transparent outline-none leading-none"
      />
      <button
        type="submit"
        className="flex items-center justify-center bg-[#4375B6] hover:bg-[#3D6CA9] bg-opacity-90 text-white w-10 h-10 md:w-11 md:h-11 rounded-lg transition-all m-1"
      >
        {isSubmitted ? <FaCheck className="w-4 h-4 md:w-4 md:h-4" /> : <FaArrowRightLong className="w-4 h-4 md:w-4 md:h-4" />}
      </button>
    </form>
  );
};

export default EmailInputBox;