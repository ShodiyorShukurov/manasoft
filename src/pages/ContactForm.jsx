import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = true;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
      alert('Xabaringiz yuborildi!');
      setFormData({ fullName: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <section className="py-[120px]">
      <div className="container">
        <div className="flex flex-col md:flex-row border border-white rounded-[24px] bg-[#ffffff0a] gap-12">
          {/* Chap qism */}
          <div
            className="md:w-[40%] p-8 rounded-[24px] border border-r-white"
            style={{
              background:
                'radial-gradient(105.25% 118.03% at 19.8% -3.5%, rgba(0, 0, 255, 0.08) 1.5%, rgba(0, 0, 255, 0.02) 100%)',
              backdropFilter: 'blur(2px)',
            }}
          >
            <h2 className="text-white text-[48px] font-medium leading-[120%] tracking-[0.48px] max-w-[420px]">
              Biznesingizni birga rivojlantiramiz!
            </h2>
            <p className="text-[#ffffffcc] text-opacity-80 text-lg mt-6 max-w-[420px]">
              Manasoft – bu innovatsion IT kompaniya, biznesingiz uchun Telegram
              botlar, mobil ilovalar va web-saytlar yaratish bo‘yicha eng
              ishonchli hamkoringiz!
            </p>
            <div className="mt-10 space-y-4 text-white">
              <a href="mailto:manasoft@gmail.com" className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                manasoft@gmail.com
              </a>
              <a href="tel:+998901112233" className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                </svg>
                +998 90 111 22 33
              </a>
              <p className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M11.9999 13.4304C13.723 13.4304 15.1199 12.0336 15.1199 10.3104C15.1199 8.5873 13.723 7.19043 11.9999 7.19043C10.2768 7.19043 8.87988 8.5873 8.87988 10.3104C8.87988 12.0336 10.2768 13.4304 11.9999 13.4304Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    d="M3.6202 8.49C5.5902 -0.169998 18.4202 -0.159997 20.3802 8.5C21.5302 13.58 18.3702 17.88 15.6002 20.54C13.5902 22.48 10.4102 22.48 8.3902 20.54C5.6302 17.88 2.4702 13.57 3.6202 8.49Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                </svg>
                Toshkent shahar
              </p>
            </div>
          </div>

          {/* O'ng qism */}
          <div className="md:w-1/2 py-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {['fullName', 'email', 'phone', 'message'].map((field) => (
                <div key={field}>
                  <input
                    type={
                      field === 'email'
                        ? 'email'
                        : field === 'phone'
                        ? 'tel'
                        : 'text'
                    }
                    name={field}
                    placeholder={
                      field === 'fullName'
                        ? 'Ism va familiya'
                        : field === 'email'
                        ? 'Email'
                        : field === 'phone'
                        ? 'Telefon'
                        : 'Xabar'
                    }
                    autoComplete="off"
                    className={`w-full bg-transparent border-b py-3 text-white placeholder:text-white focus:border-blue-400 transition-all outline-none  ${
                      errors[field] ? 'border-red-500' : 'border-white'
                    }`}
                    value={formData[field]}
                    onChange={handleChange}
                  />
                  {errors[field] && (
                    <p className="text-red-400 text-sm mt-1">
                      Bu maydon to‘ldirilishi shart!
                    </p>
                  )}
                </div>
              ))}
              <button
                type="submit"
                className="bg-[#4266B1] hover:bg-[#3659A4] text-white py-3 px-6 rounded-[32px] mt-6 cursor-pointer transition-all"
              >
                Xabarni yuborish
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
