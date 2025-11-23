"use client";

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger,SelectValue,} from '@/components/ui/select'; 
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";
import {motion} from 'motion/react';
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from 'react';
import { toast  } from "react-toastify";



const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: "(+90) 533 869 39 81",
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: "berkalkan1@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: "Gazimagusa/KKTC",
  },
]


// Custom validation functions
const validateForm = (data) => {
  let errors = {};

  if (!data.firstname) {
    errors.firstname = "First name is required";
  }
  if (!data.lastname) {
    errors.lastname = "Last name is required";
  }
  if (!data.email || !/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Valid email is required";
  }
  if (!data.service || data.service === "") {
    errors.service = "Please select a service";
  }
  if (data.message.length < 10) {
    errors.message = "Message must be at least 10 characters long";
  }
  return errors;
};


const Contact = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialService = searchParams.get("service") || ""; // Get the service from URL
  const [selectedService, setSelectedService] = useState(initialService);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
    service: selectedService,
  });
  const [formErrors, setFormErrors] = useState({});

  //Sync the selected service with the URL
  const handleServiceChange = (value) => {
    setSelectedService(value);
    const queryParams = new URLSearchParams(window.location.search);
    queryParams.set("service", value);
    router.push(`/contact?${queryParams.toString()}`); // Update the URL
  };

  // Update form state when the page loads or service changes
  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
      setFormData(prevData => ({ ...prevData, service: initialService }));
    }
  }, [initialService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch('http://localhost:8000/api/contact/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        const result = await response.json();

        if (response.ok) {
          console.log("Successful");
          // Show success toast only after state and response are fully handled
          toast.success('Your message has been sent successfully!', {
            position: "top-right",
            style: {
              backgroundColor: '#27272c',
              color: '#4caf50',
              padding: '10px',
              borderRadius: '8px',
              fontSize: '16px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
              marginTop: "40%",
            },
            autoClose: 3000,
            hideProgressBar: false,
          });
        } else {
          const errorData = await response.json();
          console.error('Error submitting the form:', errorData);
          toast.error('Failed to send the message. Please check the form and try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An unexpected error occurred. Please try again.');
      }
    } else {
      console.log("Form validation failed");
      toast.error("Please check the form and try again.", {
        position: "top-right",
        style: {
          backgroundColor: '#27272c',
          color: '#f44336',
          padding: '10px',
          borderRadius: '8px',
          fontSize: '16px',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
          marginTop: "40%",
        },
        autoClose: 3000,
        hideProgressBar: false,
      });
    }
};

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent"> Let&apos;s work together </h3>
              <p className="text-white/60">
                Looking for a skilled partner to bring your ideas to life?
                Whether it&apos;s building modern web applications, designing
                embedded systems, or crafting IoT solutions, I am here to help.
                Let&apos;s collaborate and create something exceptional!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                  />
                  {formErrors.firstname && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-sm text-red-500 px-2 py-1"
                    >
                      {formErrors.firstname}
                    </motion.p>
                    )}
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Last Name"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                  />
                  {formErrors.lastname && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-sm text-red-500 px-2 py-1"
                    >
                      {formErrors.lastname}
                    </motion.p>
                    )}
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {formErrors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-sm text-red-500 px-2 py-1"
                    >
                      {formErrors.email}
                    </motion.p>
                    )}
                </div>
                <div>
                  <Input
                    type="text"
                    placeholder="Phone (Optional)"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* select */}
              <div>
                <Select
                  value={selectedService}
                  onValueChange={handleServiceChange}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="frntend">Frontend Development</SelectItem>
                      <SelectItem value="bckend">Backend Development</SelectItem>
                      <SelectItem value="iot">Web Server/IOT</SelectItem>
                      <SelectItem value="embedded">Embedded System Design</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {formErrors.service && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-sm text-red-500 px-2 py-1"
                    >
                      {formErrors.service}
                    </motion.p>
                    )}
              </div>

              {/* textarea */}
              <div>
                <Textarea
                  className="h-[200px]"
                  placeholder="Type your message here."
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
                {formErrors.message && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="text-sm text-red-500 px-2 py-1"
                    >
                      {formErrors.message}
                    </motion.p>
                    )}
              </div>
              {/* Send Message Button */}
              <Button size="md" className="max-w-40" type="submit">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-10 m-4">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;